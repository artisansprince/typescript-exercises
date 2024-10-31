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