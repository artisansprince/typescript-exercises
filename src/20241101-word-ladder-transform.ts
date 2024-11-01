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

