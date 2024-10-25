/*20241024-find-missing-number.ts


Tantangan: Find the Missing Number
Diberikan sebuah array yang berisi angka-angka dari 1 hingga n dengan satu angka yang hilang. Temukan angka yang hilang tersebut.

Input:
Array nums yang berisi angka dari 1 hingga n (dengan satu angka yang hilang).
Contoh: [1, 2, 4, 5, 6]

Output:
Angka yang hilang dari array tersebut.
Contoh: 3

Langkah Penyelesaian:
Cari jumlah total dari angka 1 hingga n menggunakan rumus n * (n + 1) / 2.
Hitung jumlah semua angka dalam array.
Kurangkan jumlah total dengan jumlah dari array untuk menemukan angka yang hilang.


*/

function findMissingNUmber(nums: number[]): number {
    const n = nums.length + 1; //n adalah jumlah elemen seharusnya
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = nums.reduce((a, b) => a + b, 0);
    return totalSum - arraySum;
}


// penggunaan
const nums = [1, 2, 4, 5, 6]; // baca baik baik, setelah 2 adalah 4 tidak ada 3
console.log(findMissingNUmber(nums)); // output 3




//pembahasan

/* 
Ini adalah pembahasan singkat saja dari bagaimana cara kerja program yang dibuat

1. Kita mulai dengan menentukan jumlah total angka dari 1 hingga n, di mana n adalah panjang array + 1.
   Kenapa +1? Karena ada satu angka yang hilang di dalam array, jadi kita perlu menghitung panjang sebenarnya.
   Misalnya, jika array berisi 5 elemen, seharusnya ada 6 angka (karena 1 angka hilang).

2. Setelah itu, kita hitung jumlah semua angka yang ada di dalam array.

3. Untuk menemukan angka yang hilang, kita cukup mengurangkan jumlah dari array dengan jumlah total yang sudah dihitung.
   Perbedaan antara keduanya adalah angka yang hilang.
   
Contoh:
Array [1, 2, 4, 5, 6].
- Jumlah total dari 1 hingga 6 adalah 21.
- Jumlah angka dalam array adalah 18.
Jadi, angka yang hilang adalah 21 - 18 = 3.

*/
