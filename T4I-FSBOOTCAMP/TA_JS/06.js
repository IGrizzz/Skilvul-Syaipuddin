/// Soal - 01
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

// /// WRITE YOUR ANALYSIS HERE
// - hal yang akan tampil pada console.log adalah "Mariah"
// - penyebab hasil dari console ini bukan dari variabel name karena pada console hanya memanggil printFirstName("Mariah Carey") seharusnya adalah  printFirstName(name)
      // maka hasilnya adalah Mariah bukanya Jhone
 

      const name = "John Watson";

      function printFirstName(name) {
        return name.split(" ")[0];
      }
      
      console.log(printFirstName("Mariah Carey"));
      
      
      /// Soal - 02
      /// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
      /// - apa yang akan terjadi apabila kita mencoba menjalankan baris kode dibawah?
      /// - apa alasan kenapa hal tersebut bisa terjadi?
      ///   - dari segi salaryWithVar
      ///   - dari segi salaryWithConst
      
      /// WRITE YOUR ANALYSIS HERE
      /// -  hal akan terjadi apabila kita mencoba menjalankan baris kode dibawah ini adalah codingan error seperti dibawah ini 
                // e:\Skilvul\Tugas\JS_Dasar\06-scope.js:34
                // console.log(salaryWithConst)
                //             ^
      
                // ReferenceError: Cannot access 'salaryWithConst' before initialization
                //     at Object.<anonymous> (e:\Skilvul\Tugas\JS_Dasar\06-scope.js:34:13)
                //     at Module._compile (internal/modules/cjs/loader.js:1072:14)
                //     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
                //     at Module.load (internal/modules/cjs/loader.js:937:32)
                //     at Function.Module._load (internal/modules/cjs/loader.js:778:12)
                //     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
                //     at internal/main/run_main_module.js:17:47
      
      /// - apa alasan kenapa hal tersebut bisa terjadi?
      ///     hal ini tejadi karena pada pengurutan sintax nya terbalik seharnya console.log nya berada dibawah bukan di atas
      ///   - dari segi salaryWithVar seharusnya adalah  var terlebih dahulu dari pada console
                // var salaryWithVar = 15000000;
                // console.log(salaryWithVar)
            // dengang demikian hasil dari console.log(salaryWithVar) dapat dibaca yaitu 15000000
      ///   - dan dari segi salaryWithConst juga seharusnya adalah const terlebih dahulu dari pada consolenya
                // const salaryWithConst = 15000000;
                // console.log(salaryWithConst)
            // dengang demikian hasil dari console.log(salaryWithConst) dapat dibaca yaitu 15000000
      
      var salaryWithVar = 15000000;
      const salaryWithConst = 15000000;
      
      console.log(salaryWithVar)
      console.log(salaryWithConst)