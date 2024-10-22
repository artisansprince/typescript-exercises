/* 2024-10-23-sum-of-multiples.ts

Tantangan Hari Ini: "Sum of Multiples"
Deskripsi: Buat sebuah fungsi yang menerima tiga parameter: n (bilangan bulat positif), a, dan b (keduanya bilangan bulat positif). Fungsi ini harus mengembalikan jumlah dari semua bilangan bulat yang merupakan kelipatan dari a atau b yang lebih kecil atau sama dengan n.

Contoh:

sumOfMultiples(10, 3, 5) harus mengembalikan 33 (3 + 5 + 6 + 9 + 10).
sumOfMultiples(20, 4, 6) harus mengembalikan 90 (4 + 6 + 8 + 12 + 16 + 18 + 20).

*/



function sumOfMultiples(n:number, a:number, b:number): number {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}


// penggunaan
console.log(sumOfMultiples(10, 3, 5)); // output 33
console.log(sumOfMultiples(20, 4, 6)); // Output 84


/*
Penjelasan:
Fungsi ini menerima tiga parameter: n, a, dan b.
Kita membuat loop dari 1 hingga n dan menggunakan kondisi i % a === 0 || i % b === 0 untuk memeriksa apakah i adalah kelipatan dari a atau b.
Jika syarat tersebut terpenuhi, kita tambahkan nilai i ke dalam variabel sum.
Setelah loop selesai, kita kembalikan total sum.
*/