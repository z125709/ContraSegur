/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

diccionari = [];
patrons = [];
  function Comprovar()
            {
            
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
    
  function Iniciar() {     
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
                        "\n\ resumen: " + resumen (pwd) +
                        "\n\ Cost Computacional : " + CostComputacional.toExponential() + 
                        "\n\ Nivel de robustesa: " + nivel + "/4, "  + 
                        "\n\ Anys de processament: " + AnysProcessament.toExponential() + 
                        "\n\ Dies de processament: " + DiesProcessament.toExponential()  + 
                        "\n\ zxcvbn Score de : " + result.score + "/4.");
              
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
              + " starts with: " + contents.substr(0, contents.indexOf("\n")));  
      
	    
      if (contents.substr(0,1) == "/") {
            stream1= contents.replaceAll("\r\n",",");
            stream2= stream1.replaceAll("/","");
            stream3= stream2.split(",");
            for (i=0; i< stream3.length; i++){ 
                patrons[i]= new RegExp(stream3[i]);
         }
        }else{
            stream1 =contents.replaceAll("\r\n",",");
             diccionari= stream1.split(",");// revisar que es
        }
        }
      r.readAsText(f);
    } else { 
      return "Failed to load file";
    }
  }
        
  function CheckPasswordDiccionary(pwd){
   
    
      if (diccionari.includes(pwd.toLowerCase()) == true) { 
      return true;
      
     }else{
         return false;
     }
   
  }  
 
  function Repeticions(pwd){
    const repeticionsMultiples = /(.)\1{2,}/;
    if (repeticionsMultiples.test(pwd.toLowerCase())) {
        
    return true;
    }else{
        return false;}
  }
      
 function CheckPasswordPatron(pwd){
   for(i= 0; i<patrons.length; i++){
        
        if (patrons[i].test(pwd.toLowerCase())=== true) { 
          return true;
     }
    } 
    return false;
   }
   

 

function resumen (pwd){
    if (CheckPasswordDiccionary(pwd)){
        return "La contrasenya introduïda és comuna";
    }
    if(CheckPasswordPatron(pwd)){
        return "La contrasenya introduïda conté patrons";
    }
    if(Repeticions(pwd)){
        return "repeticions";
    }  
      if( !document.getElementById("num").checked||
        !document.getElementById("min").checked||
        !document.getElementById("may").checked){
        return "La contrasenya introduïda careix de nombres, minúscules o mayúscules"; 
    }   

    if( !document.getElementById("esp").checked){
        return "La contrasenya introduïda careix de caràcters especials";
    }
    if( !document.getElementById("minimcar").checked){
        return "La contrasenya introduïda ha de contenir al menys 8 caracteres";
    }   
    else{ return "La contrasenya introduïda és segura";}
    }
 /*
*/










// var diccionari = new Array(["password", "123456", "123456789", "guest", "qwerty", "12345678", "111111", "12345"]);
var diccionari = ["password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969",
    "shadow", "master", "mustang", "michael", "pussy", "superman", "fuckyou", "121212", "killer", "trustno1", "jordan",
    "jennifer", "hunter", "buster", "soccer", "harley", "batman", "tigger", "sunshine", "iloveyou", "fuckme", "charlie",
    "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", "112233", "george", "asshole", "computer", "michelle",
    "jessica", "pepper", "131313", "freedom", "pass", "fuck", "maggie", "159753", "ginger", "princess", "joshua", "cheese",
    "amanda", "summer", "love", "ashley", "6969", "nicole", "chelsea", "biteme", "matthew", "access", "yankees", "dallas",
    "austin", "thunder", "taylor", "matrix", "minecraft", "william", "corvette", "hello", "martin", "heather", "secret",
    "fucker", "merlin", "diamond", "hammer", "silver", "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick",
    "internet", "scooter", "orange", "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever",
    "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome",
    "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal",
    "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "gateway", "marina",
    "diablo", "bulldog", "compaq", "purple", "hardcore", "banana", "junior", "hannah", "porsche", "lakers", "iceman",
    "money", "cowboys", "london", "tennis", "ncc1701", "coffee", "scooby", "miller", "boston", "q1w2e3r4", "fuckoff",
    "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", "oliver", "redsox", "player", "nikita"];

  // var patrons = ["/123/", "/abc/", "/qwerty/"];
var patrons = [/098/, /0pm/, /0pñ/, /123/, /1aq/, /1qa/, /234/, /2ws/, /2zs/, /321/, /345/, /3ed/, /432/, /456/,
    /4rf/, /543/, /567/, /5tg/, /654/, /678/, /6yh/, /765/, /789/, /7uj/, /876/, /890/, /8ik/, /987/, /9ol/,
    /abc/, /aq1/, /aqw/, /asd/, /aze/, /bcç/, /bcd/, /bgt/, /bnm/, /bvc/, /cba/, /çcb/, /cçd/, /cde/, /çde/,
    /cvb/, /cxw/, /cxz/, /dcb/, /dçc/, /de3/, /def/, /dfg/, /dsa/, /dsq/, /edc/, /edç/, /efg/, /ert/, /ewq/,
    /eza/, /fds/, /fed/, /fgh/, /fr4/, /gfd/, /gfe/, /ghi/, /ghj/, /gt5/, /hgf/, /hij/, /hjk/, /hy6/, /ihg/,
    /ijk/, /iop/, /iuy/, /jhg/, /jih/, /jkl/, /ju7/, /ki8/, /kjh/, /kji/, /klm/, /klñ/, /lkj/, /lmn/, /lo9/,
    /mju/, /mlk/, /mnb/, /mnñ/, /mno/, /mp0/, /nbv/, /nhy/, /nml/, /nño/, /nop/, /ñlk/, /ñnm/, /ñop/, /ñp0/,
    /oiu/, /onm/, /oñn/, /opq/, /poi/, /pon/, /poñ/, /pqr/, /qa1/, /qaz/, /qpo/, /qrs/, /qsd/, /qwe/, /rew/,
    /rez/, /rfv/, /rqp/, /rst/, /rty/, /sdf/, /srq/, /stu/, /sw2/, /sz2/, /tgb/, /tre/, /tsr/, /tuv/, /tyu/,
    /uio/, /ujm/, /uts/, /uvw/, /uyt/, /vbn/, /vcx/, /vfr/, /vut/, /vwx/, /wer/, /wqa/, /wsx/, /wvu/, /wxc/,
    /wxy/, /xcv/, /xsw/, /xsz/, /xwv/, /xyz/, /yhn/, /ytr/, /yui/, /yxw/, /zaq/, /zer/, /zsx/, /zxc/, /zyx/]; 