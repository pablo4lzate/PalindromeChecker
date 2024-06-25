const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const result = document.getElementById("result");
const mainDiv = document.getElementById("main");
const collapseButton = document.getElementById("collapse-btn");

let oldUserData;
let isCollapsed;

checkButton.addEventListener("click", getInputData);
collapseButton.addEventListener("click", collapseMain);
collapseButton.style.display = "none";



function getInputData(){
  const userData = userInput.value;

  if (!userData){
    alert("Please input a value");
  }
  else if (oldUserData != userData || isCollapsed){
    isPalindrome(userData);
    fadeInText();
    oldUserData = userData;
  }
  else{
    alert("Please input a different value");
  }

}


function isPalindrome(userData){
  const userString = userData.toLowerCase().replace(/\W+|\_+/g, '');
  const reversedString = userString.split("").toReversed().join("");

  console.log(userString);
  console.log(reversedString);

  isCollapsed = false;
  collapseButton.style.display = "inline";


  if (userString === reversedString){
    result.innerHTML = `<span class="bold">"${userData}"</span> is a palindrome`;
  }
  else{
    result.innerHTML = `<span class="bold">"${userData}"</span> is not a palindrome`;
  }

  mainDiv.style.animation = "main_expand 1s ease-in-out forwards";

}


function collapseMain(){
    mainDiv.style.animation = "main_collapse 0.1s forwards";
    isCollapsed = true;
}


const fadeInText = ()=>{
  result.style.animation = "none";
  result.offsetHeight; /*flow trigger*/
  result.style.animation = "fade-in 0.3s ease-in-out forwards";
}

const changeHeight = ()=>{
  const maxHeight = mainDiv.clientHeight;
  mainDiv.style.maxHeight = maxHeight;
}