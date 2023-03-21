const closeOrcamento01 = document.querySelector('.orcamentoclose');
const closeOrcamento02 = document.querySelector('.closepage');
const orcamento = document.querySelector('.orcamentoforclick');
const orcamento02 = document.querySelector('.orcamentoforclick02');

function AbreOrcamento(){
    Fechahowiam()
    const blocoorca = document.querySelector('.orcamento');
    blocoorca.style.opacity = "1";
    blocoorca.style.pointerEvents = "all";
    blocoorca.style.marginTop = "0px";
}
orcamento.addEventListener('click', AbreOrcamento);
orcamento02.addEventListener('click', AbreOrcamento);


function FechaOrcamento() {
    const blocoorca = document.querySelector('.orcamento');
    blocoorca.style.opacity = "0";
    blocoorca.style.marginTop = "20px";
    blocoorca.style.pointerEvents = "none";
}
closeOrcamento01.addEventListener('click', FechaOrcamento);
closeOrcamento02.addEventListener('click', FechaOrcamento);
// 

// 

// 

const buttHowIAm = document.querySelector('.howiamforclick');
const fecha01 = document.querySelector('.closehowiam');
const fecha02 = document.querySelector('.howiamclose');
const TellMe = document.querySelector('.buttonTellme');


function AbreHowiam() {
    FechaOrcamento()
    const blocohow = document.querySelector('.howiam');
    blocohow.style.opacity = "1";
    blocohow.style.pointerEvents = "all";
    blocohow.style.marginTop = "0px";
}
function Fechahowiam() {
    const blocohow = document.querySelector('.howiam');
    blocohow.style.opacity = "0";
    blocohow.style.pointerEvents = "none";
    blocohow.style.marginTop = "20px";
}
buttHowIAm.addEventListener('click', AbreHowiam);
fecha01.addEventListener('click', Fechahowiam);
fecha02.addEventListener('click', Fechahowiam);
TellMe.addEventListener('click', AbreHowiam);


// const UserPage = document.querySelector('#nomeUser');
// const UserPage2 = document.querySelector('#nomeUser2');
// const namepage = window.prompt('Digite Seu Nome: ');

// if (namepage != ""){
//     UserPage.innerText = `, ${namepage}`
//     UserPage2.innerText = `${namepage}, `
// } else{
//     UserPage.innerText = ", Estranho";
//     UserPage2.innerText = "Estranho, ";
// }



const DataT = document.querySelector('#AnoData');
const InfDATA = new Date();
DataT.innerText = InfDATA.getFullYear();