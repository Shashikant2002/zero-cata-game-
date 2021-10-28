console.log("Welcome To Zero Cata Game ")
console.log("Shashikant................")

let turn = "X";
let isgameover = false;
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}


const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.inFo').innerText = boxtext[e[0]].innerText + " Win"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "56px"
        }
    })

}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("inFo")[0].innerText = "Turn of " + turn;
            }
        }
    })
})

// let reset1 = document.getElementsByClassName("reset");

reset.addEventListener('click',()=>{    
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element =>{
        Element.innerText = ""
    })
    turn = "X";
    isgameover = false;
        document.getElementsByClassName("inFo")[0].innerText = "Turn of " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        
})

