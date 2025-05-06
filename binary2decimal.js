<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<script> 
var binary = prompt("Insira um número binário até de 8 dígitos aqui: ");

function binary2Decimal(binary){
  
  if (typeof binary !== 'string'){
    return NaN;
  }
    if (!/^[01]+$/.test(binary)) {
    return NaN; 
        } 
   const decimals = parseInt(binary, 2);
  return decimals;
}
  const decimalResult = binary2Decimal(binary); 
  if (!isNaN(decimalResult)) {
    alert("O número binario " + binary + "em decimal é" + decimalResult); 
    console.log("O número binario: " + binary + " em decimal é: " + decimalResult)
  } else {
     alert("A conversão falhou devido a uma entrada inválida.");
                }
  
  </script>
  </body>
