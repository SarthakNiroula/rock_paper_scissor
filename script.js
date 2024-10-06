
let imgtochange=document.querySelector("#imggg"); //accessing the node list of img to change through id
let imgtochangecomp=document.querySelector("#imgcomp"); //accessing the node list of img to change through id

let roll=document.querySelector("#roll");

let optionclicked = document.querySelector("#option_");  //accessing the node list of all the options
let reset_=document.querySelector("#reset_");
let paragraph=document.querySelectorAll(".playground p");
let confirm=0; //ensuring roll is clicked after only selecting by person
let person_choice, comp_choice; 

optionclicked.addEventListener("change", () => { //"change" => if user selects any other options except default one
    let selectedOption = optionclicked.value;

    if (selectedOption === "Rock") {
        imgtochange.src="rock.jpeg"
        person_choice="rock";

    } else if (selectedOption === "Paper") {
        imgtochange.src="paper.jpeg"
        person_choice="paper";

    } else if (selectedOption === "Scissor") {
        imgtochange.src="scissor.jpeg"
        person_choice="scissor";
    }
      else {
        imgtochange.src = "select.png"; // Reset if no valid option   
    }   
    confirm++;
});

roll.addEventListener("click", () => {

    let randomNum= Math.ceil(Math.random()*3); //.random=>[0,3) // .ceil => round up to nearest integer
    
  if(confirm>=1){
    if (randomNum == 1) {
        imgtochangecomp.src="rock.jpeg"
        comp_choice="rock";
        roll.disabled=true;
        delay_time();
        

    } else if (randomNum == 2) {
        imgtochangecomp.src="paper.jpeg"
        comp_choice="paper";
        roll.disabled=true;
        delay_time();


    } else if (randomNum == 3) {
        imgtochangecomp.src="scissor.jpeg"
        comp_choice="scissor";
        roll.disabled=true;
        delay_time();
    }
  }
  else{
    alert("Select and then only roll!");
  } 

});


function check(){

if(person_choice==="rock" && comp_choice==="rock" ){
    imgtochange.src="draw.png"
     imgtochangecomp.src="draw.png"
    // alert("draw!");

}
else if(person_choice==="paper" && comp_choice==="paper"){
    imgtochange.src="draw.png"
     imgtochangecomp.src="draw.png"
    // alert("draw!");
}

else if(person_choice==="scissor" && comp_choice==="scissor"){
    imgtochange.src="draw.png"
     imgtochangecomp.src="draw.png"

    // alert("draw!");
}

else if(person_choice==="rock" && comp_choice==="paper"){
    imgtochange.src="lost.jpg"
     imgtochangecomp.src="lost.jpg"
}

else if(person_choice==="rock" && comp_choice==="scissor"){
    imgtochange.src="win.jpg"
     imgtochangecomp.src="win.jpg"
}

else if(person_choice==="paper" && comp_choice==="rock"){
    imgtochange.src="win.jpg"
     imgtochangecomp.src="win.jpg"
    
}
else if(person_choice==="paper" && comp_choice==="scissor"){
    imgtochange.src="lost.jpg"
     imgtochangecomp.src="lost.jpg"
}
else if(person_choice==="scissor" && comp_choice==="rock"){
    imgtochange.src="lost.jpg"
     imgtochangecomp.src="lost.jpg"
}
else if(person_choice==="scissor" && comp_choice==="paper"){
    imgtochange.src="win.jpg"
     imgtochangecomp.src="win.jpg"
}

roll.style.visibility="hidden";
optionclicked.style.visibility="hidden";
// Loop through each paragraph and set its visibility to hidden
paragraph.forEach(paragraph => {
    paragraph.style.visibility = "hidden"; // Hide each paragraph
});


}

reset_.addEventListener("click",()=>{
  
    location.reload();

});


function delay_time(){

    setTimeout(() => {
        check(); // function call to check
    }, 2000);

}





// console.log(imgtochangecomp.src.innerText);
 

