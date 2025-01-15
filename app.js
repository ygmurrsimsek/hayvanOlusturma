import Kurt from './src/models/Kurt.js';
import Aslan from './src/models/Aslan.js';
import Avci from './src/models/Avci.js';
import Koyun from './src/models/Koyun.js';
import Tavuk from './src/models/Tavuk.js';
import Horoz from './src/models/Horoz.js';
import Inek from './src/models/Inek.js';
import { hayvanOlustur } from './src/models/hayvanOlustur.js';
import { avlanmaKontrol } from './src/models/avlanmaKontrol.js';
import { uremeKontrol } from './src/models/UremeKontrol.js';

// Hayvanları oluştur
const koyunlar = hayvanOlustur(Koyun, 'Koyun', 30, 2);
const tavuklar = hayvanOlustur(Tavuk, 'Tavuk', 10, 1);
const horozlar = hayvanOlustur(Horoz, 'Horoz', 10, 1);
const kurtlar = hayvanOlustur(Kurt, 'Kurt', 10, 3);
const aslanlar = hayvanOlustur(Aslan, 'Aslan', 8, 4);
const inekler = hayvanOlustur(Inek, 'İnek', 10, 2);
const avcilar = [new Avci('Avcı', 0, 1)];
const uremeYapilanlar = new Set(); // Üreme yapılan çiftleri takip etmek için bir Set

// Avcılar ve hayvanları ayrı dizilerde tutuyoruz
const hayvanlar = {
    koyunlar: koyunlar,
    tavuklar: tavuklar,
    horozlar: horozlar,
    inekler: inekler,
};

const tumHayvanlar = [...koyunlar, ...tavuklar, ...horozlar, ...inekler, ...kurtlar, ...aslanlar];
const tumAvcilar = [...kurtlar, ...aslanlar, ...avcilar];

const MAX_ADIM = 1000;
// Simülasyon döngüsü
let adim = 1;
while (adim <= MAX_ADIM && tumHayvanlar.some(h => h.hareketHakki > 0)) {
    // console.log("ADIM ",adim)
    // Hayvanları hareket ettir
    tumHayvanlar.forEach(hayvan => {
        if (hayvan.hareketHakki > 0) {
            hayvan.rastgeleHareketEt();
        }
    });

    // Üreme kontrolü
    uremeKontrol(koyunlar,'koyun', 3,uremeYapilanlar);
    uremeKontrol(tavuklar,'tavuk', 3,uremeYapilanlar);
    uremeKontrol(horozlar,'horoz', 3,uremeYapilanlar);
    uremeKontrol(inekler,'inek', 3,uremeYapilanlar);
    uremeKontrol(kurtlar,'kurt', 3,uremeYapilanlar);
    uremeKontrol(aslanlar,'aslan', 3,uremeYapilanlar);

    // Avlanma kontrolü
    tumAvcilar.forEach(avci => {
        if (avci instanceof Kurt) {
            avlanmaKontrol(avci, koyunlar, 4);
            avlanmaKontrol(avci, tavuklar, 4);
            avlanmaKontrol(avci, horozlar, 4);
        }

        if (avci instanceof Aslan) {
            avlanmaKontrol(avci, koyunlar, 5);
            avlanmaKontrol(avci, inekler, 5);
        }

        if (avci instanceof Avci) {
            avlanmaKontrol(avci, koyunlar, 8);
            avlanmaKontrol(avci, tavuklar, 8);
            avlanmaKontrol(avci, horozlar, 8);
            avlanmaKontrol(avci, inekler, 8);
            avlanmaKontrol(avci, kurtlar, 8);
            avlanmaKontrol(avci, aslanlar, 8);
        }
    });

    adim++;
}
// Kalan hayvan sayısını yazdır
console.log(`Kalan Koyun Sayısı: ${koyunlar.length}`);
console.log(`Kalan Tavuk Sayısı: ${tavuklar.length}`);
console.log(`Kalan Horoz Sayısı: ${horozlar.length}`);
console.log(`Kalan İnek Sayısı: ${inekler.length}`);
console.log(`Kalan Kurt Sayısı: ${kurtlar.length}`);
console.log(`Kalan Aslan Sayısı: ${aslanlar.length}`);
console.log(`Kalan İnsan Avcı Sayısı: ${avcilar.length}\n`);

console.log('Simülasyon tamamlandı.');




