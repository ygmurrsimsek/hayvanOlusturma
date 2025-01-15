export function hayvanOlustur(HayvanSınıfı, isim, adet, adimSayisi) {
    const hayvanlar = [];
    const yarisi = Math.floor(adet / 2); 

    for (let i = 0; i < adet; i++) {
        const cinsiyet = i < yarisi ? 'Erkek' : 'Dişi';
        const x = Math.floor(Math.random() * 500);
        const y = Math.floor(Math.random() * 500); 
        hayvanlar.push(new HayvanSınıfı(`${isim} ${i + 1}`, cinsiyet, x, y, adimSayisi));
    }

    return hayvanlar;
}
