import Hayvan from './Hayvan.js';

class Horoz extends Hayvan {
    constructor(isim, cinsiyet, x, y) {
        super(isim, cinsiyet, x, y, 1); // Tavuk 1 birim hareket edebilir
    }

    otme() {
        return `${this.isim} Öttü: Ü Ürü Ürü!`;
    }
}

export default Horoz;
