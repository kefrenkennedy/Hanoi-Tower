//RECEITA DA TORRE DE HANOI
//INGREDIENTES: regras, 1 box, 4 discos e  3 torres
//INSTRUÇÃO:
//1.crie os discos e as torres.
//2.referencie esses discos e torres como objetos. "get' em".
//3.defina as regras do jogo através dos eventos e de handlers de click.
//4.se todos os discos chegarem na torre 3, definir um alert "Você conseguiu! Parabens!"

//document é pra quando se cria ou chama elementos
//selecionar serva para  poder utilizar o metodo addEventListener

//1. queryselector no pai
let section = document.querySelector("#section");

//2. criar elementos html e definir variáveis para eles
let torre1 = document.createElement("div");
let torre2 = document.createElement("div");
let torre3 = document.createElement("div");
let disco1 = document.createElement("div");
let disco2 = document.createElement("div");
let disco3 = document.createElement("div");
let disco4 = document.createElement("div");

//3. gerar classe para os elementos
torre1.classList.add("torres");
torre2.classList.add("torres");
torre3.classList.add("torres");
disco1.classList.add("discos");
disco2.classList.add("discos");
disco3.classList.add("discos");
disco4.classList.add("discos");

torre1.classList.add("torre1");
torre2.classList.add("torre2");
torre3.classList.add("torre3");
disco1.classList.add("disco1");
disco2.classList.add("disco2");
disco3.classList.add("disco3");
disco4.classList.add("disco4");

//4. discos na torre1 e torres no section
section.appendChild(torre1);
section.appendChild(torre2);
section.appendChild(torre3);
torre1.appendChild(disco1);
torre1.appendChild(disco2);
torre1.appendChild(disco3);
torre1.appendChild(disco4);

//agora posso trabalhar com as coisas que selecionei no javascrip e estiliza-las no CSS

function checarSeVitoria(){
    if(torre1.lastElementChild === null && torre2.lastElementChild === null){
        return window.alert("Parabéns! você conseguiu!")
      }
}
let modoJogada = true
let discoClicado;

torre1.addEventListener('click', callBack)
torre2.addEventListener('click', callBack)
torre3.addEventListener('click', callBack)

function callBack(event){
    let target = event.target
    
    if(modoJogada===true && target.lastElementChild !== null){
        discoClicado = target.lastElementChild
        modoJogada = false
    } else {
        if(target !== disco1 && target !== disco2 && target !== disco3 && target !== disco4 && target.lastElementChild===null) {
            target.appendChild(discoClicado)
            modoJogada = true
            checarSeVitoria()
            
        } else if(target !== disco1 && target !== disco2 && target !== disco3 && target !== disco4 && target.lastElementChild.clientWidth > discoClicado.clientWidth) {
                target.appendChild(discoClicado)
                modoJogada = true
                checarSeVitoria()
        } else {
            modoJogada = true
            discoClicado = undefined
        }
        }
        console.log(modoJogada)
    }
