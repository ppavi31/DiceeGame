var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

document.querySelector("img").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").textContent="Player 2 Wins";

}
else{
    document.querySelector("h1").textContent="It is a Draw";

}