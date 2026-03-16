export default function handler(req, res) {
    // Header setzen, um Caching zu verhindern
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const user = req.query.user || 'Der User';
    
    // ECHTES RANDOM: Generiert jedes Mal eine Zahl zwischen 20 und 200
    const iq = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

    let message = "";

    const jokes = {
        step1: [ // 20-40
            "Du rührst deinen Kaffee wahrscheinlich mit dem Finger um und wunderst dich, warum er nass wird",
            "Dein Gehirn hat wohl Urlaub genommen oder.",
            "Pleyz 2.0",
            "Ein Wunder, dass du die Tastatur gefunden hast."
        ],
        step2: [ // 41-60
            "Du bist der Grund, warum auf Shampoo-Flaschen eine Anleitung steht.",
            "Dein Gehirn ist wie Internet Explorer – braucht ewig und stürzt dann ab.",
            "Schon mal über eine Karriere als Türstopper nachgedacht?",
            "Du versuchst wahrscheinlich, M&Ms nach Alphabet zu sortieren."
        ],
        step3: [ // 61-80
            "Zimmertemperatur erreicht. Stabil für RTL2.",
            "Du bist nicht dumm, du hast nur Pech beim Denken.",
            "Du verstehst bei Filmen mit Untertiteln nur die Bilder.",
            "Du drückst an der Tür wo ziehen steht."
        ],
        step4: [ // 81-100
            "Du bist so normal, dass du in einer Menschenmenge unsichtbar wirst.",
            "Dein IQ ist wie ein Standard-NPC: Einfach nur da.",
            "Wenn Dummheit wehtun würde, würdest du permanent schreien.",
            "Du bist der NPC in deinem eigenen Leben."
        ],
        step5: [ // 101-120
            "Stabil! Du verstehst sogar Witze ohne Erklärung.",
            "Du bist schlau genug, um alles besser zu wissen, aber zu dumm, um es zu beweisen.",
            "Stabil, da ist Potenzial da. Aber für mehr reicht es nicht.",
            "Schlauer als der Durchschnitt, aber immer noch hier im Stream."
        ],
        step6: [ // 121-150
            "Tmm, wir haben einen Schlaumeier hier.",
            "100% Alman.",
            "Professor Modus aktiviert. Geh mal was Sinnvolles arbeiten.",
            "Endlich mal jemand, der nicht nur Klotür-Sprüche zitiert."
        ],
        step7: [ // 151-200
            "Dein Gehirn ist so groß, dass es bald eine eigene Baugenehmigung braucht.",
            "Du siehst die Matrix, während die anderen noch im Sandkasten spielen.",
            "Cüsh??! Sogar Einstein will dir einen blasen.",
            "Du hast wahrscheinlich die Quantenphysik beim Kacken gelöst."
        ]
    };

    if (iq <= 40) message = jokes.step1[Math.floor(Math.random() * jokes.step1.length)];
    else if (iq <= 60) message = jokes.step2[Math.floor(Math.random() * jokes.step2.length)];
    else if (iq <= 80) message = jokes.step3[Math.floor(Math.random() * jokes.step3.length)];
    else if (iq <= 100) message = jokes.step4[Math.floor(Math.random() * jokes.step4.length)];
    else if (iq <= 120) message = jokes.step5[Math.floor(Math.random() * jokes.step5.length)];
    else if (iq <= 150) message = jokes.step6[Math.floor(Math.random() * jokes.step6.length)];
    else message = jokes.step7[Math.floor(Math.random() * jokes.step7.length)];

    res.status(200).send(`[IQ-Test] ${user} hat heute einen IQ von ${iq}. ${message}`);
}
