/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error
        // adalah Error yang terjadi akibat kesalahan pengetikan ataupun ketika nilai yang kita masukkan tidak seperti yang di harapkan
/// - Reference Error
        // adalah error yang tejadi akibat kesalahan dalam referensi contohnya ada variabelatau oprator yang belum direferensikan ,seharusnya variabel tersebut perlu di deklarasikan terlebih dahulu
/// - Range Error
        // adalah error yang tejadi akibat string atau angka yang di tujukan  ke data tidak valid
/// - Syntax Error
        // adalah error yang tejadi akibat keslahan dalam memasukan sintaksis yang salah ketika ingin mengevaluasi sebuah code.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - hal akan terjadi apabila kita mencoba menjalankan baris kode dibawah ini adalah codingan error 
/// - error ini termasuk dalam kategori reference
/// - hal tersebut bisa terjadi karena peletakan baris code yang salah seharusnya variabel atau const 
    //terlebih dulu dan baru nantinya di console atau bida di diskripsikan ,
    //sedangkan pada baris code  ini langsung di console sedangkan deklarasinya di akhir ,dengan
    //demikian terjadilah error. baris kode yang benar yaitu :
        // var salaryWithVar = 15000000;
        // const salaryWithConst = 15000000;

        // console.log(salaryWithVar)
        // console.log(salaryWithConst)

        console.log(salaryWithVar)
        console.log(salaryWithConst)
        
        var salaryWithVar = 15000000;
        const salaryWithConst = 15000000;