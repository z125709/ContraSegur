/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

diccionari_correcte = [];

            function Comprovar()
            {
               window.alert("Password: " + document.getElementById("pwd").value);
               
              document.getElementById("minimcar").checked = false;
              document.getElementById("min").checked = false;
              document.getElementById("num").checked = false;
              document.getElementById("esp").checked = false;
              document.getElementById("may").checked = false;
           
            var pwd = document.getElementById("pwd").value;
            
          
              //Comprovam la mida minima
              if (pwd.length >= 8) {
                  document.getElementById("minimcar").checked = true;
              }
              //comprovar mayuscula y minusculas
              for (i=0; i<pwd.length; i++){
                  letra = pwd.charAt(i);
                if(!isNaN(letra)){ 
                    document.getElementById("num").checked = true;
                    }
                    else if(letra.toLowerCase() === letra.toUpperCase()){ 
                    document.getElementById("esp").checked = true;
                    } 
                    else if(letra === letra.toUpperCase()){ 
                    document.getElementById("may").checked = true;
                    }
                    else 
                    document.getElementById("min").checked = true; 
            }
 
            
    
    
    
    }
    
    function Iniciar()
            {     
            var pwd = document.getElementById("pwd").value;
            base= 0;               
            if (document.getElementById("num").checked === true) {base= base + 10 ;}
            if (document.getElementById("may").checked === true) {base= base + 40 ;}
            if (document.getElementById("esp").checked === true) {base= base + 41 ;}
            if (document.getElementById("min").checked === true) {base= base + 40 ;}
            
            exponente = pwd.length;
            CostComputacional= Math.pow(base, exponente)/1e6;
            AnysProcessament = CostComputacional / (365*24*3600);
            DiesProcessament = CostComputacional/ (24*3600);
            nivel_robustesa = base * exponente/16;
            document.getElementById("nivel_robustesa").value = nivel_robustesa.toString();
            result = zxcvbn(pwd);   
 
            if (CostComputacional < 1e3)  nivel=0 ;
            else if (CostComputacional< 1e6 )  nivel= 1 ;
            else if (CostComputacional < 1e8)   nivel= 2 ;
            else if (CostComputacional < 1e10)  nivel= 3 ;
            else nivel= 4  ; 
            
            window.alert("Password: " + pwd  + 
                        "\n\ Cost Computacional : " + CostComputacional.toExponential() + 
                        "\n\ Nivel de robustesa: " + nivel + "/4, "  + 
                        "\n\ Anys de processament: " + AnysProcessament.toExponential() + 
                        "\n\ Dies de processament: " + DiesProcessament.toExponential()  + 
                        "\n\ zxcvbn Score de : " + result.score + "/4." );
            CheckPasswordDiccionary(pwd);    
        }
                   function keyboard(){
                document.getElementById("Teclat").hidden = !document.getElementById("Teclat").hidden;  
            }
            function ASCII(){
                document.getElementById("taulaASCII").hidden = !document.getElementById("taulaASCII").hidden;  
            }
            
            
            
        
  function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
        window.alert( "Got the file.n" 
              +" name: " + f.name + "n"
              +" type: " + f.type + "n"
              +" size: " + f.size + " bytes n"
              + " starts with: " + contents.substr(0, contents.indexOf("\n"))
        );  
            diccionari_correcte= contents.replaceAll("\n",", ");
            window.alert(diccionari_correcte);
      }
      r.readAsText(f);
    } else { 
      window.alert("Failed to load file");
    }
  }
        
  function CheckPasswordDiccionary(pwd){
   
    
      if (diccionari_correcte.includes(pwd) == true) { 
      window.alert("La contrasenya introuïda, "
              + pwd + " es troba dins la llista de contrasenyes no segures.");
      
     }else{
         window.alert("Contrasenya no perteneixent a la llista");
     }
      
      
      
      
  }       
    