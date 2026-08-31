---
title: 'Ανατομία ενός trading cockpit: μία οθόνη, οκτώ widgets και τι τροφοδοτεί το καθένα'
description: 'Ένα reference desk αποσυναρμολογημένο πλακίδιο-πλακίδιο — τι είναι κάθε widget, ποια σύνδεση το τροφοδοτεί, ποια καλώδια τα δένουν και τι συνεχίζει όταν η καρτέλα είναι κλειστή. Λιγότερο release note, περισσότερο χάρτης.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['αποσύνθεση', 'χώρος εργασίας', 'crypto']
category: teardown
---

Τα περισσότερα από όσα δημοσιεύουμε εδώ είναι σημείωση έκδοσης: κάτι
κυκλοφόρησε, να τι κάνει. Αυτό το post είναι διαφορετικού είδους. Τίποτα από
τα παρακάτω δεν είναι νέο. Είναι μία ολοκληρωμένη οθόνη, αποσυναρμολογημένη,
ώστε να δείτε πώς τα κομμάτια που στέλνουμε ξεχωριστά ενώνονται στην πράξη.

Ο πίνακας είναι crypto cockpit — οκτώ widgets σε μία οθόνη, φτιαγμένα από
δημόσια δεδομένα αγοράς, χωρίς κλειδιά πουθενά. Τίποτα δεν είναι ιδιαίτερο.
Αυτό είναι το νόημα: κάθε μέρος μπορείτε να το ξαναφτιάξετε περιγράφοντάς το.

## Η οθόνη

![Μία οθόνη με οκτώ πλακίδια widget, το καθένα με αριθμό από ένα έως οκτώ](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "Όλο το desk. Μία οθόνη, οκτώ widgets, τοποθετημένα στο ελεύθερο canvas — οι αριθμοί αντιστοιχούν στη λίστα παρακάτω.")

1. **Candlesticks.** Το anchor πλακίδιο. Ένα symbol, ένα interval, ζωντανό last
   candle. Όλα τα άλλα στην οθόνη είτε το τροφοδοτούν είτε το ακολουθούν.
2. **Βάθος order book.** Bids και asks ως stacked bars, ώστε ένα λεπτό book να
   φαίνεται, όχι να συμπεραίνεται.
3. **Watchlist.** Μια χούφτα symbols, ένα επιλεγμένο. Αυτό το πλακίδιο είναι το
   τιμόνι της οθόνης — περισσότερα παρακάτω.
4. **Υπόλοιπα wallet.** Δημόσια διεύθυνση, read-only, μέσω wallet connection.
   Χωρίς signing, χωρίς κλειδιά, τίποτα να εγκρίνετε.
5. **Funding rates.** Perp funding τις τελευταίες few windows, θετικό και
   αρνητικό και στις δύο πλευρές μιας μηδενικής γραμμής.
6. **Heatmap.** Το ίδιο σύμπαν με τη watchlist, sized και shaded, για glance
   αντί για ανάγνωση.
7. **Prediction markets.** Τι τιμά το πλήθος, δίπλα σε τι τιμά το order book.
   Το ενδιαφέρον είναι όταν διαφωνούν.
8. **Inbox ειδοποιήσεων.** Άδειο most of the day. Το γεμίζει bot που δουλεύει
   με κλειστή καρτέλα.

**Οθόνη** σημαίνει μία διάταξη widgets. **Workspace** κρατά πολλές. Το canvas
είναι free-form — τοποθετείτε όπου θέλετε, και groups μπορούν να stack πλακίδια
σε mosaics ή tabs — αλλά είναι canvas με άκρα, όχι άπειρο επίπεδο που χάνεστε.

## Ακολουθήστε ένα πλακίδιο μέχρι κάτω

Κάθε πλακίδιο σε αυτή την οθόνη έχει τις ίδιες τέσσερις στρώσεις από κάτω.
Πάρτε τη watchlist:

