---
title: 'Δέκα παραδειγματικά widgets έρχονται πλέον με το Nexow — συζήτηση και όλα'
description: 'Ένας νέος λογαριασμός δεν ανοίγει πλέον σε κενό canvas. Δέκα ολοκληρωμένα widgets φτάνουν ως workspace Παραδειγμάτων, το καθένα με το πραγματικό chat που το έφτιαξε και το πραγματικό ιστορικό εκδόσεων — φτιαγμένα με τον ίδιο codegen loop που χρησιμοποιείτε εσείς, χωρίς τίποτα συνδεδεμένο.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['προϊόν', 'onboarding', 'widgets']
---

Η πιο δύσκολη οθόνη στο Nexow ήταν πάντα η πρώτη: κενό canvas, κουτί prompt και
καμία απόδειξη ότι όλα λειτουργούν. Μπορούσατε να διαβάσετε docs, ή να
πληκτρολογήσετε κάτι και να ελπίζετε.

Με την επόμενη έκδοση, νέος λογαριασμός boot σε **workspace Παραδειγμάτων** —
δέκα ολοκληρωμένα widgets σε τρεις οθόνες, όλα τρέχουν στο πρώτο load, **χωρίς
τίποτα συνδεδεμένο**. Όχι screenshots, όχι guided tour. Λειτουργικά widgets που
μπορείτε να ανοίξετε, να επεξεργαστείτε, να αποσυναρμολογήσετε και να
δημοσιεύσετε από πάνω.

## Τι περιέχει το pack

**Live world** — ρολόι κόσμου με δαχτυλίδι μέρα/νύχτα και μπάρα επικάλυψης
ωρών εργασίας· πρόγνωση καιρού επτά ημερών με ωριαία καμπύλη· κάθε σεισμός
τελευταίας ώρας, ημέρας ή εβδομάδας σε live map, sized by magnitude· και live
air quality με τον ρύπο που οδηγεί τον δείκτη.

**Markets** — Binance candlesticks με live last candle και badge 24h change· FX
converter σε ECB reference rates με 90-day history· τα πιο ενεργά Polymarket
questions και τι πιστεύει το πλήθος· και οποιοδήποτε World Bank indicator, για
δύο χώρες μαζί, ως long-run chart.

**Make and play** — πίνακας sticky notes που επιβιώνει reload μέσω durable
per-item storage, και ροή Wikipedia on-this-day με thumbnails και date picker.

Κάθε πηγή keyless: Open-Meteo, USGS, Binance public data, Frankfurter,
Polymarket, World Bank, Wikipedia. Κανόνας, όχι σύμπτωση — παράδειγμα που ανοίγει
σε «Connect OANDA» χειρότερο από κενό canvas.

## Φτιάχτηκαν πραγματικά, δεν γράφτηκαν

Κάθε παράδειγμα ξεκίνησε ως brief γραμμένο όπως πληκτρολογεί άνθρωπος — τι
θέλει και γιατί, όχι specification. `starter:build` τρέχει αυτά τα brief μέσω
**`runWidgetToolLoop`**: το ίδιο module που οδηγούν platform codegen route και
bring-your-own-key path του browser, με το ίδιο contract, tools και in-turn
verifier. Χωρίς HTTP stream, credit ledger, browser — αλλά τον ίδιο loop.

Το transcript στο chat tab widget είναι η γνήσια συζήτηση, και κάθε turn που
παρήγαγε κώδικα είναι γνήσια έκδοση στο rail. Τα περισσότερα έχουν τρία. **Air
quality έχει πέντε**, γιατί τα πρώτα τρία το άφηναν να ανοίγει σε κενό «enter a
city», και ο πέμπτος turn είναι bug report: έξι pollutant tiles όλα dash, και
timestamp *«-6375 min ago»*. Αυτό το build στο pack ακριβώς όπως συνέβη.

Κρίσιμα, τα brief τρέχουν **χωρίς providers attached** — ακριβώς τι έχει νέος
λογαριασμός. Ό,τι βγαίνει από αυτόν τον loop δουλεύει την πρώτη μέρα.

## Όχι δεύτερος κατάλογος

Κάθε παράδειγμα είναι συνηθισμένο marketplace asset, δημοσιευμένο από τον
επίσημο λογαριασμό μέσω του ίδιου RPC με τη δουλειά όλων: ίδιοι sanitizers,
lineage graph, install path, royalty chain. Τίποτα starter widget δεν είναι
special-cased στον server, σκόπιμα — fork ένα και συνεχίζετε πραγματικό lineage
αντί να ανακαλύψετε ότι τα παραδείγματα της app ζουν σε private διάλεκτο.

Curation registry από πάνω κρατά μόνο curation: ποια published assets αποτελούν
το pack, σε ποια σειρά, σε ποια οθόνη. Γραφές service-role only· αναγνώσεις
public, γιατί signed-out visitor μπορεί να βλέπει listing page.

## Πού προσγειώνεται το pack και τι δεν κάνει

Seeding gated τρεις τρόπους. Τρέχει **μία φορά ανά λογαριασμό, όχι ανά device** —
η σημαία είναι replicated setting, re-read on account switch. Ποτέ δεν seed
canvas που κάποιος ήδη χρησιμοποίησε. Και μπορεί force από **Settings → General
→ Add example widgets**, για λογαριασμούς πριν το pack ή όποιον διέγραψε workspace.

Τα παραδείγματα προσγειώνονται *δίπλα* στο δικό σας κενό workspace αντί να το
αντικαθιστούν, οπότε onboarding δίνει ακόμα καθαρή οθόνη για πληκτρολόγηση. Όλο
το pack ένα undo step.

Κάθε seeded widget σφραγίζεται ως marketplace install που είναι, οπότε βελτίωση
και publish συνεχίζουν official lineage αντί rival copy. Όταν ship καλύτερη έκδοση
παραδείγματος, **already-seeded users κρατούν τη δική τους** — widget τους τώρα,
ίσως edited. Δεν υπάρχει push-update path, και δεν πρέπει.

## Verified ως pack, όχι με μάτι

Πριν φτάσει σε λογαριασμό, όλο το pack σε real Chrome graded per widget: boot
errors, runaway animation loops, slow frames, blank renders — plus screenshot
each. Ξεχωριστό live check παράγει κάθε public endpoint από committed code και
επιβεβαιώνει ότι ακόμα απαντά — το test δεν μένει stale ενώ τα widgets αλλάζουν.

Το bar για ενδέκατο ίδιο με αυτά τα δέκα: zero connections, clean smoke verdict,
real message αντί blank tile όταν data source έχει bad day, και τίποτα personal
στη συζήτηση — γιατί η συζήτηση ship κι αυτή.

Το pack ship με την επόμενη έκδοση· existing accounts μπορούν pull από **Settings
→ General** όποτε θέλουν. Ανοίξτε ένα, διαβάστε chat που το έφτιαξε, αλλάξτε
κάτι — ακόμα ο ταχύτερος τρόπος να μάθετε τι μπορεί το canvas.

[Ξεκινήστε το Nexow](https://x.nexow.ai) και ξεκινήστε να χτίζετε στο μεταξύ.
