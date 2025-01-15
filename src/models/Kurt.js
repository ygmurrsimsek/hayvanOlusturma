import Hayvan from './Hayvan.js';

class Kurt extends Hayvan {
    constructor(isim, cinsiyet, x, y) {
        super(isim, cinsiyet, x, y, 3); // Kurt 3 birim hareket edebilir
        this.avlamaMesafesi = 4; // Kurtun avlama mesafesi 4 birim
        this.avlayabilecegiTurler = ['Koyun', 'Tavuk', 'Horoz'];
    }

    uluma() {
        return `${this.isim} uluyor! Uuuuu!`;
    }
}

export default Kurt;
