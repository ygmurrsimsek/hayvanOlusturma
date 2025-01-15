export function avlanmaKontrol(avci, hayvanlar, mesafeLimit) {
    hayvanlar.forEach((hayvan, index) => {
        const mesafe = avci.mesafeyiHesapla(hayvan);
        if (mesafe <= mesafeLimit) {
            console.log(`${avci.isim} (${avci.constructor.name}) ${hayvan.isim} (${hayvan.constructor.name})'yi avladı!`);
            console.log(`Avcı Konumu: (${avci.x}, ${avci.y})`);
            console.log(`Avlanan Konumu: (${hayvan.x}, ${hayvan.y})`);
            console.log(`Mesafe: ${mesafe} birim`);
            console.log("-----------------------------");

            // Hayvanı listeden çıkar
            hayvanlar.splice(index, 1);  
        }
    });
}
    