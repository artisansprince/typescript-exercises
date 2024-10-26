/* 20241026-async-fetch-data-sum.ts

Tantangan: Fetch Data Secara Asinkron
Diberikan fungsi asinkron bernama fetchData yang menggunakan setTimeout untuk menyimulasikan proses fetch data (misalnya dari server) dan mengembalikan data berupa array angka [1, 2, 3, 4, 5]. Tugasmu adalah memanggil fetchData dan menggunakan hasilnya untuk menghitung jumlah total dari angka-angka di dalam array tersebut.

Input: Tidak ada input langsung, tapi kamu akan mendapatkan data dari fetchData.

Output: Jumlah total angka dalam array yang diperoleh dari fetchData.

Langkah Penyelesaian:
Buat fungsi fetchData yang asinkron dan mengembalikan array angka [1, 2, 3, 4, 5] setelah setTimeout.
Buat fungsi calculateSum yang akan memanggil fetchData dan menjumlahkan nilai-nilai di dalam array.
Cetak hasil total ke konsol.


*/

//program penyelesaian

//fungsi asinkron yang mensimulasikan fetch data
async function fetchData(): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5]);
        }, 1000); //simulasi delay 1 detik
    });
}

//fungsi untuk menghitung total
async function calculateSum() {
    const data = await fetchData();
    const total = data.reduce((sum, value) => sum + value, 0);
    console.log(`total: ${total}`);
}

// panggil calculateSum untuk melihat hasilnya
calculateSum(); // output 15





// pembahasan
/*
fetchData mensimulasikan pengambilan data dengan setTimeout.
calculateSum menunggu hasil dari fetchData, lalu menjumlahkan angka-angka di dalam array dan mencetak totalnya.
*/