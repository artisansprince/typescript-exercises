/* 20241031-longest-consecutive-sequence.ts

Tantangan hari ini: Longest Consecutive Sequence

Buat fungsi yang bisa mencari panjang dari urutan angka berturut-turut terpanjang dalam sebuah array angka. Misalnya, dari array [100, 4, 200, 1, 3, 2], urutan terpanjang adalah 1, 2, 3, 4 yang panjangnya 4.

Detail Tantangan:
1. Buat fungsi longestConsecutive(nums: number[]): number.
2. Temukan urutan angka berturut-turut terpanjang di dalam array tanpa perlu mengurutkan array.
3. Kembalikan panjang dari urutan terpanjang yang ditemukan.

Contoh Input dan Output:
- Input: [100, 4, 200, 1, 3, 2]
- Output: 4 (karena urutan 1, 2, 3, 4 adalah urutan berturut-turut terpanjang)
- Input: [0, -1, 9, 1, 8, 7, 2, 3, -2]
- Output: 6 (karena urutan -2, -1, 0, 1, 2, 3 adalah urutan terpanjang)
- Input: [10, 5, 6, 3, 11, 7, 4, 8, 9]
- Output: 7 (karena urutan 3, 4, 5, 6, 7, 8, 9 adalah urutan terpanjang)

Tips:
Fokus pada angka terkecil dalam setiap urutan berturut-turut, lalu hitung panjangnya sampai angka berikutnya tidak berturut.
Gunakan struktur data seperti Set untuk efisiensi saat mengecek apakah angka tertentu ada dalam array.


*/


// program penyelesaian

function longestConsecutive(nums: number[]): number {
    // buat Set dari array untuk menghilangkan duplikat dan mempermudah pencarian
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        // mulai urutan baru jika angka sebelumnya (num - 1) tidak ada dalam set
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // hitung panjang urutan berturut-turut
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // update longestStreak jika urutan saat ini lebih panjang
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// pengujian
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // output: 4
console.log(longestConsecutive([0, -1, 9, 1, 8, 7, 2, 3, -2])); // output: 6
console.log(longestConsecutive([10, 5, 6, 3, 11, 7, 4, 8, 9])); // output: 7


// pembahasan

/*
- Set digunakan agar lebih efisien dalam pencarian elemen dan menghapus duplikat angka.
- Untuk setiap elemen num dalam numSet, kita cek apakah num - 1 ada. Jika tidak ada, artinya num adalah awal dari urutan berturut-turut.
- Kita hitung panjang urutan berturut-turut dari angka num tersebut dan memperbarui longestStreak jika panjangnya lebih besar dari urutan sebelumnya.

*/