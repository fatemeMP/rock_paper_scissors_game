const choose = [ "rock" ,"peper" , "scissor"];

const random = Math.floor(Math.random() * 3);
const copmuterChoose = choose[random];
console.log(`computer choose : ${copmuterChoose}`);


const userChoose = prompt("choose rock ,paper , scissor");
if(userChoose){
   console.log(` you choose :${userChoose}`);
}else{
    console.log(` you cheated!`);
}


if (copmuterChoose === userChoose){
    console.log(" it's a tie");
}else if (userChoose === "rock"){
      if(copmuterChoose === "scissor"){
      console.log("you win");
      }else{
        console.log("you lose!");
    }

}else if (userChoose === "paper"){
      if(copmuterChoose === "rock"){
        console.log ("you win")
      }else{
        console.log ("you lose!")
      }

}else if (userChoose === "scissor"){
      if(copmuterChoose === "paper"){
      console.log("you win")
      }else{
          console.log("you lose")
      }
}




