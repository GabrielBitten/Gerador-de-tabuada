//seleção dos elementos
const form = document.querySelector("#form")
const numberInput = document.querySelector("#number")
const multiplicador = document.querySelector("#multiplicator")
const tabela = document.querySelector("#operacoes")
const title = document.querySelector(".titulo-tabela span")
//funções
const createTable = (number, multiplicatorNumber) =>{
  
   tabela.innerHTML = "";

   for(i = 1; i <= multiplicatorNumber; i++){

     const resultado = number * i

     console.log(resultado)

     const template = `<div class ="row">
      <div class="operacoes">${number} x ${i} = </div>
      <div class="result">${resultado}</div>
     </div>`;

     const parser = new DOMParser()

     const htmlTemplate = parser.parseFromString(template, "text/html")

     const row = htmlTemplate.querySelector(".row")

     tabela.appendChild(row)
   }
  title.innerText = number
}

//eventos
form.addEventListener("submit", (e)=>{
    e.preventDefault();
//recebe os valores digitados

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicador.value;

//valida se existem os dois números preenchido nos campos
    if(!multiplicationNumber || !multiplicatorNumber) return;
    
    createTable(multiplicationNumber, multiplicatorNumber);
})