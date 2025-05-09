const numberInput=document.getElementById("number");
const convertBtn=document.getElementById("convert-btn");
const outPut=document.getElementById("output");
const outputContainer=document.querySelector(".output-container");
outputContainer.classList.add("hidden");


const decimalToRomanaNumber=(input)=>{
 const romanNumberals= [
  { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
];

let result='';
let num=input;

for (let i=0; i<romanNumberals.length; i++) {
  while (num>=romanNumberals[i].value){
    result+=romanNumberals[i].symbol;
    num-=romanNumberals[i].value;
  }
}
return result;
};

const checkUserInput=()=>{
  const inputInt=parseInt(numberInput.value);

  if (isNaN(inputInt) ){
    output.textContent="Please enter a valid number";
    outputContainer.classList.add("error");
      
  } else if (inputInt<=0){
    outPut.textContent="Please enter a number greater than or equal to 1";
    outputContainer.classList.add("error");
    
  } else if (inputInt>=4000){
    outPut.textContent="Please enter a number less than or equal to 3999";
    outputContainer.classList.add("error");
    
  } else {

  outPut.textContent=decimalToRomanaNumber(inputInt);
  outputContainer.classList.remove("error");
  }
    setTimeout(() => {
        outputContainer.classList.remove("hidden")
    }, 500);
  numberInput.value="";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e)=>{
  if (e.key==="Enter"){
    checkUserInput();
  }
})


