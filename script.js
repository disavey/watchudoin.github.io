//ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2
// yaitu counted loop (terhitung) and uncounted loop (tak terhitung)
//perbedaannya:
//1. counted loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya
//2. uncounted loop merupakan perulangan yang tidak jelas berapa kali harus mengulang

//contoh
// function PushUp(){
//     //code
// }
// for(i = 0; i<10; i++){
//     PushUp();
// }


// let bosan;

// //contoh uncounted loop
// while(bosan == false){
//     PushUp();
// }

//macam macam perulangan counted loop
//1. perulangan For
//2. perulangan ForEach
//3. perulangan Repeat

//macam macam perulangan uncounted loop
//1. perulangan While
//2. perulangan Do/While

//perulangan FOR
//PERULANGAN for merupakan perulangan yang termasuk dalam counted loop, karena sudah jelas berapa kali akan mengulang sebuah perulangan.
//contoh

// for(let i = 0; i < 10; i++){
//     document.write(`<p>Perulangan ini berulang ${i + 1} kali</p>`)
// }

//perulangan WHILE

//perulangan while merupakan perulangan yang termasuk ke dalam perulangan uncounted loop namun, perulangan while juga dapat masuk atau menjadi perulangan counted loop dengan memberikan sebuah counter di dalamnya

//contoh
// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulang){
//     var jawab = confirm("Apakah anda mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }
// }

// document.write("Perulangan sudah dilakukan sebanyak" + counter + "kali");

//perulangan Do/While
//perulangan do/while sama seperti perulangan while.

//perbedaannya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurungb while

// do{
    //code
// }while(kondisi);

//contoh
// var ulang = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda mau mengulang?");
// }while(ulang);

// document.write("perulangan yang sudah dilakukan sebanyak " + counter + "kali");

let sum = "";
while(true){
    let value = prompt("Lagi ape ?", '');
    if(!value) break;
    sum+= value;
}

alert(`sum : ` + sum);