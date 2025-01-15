import Hayvan from './Hayvan.js';

class Koyun extends Hayvan {
    constructor(isim, cinsiyet, x, y) {
        super(isim, cinsiyet, x, y, 2); // Koyun 2 birim hareket edebilir
    }

    melesme() {
        return `${this.isim} meledi: Meeee!`;
    }
}

export default Koyun;
