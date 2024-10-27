/*20241027-async-sort-and-filter-data.ts

Tantangan Async Hari Ini: "Async Sort and Filter Data"
Buatlah fungsi yang menggunakan async/await untuk mengambil data berupa array objek, lalu:

1. Filter objek-objek dengan kriteria tertentu. Misalnya, objek dengan nilai score di atas 50.
2. Sort hasil filter tadi berdasarkan score secara menurun (descending).
3. Return data yang sudah di-filter dan diurutkan tersebut.


Langkah-langkah
1. Ambil data secara asynchronous (bisa kamu buat data dummy di dalam fungsi async atau dari API jika mau).
2. Gunakan await untuk memastikan proses filter dan sort berjalan berurutan.
3. Return hasil akhir dari fungsi sebagai array yang sudah terfilter dan diurutkan.


*/

import { error } from "console";

type UserData = {
    name: string;
    score: number;
}


// ini fungsi untuk mendapatkan data secara async
async function fetchData(): Promise<UserData[]> {
    return [
        { name: "Alice", score: 70 },
        { name: "Bob", score: 45 },
        { name: "Charlie", score: 85 },
        { name: "Dave", score: 60 },
        { name: "Eve", score: 40 }
    ];
}

// fungsi untuk filter dan sort data
async function filterAndSortDatA(): Promise<UserData[]> {
    const data = await fetchData();

    // filter data dengan score diatas 50
    const filteredData = data.filter(user => user.score > 50);

    // sort data berdasarkan score secara menurun (descending)
    const sortedData = filteredData.sort((a, b) => b.score - a.score);

    return sortedData;
}


// menjalankan fungsi dan menampilkan hasil
filterAndSortDatA()
    .then(result => console.log ("filtered and sorted data: ", result))
    .catch(error => console.error("error: ", error));