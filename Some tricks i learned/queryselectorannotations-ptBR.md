# QuerySelector


## QuerySelector

O QuerySelector é capaz de selecionar UM elemento pelo seletor CSS, ao inves do id ou classe de um elemento, isso torna possivel por exemplo a seleção de elementos que possuem um seletor mais com mais de uma classe ou então classes e ids juntos.

## QuerySelectorAll

É nessessario usar QuerySelectorAll para que possam ser selecionadas TODOS os elementos com mesmo seletor, retornando-os em formato de array;
Para que dentro desse array, seja selecionado um elemento especifico basta usar for ou indicar a posição com colchetes apos a variavel;

### Seleção de elementos dentro de um elemento pai

Para selecionar todos os elementos dentro de alguma instância, usa se a seguinte sintaxe:

<script>
const element = documment.querySelectorAll("div > * ")
<script>

- note que ao inves de indicar um seletor, foi indicado o asterisco, que significa que todos os elementos abaixo do elemento pai seram selecionados.

## Aviso

QuerySelector pode ser util em projetos de pequeno porte, mas é nessessario evitar seu uso em projetos maiores naão só por conta da sua portabilidade em diferentes navegadores, mas principalmmente por seu desempenho quando em alta demanda de trafego.

