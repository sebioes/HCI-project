var character=document.getElementById("character");
var block=document.getElementById("block");
var btn= document.getElementById("button-pannel");
var score=0;

function jump(){
    if(character.classList !="animate"){
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    },1000);
};


function hideBtn(){
    block.classList.add("slide");
    btn.style.display ="none";
    character.style.display="block";
    block.style.display="block";
    document.querySelector("#character").classList.remove("hide");
    document.querySelector("#cloud").classList.remove('hide');
 };


 setInterval(() => {
    var charactertop= parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft=    parseInt( window.getComputedStyle(block).getPropertyValue("left"));

    if(blockleft>45 && blockleft<75 && charactertop>180){
        block.style="none";
        character.classList.remove("animate");
        block.classList.remove("slide");
        btn.style.display="block";
        document.getElementById("comment").innerHTML="You are loss !! ";
        document.querySelector("#character").classList.add("hide");
        document.querySelector("#cloud").classList.add('hide');
       
    }

},100);

