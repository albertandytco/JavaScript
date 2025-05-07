<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Requisição XMLHttpRequest</title>
</head>
<body>
    <h1>Consulta de Endereço através do CEP</h1>
    <input id="cep" name="cep" type="text" placeholder="Digite apenas números" />
    <button onclick="consultarCEP()">Consultar</button>
    <h2>Resultado</h2>
    <p id="resultado"></p>
</body>
<script type="text/javascript">
    function consultarCEP() {
        var cep = document.getElementById("cep").value;
        
        if (!cep) {
            alert("Digite um CEP válido!");
            return;
        }

        var xmlHttpRequest = new XMLHttpRequest();
        var url = "https://viacep.com.br/ws/" + cep + "/json/"; // API ViaCEP (suporta CORS)
        
        xmlHttpRequest.open("GET", url, true);
        
        xmlHttpRequest.onreadystatechange = function() {
            if (xmlHttpRequest.readyState == 4) {
                if (xmlHttpRequest.status == 200) {
                    try {
                        var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
                        
                        if (jsonResponse.erro) {
                            document.getElementById("resultado").innerHTML = "CEP não encontrado!";
                        } else {
                            document.getElementById("resultado").innerHTML = 
                                'CEP: ' + jsonResponse.cep + '<br/>' +
                                'UF: ' + jsonResponse.uf + '<br/>' +
                                'Cidade: ' + jsonResponse.localidade + '<br/>' +
                                'Bairro: ' + jsonResponse.bairro + '<br/>' +
                                'Logradouro: ' + jsonResponse.logradouro;
                        }
                    } catch (e) {
                        console.error("Erro ao processar resposta:", e);
                    }
                } else {
                    console.error("Erro na requisição:", xmlHttpRequest.status);
                }
            }
        };
        
        xmlHttpRequest.send();
    }
</script>
</html>
