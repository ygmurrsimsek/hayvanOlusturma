import Hayvan from './Hayvan.js';

class Avci extends Hayvan {
    constructor(isim, cinsiyet, x, y) {
        super(isim, cinsiyet, x, y, 1); // Avcı 1 birim hareket edebilir
        this.avlamaMesafesi = 8; // İnsan avcının avlama mesafesi

    }

    konusma() {
        return `${this.isim} Konuştu : Neredesin!`;
    }
}

export default Avci;
