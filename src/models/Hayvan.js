class Hayvan {
    constructor(isim, cinsiyet, x, y, adimSayisi) {
        this.id = Math.random().toString(36).substr(2, 9); // Benzersiz bir ID
        this.isim = isim;
        this.cinsiyet = cinsiyet;
        this.x = x;
        this.y = y;
        this.adimSayisi = adimSayisi; // Hayvanın bir seferde gidebileceği birim sayısı
        this.hareketHakki = 1000; // Toplam hareket hakkı
    }

    rastgeleHareketEt() {
        const yatayMi = Math.random() < 0.5;
        const hareketMiktari = this.adimSayisi * (Math.random() < 0.5 ? -1 : 1);

        if (yatayMi) {
            this.x = Math.min(500, Math.max(0, this.x + hareketMiktari));
        } else {
            this.y = Math.min(500, Math.max(0, this.y + hareketMiktari));
        }

        this.hareketHakki -= this.adimSayisi;
    }

    /**
     * İki hayvan arasındaki mesafeyi hesaplar.
     * @param {Hayvan} digerHayvan - Mesafe hesaplanacak diğer hayvan.
     * @returns {number} - İki hayvan arasındaki mesafe.
     */
    mesafeyiHesapla(digerHayvan) {
        const dx = this.x - digerHayvan.x;
        const dy = this.y - digerHayvan.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    bilgi() {
        return `ID: ${this.id}, ${this.isim} (${this.constructor.name}): Cinsiyet: ${this.cinsiyet}, Konum: (${this.x}, ${this.y}), Adım Kapasitesi: ${this.adimSayisi}, Adım Hakkı: ${this.hareketHakki}`;
    }
}

export default Hayvan;
