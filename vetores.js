<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Praticando Javascript - Exercicio 3</title>
  </head>
<body>
</body>
  
  <script = type="text/javascript">
    
    var numeros = []; 
    
    numeros[0] = solicitaPrimeiroNumero();
    numeros[1] = solicitaSegundoNumero();
    
    var resultadoDivisao = divida(numeros);
     
    alert('O resultado da divisão é igual a: ', + resultadoDivisao); 
    
    function solicitarPrimeiroNumero(){
        var numero1 = prompt("Insira o primeiro número: ");
        if(numero1 < 0){
          alert("O número precisa ser inteiro e positivo."); 
          
          return solicitarPrimeiroNumero(); 
        } else{return numero1}
    }
    
    function solicitarSegundoNumero(){
          var numero2 = prompt("Insira o primeiro número: ");
          if(numero2 < 0){
            alert("O número precisa ser inteiro e positivo."); 
          
          return solicitarSegundoNumero(); 
        } else{return numero2}
    }
    
    function divida(numeros){
       var resultado = 0
       
       resultado = numeros[0] / numeros[1];
      
       return resultado;
    }
    
  </script>
</html>

  
