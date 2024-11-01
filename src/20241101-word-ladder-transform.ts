/*
Tantangan hari ini: Word Ladder Transform
Buat program yang bisa menentukan jumlah langkah minimal untuk mengubah satu kata menjadi kata lain, di mana setiap perubahan hanya boleh mengganti satu huruf dan setiap kata hasil perubahan harus ada dalam sebuah daftar kata yang valid (misalnya seperti di kamus).

Detail Tantangan:
Buat fungsi wordLadder(start: string, end: string, wordList: string[]): number.
Dari kata start, hitung jumlah perubahan minimum untuk mengubahnya menjadi end.
Setiap perubahan hanya bisa mengubah satu huruf, dan kata hasil perubahan harus ada dalam wordList.
Jika tidak mungkin mengubah start menjadi end, kembalikan 0.

Contoh Input dan Output:
Input: wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"])

Output: 5
(hit → hot → dot → dog → cog)

Input: wordLadder("hit", "cog", ["hot","dot","dog","lot","log"])

Output: 0 (tidak mungkin mencapai kata cog)

Tips:
Gunakan BFS (Breadth-First Search) untuk mencari rute terpendek dalam penggantian kata.
Pikirkan cara memeriksa setiap kemungkinan pergantian huruf dengan efisien.
*/

// program penyelesaian
function wordLadder(start: string, end: string, wordList: string[]): number {
    const wordSet = new Set(wordList); // Menyimpan daftar kata dalam set untuk pencarian cepat
    if (!wordSet.has(end)) return 0; // Jika kata akhir tidak ada di daftar, langsung return 0

    let queue: [string, number][] = [[start, 1]]; // Antrian BFS, dengan pasangan kata dan jumlah langkah

    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift()!;

        if (currentWord === end) return steps; // Jika mencapai kata akhir, return jumlah langkah

        // Ganti setiap huruf dalam kata saat ini
        for (let i = 0; i < currentWord.length; i++) {
            for (let char of "abcdefghijklmnopqrstuvwxyz") {
                const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);
                
                // Jika kata hasil perubahan ada dalam wordSet
                if (wordSet.has(nextWord)) {
                    queue.push([nextWord, steps + 1]); // Tambah ke antrian BFS
                    wordSet.delete(nextWord); // Hapus dari wordSet agar tidak diulang
                }
            }
        }
    }

    return 0; // Jika tidak ada jalur yang memenuhi syarat
}

// Contoh pengujian
console.log(wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // Output: 5
console.log(wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0
