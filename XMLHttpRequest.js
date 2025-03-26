<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Requisição XMLHttpRequest</title>
</head>
<body>
    <h1>Imagens Aleatórios de Cachorros</h1>
    <p> A partir do click no botão abaixo uma nova imagem aleatória de cachorros será carregada utilizando requisições assíncronas com XMLHttpRequest</p>

    <img id="img_dog" src="" alt="Aguardando a imagem ser carregada" />
    <br/>
    <button onclick="carregarImagens()">Carregar Imagens</button>
</body>
    <script type="text/javascript">

        function carregarImagens(){

            var xmlHttpRequest = new XMLHttpRequest();
            var url = "https://dog.ceo/api/breeds/image/random"

            xmlHttpRequest.open("GET", url, true);

            xmlHttpRequest.onreadystatechange = function() {
                if (xmlHttpRequest.readyState == 3) {
                    console.log('Carregando o conteúdo');
                }
                if (xmlHttpRequest.readyState == 4) {
                    
                    var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
                    
                    console.log('Requisição Finalizada');
                    console.log('Resultado da Requisição: ' + jsonResponse);
                    console.log('Resultado da Requisição: ' + jsonResponse.message);
                    
                    var imgDog = document.getElementById("img_dog");
                    imgDog.src = jsonResponse.message;
                }
            };
            
            xmlHttpRequest.send(null);
        
        }
    </script>
</html>
