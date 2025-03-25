<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

	<script>
	// solicitando números ao usuário
        var numero1 = prompt("Insira o primero número: ");
	var numero2 = prompt("Insira o segundo número: ");
        var operacao = prompt("Insira um operador matemático: ");

	// determinando, através do operador inserido pelo usuário, qual operação será realizada
        switch(operacao){
            case '+':
                alert('adição');
                break;
            case '-':
                alert('subtraçãoo');
                break;
            case '*':
                alert('multiplicação');
                break;
            case '/':
                alert('divisão');
                break;
            default:
                alert('Operacao não definida.');
                break;
        }
	// realizando a operação com os números inseridos pelo usuário
        var resultadoOperacao = realizarOperacao(numero1, numero2, operacao); 

        function realizarOperacao(numero1, numero2, operacao){
            var resultado = 0;
            resultado = eval(numero1 + operacao + numero2);
            return resultado;
        }
	// exibindo o resultado da operação realizada usando como base da estrutura condicional o operador solicitado pelo usuário
        switch(operacao){
            case '+':
                alert('O resultado da soma é: ' + resultadoOperacao);
                break;
            case '-':
                alert('O resultado da subtração é: ' + resultadoOperacao);
                break;
            case '*':
                alert('O resultado da multiplicação é: ' + resultadoOperacao);
                break;
            case '/':
                alert('O resultado da divisão é: ' + resultadoOperacao);
                break;
            default:
                alert('Nenhum resultado definido.');
                break;
        }
		</script>
	</body>
	</html>
	
