import Hayvan from './Hayvan.js';

class Tavuk extends Hayvan {
    constructor(isim, cinsiyet, x, y) {
        super(isim, cinsiyet, x, y, 1); // Tavuk 1 birim hareket edebilir
    }

    gıdaklama() {
        return `${this.isim} Gıdakladı: Gıt Gıt Gıdak!`;
    }
}

export default Tavuk;
