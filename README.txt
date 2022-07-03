//RUBRICA
// Criou torres e discos no DOM
// Adicionou handlers de click nas torres ou discos
// O jogo está funcional e possui condições de vitória

//CONTEUDO E REGRAS
//3 divs varetas, 4 divs disco. Abaixo de cada vareta,
//seu nome: "Start", "Offset", "End", nesta ordem.
//Apenas um disco pode ser movido por vez.
// Cada movimento consiste em pegar o disco de cima de uma das pilhas e movê-lo para o topo de outra pilha.
// Nenhum disco pode ser colocado no topo de um disco menor.

//DICAS
//cada torre ser uma caixa flex que empilha elementos de baixo para cima usando as seguintes propriedades CSS:              
// {
//     display: flex; 
//     flex-direction: column-reverse; 
//     align-items: center;
// }
//Você precisa fazer o jogador clicar duas vezes para cada movimento: primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino. Use uma variável para registrar qual modo o jogador está.
// Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.
// Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.
// Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.
// Use o método DOM appendChild() para adicionar um disco a uma torre . Observe que quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.
// Use a propriedade Element.clientWidth para pegar o tamanho dos discos.