#!/usr/bin/env bash
# Record a mobile clip from an iOS simulator or Android emulator while a Flutter integration
# test drives ../nexow-mobile. Output: media-src/<slug>.mp4 (then run scripts/encode-videos.mjs).
#
#   scripts/record/record-mobile.sh mobile-feed-phone ios   [integration_test/flows_test.dart]
#   scripts/record/record-mobile.sh mobile-feed-phone android
#
# Needs a signed-in demo account (there is no seed mode) and env.json from env.example.json.
# Native home-screen widgets and the share sheet live outside Flutter: record those by hand.
set -euo pipefail
slug="${1:?slug}"; platform="${2:?ios|android}"; target="${3:-integration_test/flows_test.dart}"
mobile="$(cd "$(dirname "$0")/../../../nexow-mobile" && pwd)"
out="$(cd "$(dirname "$0")/../.." && pwd)/media-src"; mkdir -p "$out"

if [ "$platform" = ios ]; then
  xcrun simctl io booted recordVideo --codec=h264 --force "$out/$slug.mp4" & rec=$!
else
  adb shell screenrecord --time-limit 60 "/sdcard/$slug.mp4" & rec=$!
fi
trap 'kill -INT $rec 2>/dev/null || true; wait $rec 2>/dev/null || true' EXIT

(cd "$mobile" && flutter test "$target" --dart-define-from-file=env.json)

kill -INT $rec 2>/dev/null || true; wait $rec 2>/dev/null || true; trap - EXIT
[ "$platform" = android ] && adb pull "/sdcard/$slug.mp4" "$out/$slug.mp4"
echo "wrote $out/$slug.mp4"
