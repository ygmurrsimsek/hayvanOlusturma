import Hayvan from './Hayvan.js';

class Inek extends Hayvan {
    constructor(isim, cinsiyet, x, y) {
        super(isim, cinsiyet, x, y, 2); // İnek 2 birim hareket edebilir
    }

    mooleme() {
        return `${this.isim} mooledi: Mööööö!`;
    }
}

export default Inek;
