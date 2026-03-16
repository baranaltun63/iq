export default function handler(req, res) {
    const user = req.query.user || 'Der User';
    const date = new Date().toISOString().slice(0, 10);
    const seed = user.toLowerCase() + date + "iq-dark"; 
    
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Bereich 20 bis 200
    const iq = Math.abs(hash % 181) + 20;
    let message = "";

    const jokes = {
        low: [
            "Atmen und Laufen gleichzeitig ist für dich ein Endgegner-Level.",
            "Dein Stammbaum ist wohl ein Kreis.",
            "Respekt, dass du den Einschaltknopf am PC gefunden hast.",
            "In deinem Kopf spielt ein einsames Äffchen Becken-Zymbeln.",
            "Sogar eine Amöbe würde dich beim Memory-Spielen abziehen."
        ],
        midLow: [
            "Du bist der Grund, warum auf Shampoo-Flaschen eine Anleitung steht.",
            "Dein Gehirn ist wie Internet Explorer – braucht ewig und stürzt dann ab.",
            "Du bist nicht dumm, du hast nur Pech beim Denken.",
            "Schon mal über eine Karriere als Türstopper nachgedacht?",
            "Immerhin musst du dir keine Sorgen um Gehirnwäsche machen."
        ],
        average: [
            "Glückwunsch, du bist der Inbegriff von Mittelmaß.",
            "Dein IQ ist wie ein Standard-NPC: Einfach nur da.",
            "Du bist so durchschnittlich, dass man dich in der Menge sofort vergisst.",
            "Reicht gerade so, um nicht in der Evolution aussortiert zu werden.",
            "Dein Leben ist wohl so spannend wie eine Raufasertapete."
        ],
        high: [
            "Ganz ordentlich, du verstehst sogar Witze ohne Erklärung.",
            "Du bist offiziell zu schlau für den Durchschnittschat.",
            "Pass auf, dein Kopf könnte bei so viel Denken überhitzen.",
            "Endlich mal jemand, der nicht nur Klotür-Sprüche zitiert.",
            "Stabile Leistung, aber für die Weltherrschaft reicht es noch nicht."
        ],
        genius: [
            "Absolutes Genie – was machst du eigentlich in diesem Stream?",
            "Du siehst die Matrix, während die anderen noch im Sandkasten spielen.",
            "Dein IQ ist höher als die Abonnenten-Zahl mancher Streamer hier.",
            "Du hast das System gedribbelt, Legende!",
            "Wahrscheinlich bist du derjenige, der die Quantenphysik beim Kacken gelöst hat."
        ]
    };

    if (iq <= 40) {
        message = jokes.low[Math.floor(Math.random() * jokes.low.length)];
    } else if (iq <= 80) {
        message = jokes.midLow[Math.floor(Math.random() * jokes.midLow.length)];
    } else if (iq <= 100) {
        message = jokes.average[Math.floor(Math.random() * jokes.average.length)];
    } else if (iq <= 120) {
        message = jokes.high[Math.floor(Math.random() * jokes.high.length)];
    } else {
        message = jokes.genius[Math.floor(Math.random() * jokes.genius.length)];
    }

    res.status(200).send(`[IQ-Test] ${user} hat heute einen IQ von ${iq}. ${message}`);
}
