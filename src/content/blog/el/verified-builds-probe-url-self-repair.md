---
title: 'Widgets που ελέγχουν τη δική τους υποδομή: probe_url, verifier agent και μία δωρεάν επισκευή'
description: 'Η μεγαλύτερη πηγή νεκρών widgets ήταν κώδικας γραμμένος εναντίον φανταστικού API. Τώρα ο builder fetch το endpoint ενώ γράφει, ο verifier re-probe ό,τι παρέλειψε, και crash στα πρώτα 45 δευτερόλεπτα αγοράζει μία αυτόματη διόρθωση.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['προϊόν', 'ai', 'πώς-λειτουργεί']
---

Ο πιο συνηθισμένος τρόπος αποτυχίας ενός generated widget δεν ήταν bug στον
generated κώδικα. Ήταν endpoint που δεν υπήρχε ποτέ.

Το model πήρε URL από μνήμη — ή από directory row whose link είναι *documentation
page*, όχι endpoint — μάντεψε response shape, έγραψε careful parsing code εναντίον
αυτής της μάντευσης και ship. Πήρατε αιώνιο spinner ή κενό chart, χωρίς τίποτα
στην οθόνη να λέει γιατί.

Αυτό το release κλείνει το loop τρεις φορές: ενώ γράφει το model, αμέσως μετά
και άλλη μία αν ακόμα crash μπροστά σας.

## Ενώ γράφει: `probe_url`

Ο builder έχει tool που **GET public keyless endpoint τώρα**, μέσω του ίδιου server
proxy που χρησιμοποιεί `ctx.data.http()` στο runtime, και επιστρέφει πραγματικό HTTP
status και πραγματικό response body.

Αυτή η ταυτότητα είναι όλο το νόημα. Probe που επιτυγχάνει *είναι* runtime call που
επιτυγχάνει. Probe που αποτυγχάνει είναι widget που θα είχε ship broken — και
αποτυγχάνει τώρα, ενώ απομένει turn για fix, όχι στο canvas σας.

Κάθεται στον πάτο σκάλας που ο builder πρέπει να ανέβει αντί να συλλογίζεται από
μνήμη: venue reference docs πρώτα, μετά **directory 691 keyless public APIs σε 47
categories**, searchable by topic across name *και* description κάθε entry — γιατί
πραγματικά requests («tide times», «air quality») σπάνια map σε category που
κάποιος θα μάντευε. Directory πάντα διαθέσιμο στον builder, whatever else in scope,
γιατί universal keyless fallback. Links documentation, last step πάντα ίδιο: derive
endpoint, probe.

«Υπάρχουν data για X;» ερώτηση που απαντιέται κοιτώντας, όχι reasoning about datasets.
Φτάνοντας στο τέλος της σκάλας και λέγοντας *no* after checking fine outcome.
Asserting from memory not, και ήταν wrong far more often than felt.

## Αμέσως μετά: verifier

Asking model verify own work request, not guarantee. Moment widget code lands, δύο
πράγματα independent of model agreeing.

First, tool result **names endpoints never probed this turn** and tells check while
rounds remain.

Second — part without cooperation — verifier runs **concurrently with model writing
summary**, does work itself:

- **Lint module** for failure classes silent by construction. Missing `render` export.
  Code doesn't parse. Raw `fetch` or `WebSocket` to third-party host sandbox blocks —
  most damaging silent failure in generated widgets, nothing in console. External
  image or video URL straight to `src`. Hard-coded tile URL to map library mounts
  and pans perfectly while every tile request quietly refused.
- **Probe every endpoint model skipped** (up to five per module), read verdict as model:
  unreachable, or 4xx saying URL or parameters wrong.

Real problems buy **one automatic in-turn repair round**, probe output attached as
evidence, instruction fix only named. Round while build full context still hot —
far cheaper than ship broken and whole new turn later. Model rewrites module
mid-flight, verification superseded, verdict discarded. Verifier fails internally
verifies clean: can delay build, never break one.

## Αν ακόμα crash: one repair, hard-bounded

Self-repair context already fed runtime errors to *next* chat turn — but only when
you sent one. Widget crashed seconds after build stayed broken until noticed,
reopened composer, typed «it's broken».

Runtime host spends **one automatic fix turn** when fresh build crashes. Automatic
turn app spending credits or key, bounds deliberately tight:

- only version AI build *just* produced — crash in old version restored or
  hand-edited code never qualifies;
- only within **45 seconds** of that build — crash hour later new information for
  you, not obvious build defect;
- **once per version**, version produced *by* auto-repair turn itself ineligible.
  One build at most one automatic follow-up — never chain model paying itself to
  keep failing.

Repair turn worded as app reporting defect, same instruction: failure involves data
endpoint, probe before rewriting. Fix it, keep what works, don't grow widget scope.

Server side rescued background build waits when another turn same widget already
live, instead of racing duplicate version.

## Same loop, every mode

All in one shared module — platform builds, bring-your-own-key browser builds,
server-side build sweep **identical** behaviour: same tools, probe formatting,
verifier, repair budget. Modes cannot drift. Also loop that produced [τα δέκα
example widgets](/blog/starter-widgets-examples-workspace) next release: built by
exactly this, exactly these checks.

None makes model correct. Makes being wrong survivable, usually invisible: endpoint
checked before code depends, check runs whether model felt like it, first crash one
honest fix attempt before reaches you.

[Ξεκινήστε το Nexow](https://x.nexow.ai) and ask something obscure — tide times,
air quality, public holidays. Watch activity rail probe endpoint before writes
parsing line.
