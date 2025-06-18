let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#reset-btn");
let newgameb=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let c=0;

const winpattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turn0){
      box.innerText="0";
      turn0=false;
    }
    else{
      box.innerText="X";
      turn0=true;
    }
    box.disabled=true;
    c++;

    let isWinner=checkWinner();
    if(c===9 && !isWinner){
      gameDraw();
    }
  });
});
const checkWinner=()=>{
  for( let pattern of winpattern){
    let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
  
  if(pos1val!="" && pos2val!="" && pos3val!=""){
    if(pos1val===pos2val && pos2val===pos3val){
      showWinner(pos1val);
      return true;
    }
  }
}
};
const showWinner=(winner)=>{
  msg.innerText=`Congrats ,winner is ${winner} `;
  msgcont.classList.remove("hide");
  disableBoxes();
}
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
const resetGame=()=>{
  turn0=true;
  c=0;
  enableBoxes();
  msgcont.classList.add("hide");
};
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgcont.classList.remove("hide");
  disableBoxes();
};
newgameb.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);