![Διαδρομή αριστερά προς δεξιά: μια σύνδεση τροφοδοτεί generated code, ο κώδικας render ένα widget μέσα σε dashed sandbox boundary, και ένα wire φέρνει τιμή σε chart](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Ένα πλακίδιο, πάνω προς τα κάτω: σύνδεση, generated code, running widget, και wire που βγάζει τιμή.")

1. **Σύνδεση.** Ένας από τους 90 live connectors — εδώ δημόσια market data, που
   δεν χρειάζονται credentials. Connections είναι inventory, όχι configuration:
   attach ένα σε widget και το widget rebuild ξέροντας πώς να το χρησιμοποιήσει.
2. **Generated code.** Περιγράψατε watchlist· ένα build την έγραψε. Έχει version
   history, και μπορείτε να διαβάσετε κάθε turn της συζήτησης που την έφτιαξε.
3. **Running widget.** Εκτελείται sandboxed. Widget που misbehaves καταστρέφει
   το δικό του πλακίδιο και τίποτα άλλο — ο μόνος λόγος να τρέχει software που
   δεν διαβάσατε.
4. **Wire out.** Το πλακίδιο emit όταν κάνετε click row. Μόνο του δεν πάει
   πουθενά. Αυτό που το κάνει cockpit αντί για οκτώ ξεχωριστά πλακίδια είναι το
   επόμενο μέρος.

## Αυτό που το κρατά μαζί είναι wiring, όχι code

![Γράφος των ίδιων οκτώ numbered widgets, με two-way wire μεταξύ watchlist και chart, one-way wires στο order book και funding, και connection, bot και agent attached από αριστερά](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Τα ίδια οκτώ πλακίδια ως γράφος. Solid lines είναι wires μεταξύ widgets· dashed lines είναι attachments από το υπόλοιπο inventory.")

Δύο μηχανισμοί πίσω από τη μία λέξη *wire*, και η διάκριση φαίνεται στο διάγραμμα
ως solid versus dashed:

- **Widget to widget** είναι **glue link** — πραγματικός generated code, με δικό
  του version history, τρέχοντας σε hidden runtime, mapping τι emit το ένα tile
  σε τι expect το άλλο. Το arc watchlist-chart είναι two-way: αλλάξτε symbol σε
  οποιοδήποτε και ακολουθούν και τα δύο. Two-way wires θα echo forever χωρίς
  βοήθεια, οπότε delivered value θυμάται και identical bounce-back drop μία φορά.
- **Widget to connection, bot ή agent** είναι **attachment** — record τι έμαθε
  rebuild στον *δικό* code του widget. Αυτές οι dashed lines. Staged όχι
  automatic — browse πέντε sources κοστίζει ένα rebuild, όχι πέντε.

Σε αυτή την οθόνη wiring deliberately thin: watchlist drives chart both ways,
order book και funding one way. Τρία wires. Τέταρτο για heatmap tempting και
λάθος — tile που αλλάζει όταν δεν κοιτάτε είναι tile που σταματάτε να εμπιστεύεστε.

Wire editor έχει **Test it** bar για αυτό. Pick topic και value, choose ποιο end
pretend emit, send real event μέσω real runtime. Verdict διακρίνει *wire isn't
running* από *ran but forwarded nothing* από *forwarded but widget not on screen*.
Πριν, broken wire και wire σε άλλη οθόνη looked identical: nothing happened.

## Τι συνεχίζει όταν η καρτέλα είναι κλειστή

Tile 8 είναι το μόνο που δεν είναι widget στο usual sense. Είναι inbox, και το
γεμίζει **bot**.

Bots deliberately unglamorous — fixed catalogue processors (threshold, change,
crossover, RSI, volume spike, digest, new trade, wallet activity, wallet balance)
over exactly τρία kinds: market candles, broker account, public wallet address.
No model in loop — precisely why leave one running month. Όταν fire, fan out
τέσσερα μέρη: alert inbox, widget bus (tile 8 live update), webhook, connected
database.

**Agents** η άλλη μισή, opposite shape: general-purpose, per-tool grants για web
search, social, market data, databases, memory κ.ά., manual ή 15-minute-to-daily
trigger. Agent όταν ερώτημα *«summarise overnight»* όχι *«tell me when crosses»*.
Both feed tile 8· only one cheap unattended.

## Τι αυτή η οθόνη deliberately δεν κάνει

Δεν trade. Τίποτα δεν place order — separate grant, separate connector, same screen
με heatmap glance είναι πώς accidents happen.

Δεν hold key. Κάθε source public: candles, depth, funding, prediction markets,
read-only address. Desk που hand χωρίς revoke afterwards αξίζει περισσότερο από
desk με δύο extra tiles.

Και δεν finished — screens δεν reach that state. Honest teardown: layout above
fourth· first three more tiles, told less.

[Ξεκινήστε το Nexow](https://x.nexow.ai) και περιγράψτε το πρώτο tile. Τα
άλλα επτά ευκολότερα.
