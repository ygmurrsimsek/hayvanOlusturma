export function uremeKontrol(hayvanSınıfı,isim, uremeMesafesi = 3, uremeYapilanlar) {
    const yeniHayvanlar = [];

    for (let i = 0; i < hayvanSınıfı.length; i++) {
        for (let j = i + 1; j < hayvanSınıfı.length; j++) {
            const hayvan1 = hayvanSınıfı[i];
            const hayvan2 = hayvanSınıfı[j];

            const id1 = hayvan1.id;
            const id2 = hayvan2.id;
            const ciftId = [id1, id2].sort().join('-'); 
            
            if (uremeYapilanlar.has(ciftId)) {
                continue;
            }

            if (hayvan1.tur !== hayvan2.tur) {
                continue; 
            }

            if (
                hayvan1.cinsiyet !== hayvan2.cinsiyet &&
                hayvan1.mesafeyiHesapla(hayvan2) <= uremeMesafesi
            ) {
               
                const yeniCinsiyet = Math.random() < 0.5 ? 'Erkek' : 'Dişi';

               

                const yeniX =  Math.floor(Math.random() * 500);
                const yeniY = Math.floor(Math.random() * 500);
                const mevcutHayvanlar = hayvanSınıfı.filter(h => h.isim.startsWith(isim)); // İsim ile filtreleme yapıyoruz
                
                const yeniIsim = `${String(isim).charAt(0).toUpperCase() + String(isim).slice(1)} ${hayvanSınıfı.length + 1}`;

                const yeniHayvan = new hayvan1.constructor(
                    yeniIsim, 
                    yeniCinsiyet, 
                    yeniX, 
                    yeniY, 
                    hayvan1.adimSayisi, 
                    hayvan1.tur 
                );
                yeniHayvan.hareketHakki = 1000; 

                yeniHayvanlar.push(yeniHayvan);

                console.log(`${hayvan1.isim} ve ${hayvan2.isim} üredi. Yeni hayvan: ${yeniHayvan.isim} Konum: (${yeniHayvan.x}, ${yeniHayvan.y})`);

                yeniHayvan.rastgeleHareketEt(); 

                uremeYapilanlar.add(ciftId);

                hayvan1.rastgeleHareketEt();
                hayvan2.rastgeleHareketEt();
            }

        }
    }

    // Yeni hayvanları gruba ekle (bu adım üreme döngüsünün sonunda yapılacak)
    hayvanSınıfı.push(...yeniHayvanlar);
}
