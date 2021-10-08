function Celular(brand, size, osSystem) {
    this.brand = brand;
    this.size = size;
    this.osSystem = osSystem;
}

const celular = new Celular("ronniebrand", 5.5, "android")
console.log(celular);