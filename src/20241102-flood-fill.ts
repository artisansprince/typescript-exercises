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

