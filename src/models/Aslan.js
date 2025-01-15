import Hayvan from './Hayvan.js';

class Aslan extends Hayvan {
    constructor(isim, cinsiyet, x, y) {
        super(isim, cinsiyet, x, y, 4); // Aslan 4 birim hareket edebilir
        this.avlamaMesafesi = 6;
    }

    kukreme() {
        return `${this.isim} kükredi: miyav!`;
    }
}

export default Aslan;
