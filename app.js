let computerScore=0
let userScore=0
const userScore_span= document.getElementById("user-score")
const computerScore_span= document.getElementById("computer-score")
const scoreboard_div= document.querySelector(".score-board")
const result_p=document.querySelector(".result>p")
const rock_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissors_div=document.getElementById("s")
function converttoword(l)
{
  if(l==='r')
  {
    return "rock"
  }
  else if(l=='p')
  {
    return "paper"
  }
  return "scissors"
}
function getComputerChoice()
{
  const choice=['r','p','s']
  const randomNumber=Math.floor(Math.random()*3)
  return choice[randomNumber]
}
function win(userchoice,compchoice)
{
  userScore++
  userScore_span.innerHTML=userScore
  computerScore_span.innerHTML=computerScore
  result_p.innerHTML=converttoword(userchoice)+" beats "+converttoword(compchoice)+". You win.!!"
}
function lose(userchoice,compchoice)
{
  computerScore++
  userScore_span.innerHTML=userScore
  computerScore_span.innerHTML=computerScore
  result_p.innerHTML=converttoword(compchoice)+" beats "+converttoword(userchoice)+". You lose.!!"
}
function draw(userchoice,compchoice)
{
  userScore_span.innerHTML=userScore
  computerScore_span.innerHTML=computerScore
  result_p.innerHTML=converttoword(userchoice)+" matches "+converttoword(compchoice)+". Its a draw!!"
}
function game(userChoice)
{
  const computerChoice=getComputerChoice()
  switch(userChoice+computerChoice)
  {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice,computerChoice)
      break;
    case 'sr':
    case 'ps':
    case 'rp':
      lose(userChoice,computerChoice)
      break
    case 'pp':
    case 'rr':
    case 'ss':
      draw(userChoice,computerChoice)
      break
  }
}
function main()
{
  rock_div.addEventListener('click',function(){
    game("r")
  })
  paper_div.addEventListener('click',function(){
    game("p")
  })
  scissors_div.addEventListener('click',function(){
    game("s")
  })
}
main();
