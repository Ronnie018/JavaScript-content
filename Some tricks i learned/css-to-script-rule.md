# Regra de conversão de CSS para JavaScript


## O padrão para essa conversão é o seguinte:

leve em conta o elemento a background-color do CSS

a conversão no javascript seria element.style.backgroundColor;

esse padrao é o mesmo para todos os elementos, todo traço é subtraido de forma que não hajam espaços entre as palavras, a primeira palavra é sempre minuscula, e as posteriores possuem as primeiras letras maiusculas, o padrão não é aplicado apenas nesse contexto, querySelector, getElementById e outros elementos de mesma origem seguem o mesmo padrão.
