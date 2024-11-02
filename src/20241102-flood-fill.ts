/* 20241102-flood-fill.ts

Tantangan hari ini: Flood Fill
Buat program untuk meniru cara Flood Fill seperti alat fill bucket di aplikasi menggambar, yang mengisi area tertentu dengan warna baru. Tantangan ini bagus untuk memahami algoritma rekursif atau menggunakan teknik seperti Depth-First Search (DFS) atau Breadth-First Search (BFS) pada matriks.

Detail Tantangan:
Buat fungsi floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][].
image adalah matriks 2D, di mana setiap elemen adalah angka yang merepresentasikan warna.
sr dan sc adalah koordinat titik awal fill (baris, kolom).
newColor adalah warna baru untuk mengisi area.
Program harus mengubah warna area yang terhubung ke titik awal (dengan warna yang sama) menjadi newColor.
Pastikan hanya mengubah piksel dengan warna yang sama dan terhubung secara horizontal atau vertikal (tidak secara diagonal).
Contoh Input dan Output:
Input:

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ],
  1, 1, 2
)
Output:

[
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1]
]
(Mulai dari posisi (1,1), area terhubung dengan warna yang sama diubah ke newColor yaitu 2).

Tips:
Gunakan teknik rekursi atau DFS untuk memeriksa dan mengubah warna di sekitar area yang sama.
Pastikan untuk memeriksa batas matriks agar tidak keluar dari area yang di-fill.


*/

// program penyelesaian
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const originalColor = image[sr][sc];
    if (originalColor === newColor) return image; // Jika warna asli sama dengan warna baru, langsung return

    // Fungsi rekursif untuk DFS flood fill
    function fill(r: number, c: number) {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return; // Jika di luar batas, return
        if (image[r][c] !== originalColor) return; // Jika warna tidak sama dengan warna asli, return
        
        image[r][c] = newColor; // Ubah warna

        // Lakukan flood fill ke empat arah
        fill(r + 1, c); // bawah
        fill(r - 1, c); // atas
        fill(r, c + 1); // kanan
        fill(r, c - 1); // kiri
    }

    fill(sr, sc); // Panggil fungsi fill dari posisi awal
    return image;
}

// Contoh pengujian
console.log(floodFill(
    [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1]
    ], 
    1, 1, 2
));
// Output yang diharapkan:
// [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1]
// ]



