function panggilangka() {
    var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log("sebelumnya:",angka);
    console.log("======================================================")
    angka = angka.sort();
    return angka

}
var angka2 = panggilangka();
console.log("ascending:",angka2);
console.log("descending:",angka2.reverse());