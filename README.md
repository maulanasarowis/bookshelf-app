## Bookshelf-apps
Project submission untuk syarat wajib kelulusan kelas Membuat Front-End Web untuk Pemula dari Dicoding Indonesia.

## Kriteria
1. Mampu menambahkan data buku
   - Data buku merupakan **object** javascript dengan struktur berikit:

        ```jsx
        {
          id: string | number,
          title: string,
          author: string,
          year: number,
          isComplete: boolean,
        }
        ```

        ```jsx
        {
          id: 3657848524,
          title: "Belajar Front-end untuk Pemula",
          author: "Maulana Sarowis",
          year: 2019,
          isComplete: false,
        }
        ```

2. Memiliki dua rak buku
    - 2 rak buku yaitu **"Belum selesai dibaca"** dan **"Selesai dibaca"**
    - Rak buku belum selesai dibaca hanya menyimpan buku yang properti **isComplete** nya bernilai *true*
    - Rak buku Selesai dibaca hanya menyimpan buku yang properti **isComplete** nya bernilai true.

3. Dapat memindahkan buku antar rak
    - Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dipindahkan di antara keduanya.**

4. Dapat menghapus data buku
    - Buku yang ditampilkan pada rak baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dihapus.**

5. Manfaatkan localStorage dalam menyimpan data buku
    - Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat bertahan walaupun halaman web ditutup.**
    - Dengan begitu, Anda **harus menyimpan data buku pada localStorage.**

## Tampilan
![Bookshelf App](https://user-images.githubusercontent.com/52828971/123731755-ffb15980-d8c2-11eb-897c-69166dbfae63.png)

## Demo
https://maulanasarowis.github.io/bookshelf-apps/
