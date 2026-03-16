export default function handler(req, res) {
    // Diese Header sagen jedem System: NICHT SPEICHERN!
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');

    const user = req.query.user || 'Der User';
    const date = new Date().toISOString().slice(0, 10);
    
    // Seed für festen IQ pro Tag
    const seed = user.toLowerCase() + date + "iq-ultra-v2"; 
    
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const iq = Math.abs(hash % 181) + 20; 
    let message = "";

    const jokes = {
        step1: ["Du rührst deinen Kaffee wahrscheinlich mit dem Finger um.", "Gehirn hat Urlaub.", "Pleyz 2.0", "Geistige Auszeit?"],
        step2: ["Shampoo-Anleitung-Leser.", "Internet Explorer Modus.", "Karriere als Türstopper?", "M&Ms sortieren."],
        step3: ["Zimmertemperatur erreicht.", "Pech beim Denken.", "Nur Bilder-Versteher.", "Drücken statt Ziehen."],
        step4: ["Normalo-NPC.", "Standard-Mensch.", "Dummheit-Schrei-Theorie.", "Statist im eigenen Leben."],
        step5: ["Stabil!", "Schlau, aber kein Beweis.", "Potenzial ist da.", "Immer noch im Stream hängengeblieben."],
        step6: ["Schlaumeier.", "100% Alman.", "Professor Modus.", "Endlich Niveau hier."],
        step7: ["Baugenehmigung fürs Hirn.", "Matrix-Seher.", "Einstein ist Fan von dir.", "Quantenphysik-Profi."]
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
