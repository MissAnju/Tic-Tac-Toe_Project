let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");

let newGameBtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;                       //playerX, playerO
/*
//1D Array
 let arr = ["apple", "banana", "orange"];

//2D Array
 let arr2 = [["apple", "mango"], 
       ["potato", "onion"],
       ["pants", "shirts"]
       ];

 console.log(arr2);    // print complete array
 console.log(arr2[0]); //print particular index of array
 console.log(arr2[0][0]);   //print particular index in index  value of  array 
 console.log(arr2[1][0]);


*/
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8], 
];

//game reset
const resetGame = () => {
    turnO = true;
    enableBoxes(); //call enableboxes
    msgContainer.classList.add("hide");
};








boxes.forEach(function(box){
    
    box.addEventListener("click", function() {
        console.log("box was clicked");
        //box.innerText = "Hello";   //click print helloin box

         if(turnO){
            box.innerText = "O";  //playerO,
            turnO =false;
         } else{
            box.innerText = "X"; //playerX,
            turnO =true;
         }
      box.disabled = true;

      checkWinner();


    });
});


/*
const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        console.log(
            // boxes[pattern[0]].innerText,
            // boxes[pattern[1]].innerText,
            // boxes[pattern[2]].innerText  //find value of particular index.
           
         );



    }
}
*/

//disbled the boxes once winner is find then we not click any boxes or not continue the game so we use this function.
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

//when game is reset than boxes are enables
const enableBoxes = () => {
    for(let box of boxes) {
        box.enabled = false;
 //also change the text in the boxes then reset the game.
        box.innerText = "";


    }
};


//create showwinner
const showWinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");  
//call disableboxes function
  disableBoxes();

}









const checkWinner = () => {
    for(let pattern of winPatterns){

let pos1Val = boxes[pattern[0]].innerText;    // pos1val->position1value
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val != ""  && pos2Val != "" && pos3Val != ""){
   if(pos1Val === pos2Val && pos2Val === pos3Val) {
       //console.log("winner =",  pos1Val);



       // show msg 

       showWinner(pos1Val);
   }
}
}

};


//call reset game so we add a eventlistener.
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


















