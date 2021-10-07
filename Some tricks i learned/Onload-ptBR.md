Alguns truques de JavaScript

# Utilizar tag <script> no <head> do <html>:

* é possivel utiliza-lo dessa forma simplismente adicionando o atributo onload no body chamando uma função dentro do seu script;

## codigo

* apos a criação do documento HTML padrão abaixo adicione a tag script no head e o atributo onload="_sua-função()":

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script.js"></script>
</head>
<body onload="_init()">

</body>
</html>

no seu arquivo .js crie a função:

function _init(){
     document.write("Hello World")
}

## como funciona;


* Note, sem o onload o seu script não fincionaria, pois o antes mesmo de carregar o <body> ele ja teria sido executado.
A tag onload faz com que essa função só seja executada após o carregamento da página, evitando que alguma configuração seja aplicada para um elemento que ainda não foi carregado. 
