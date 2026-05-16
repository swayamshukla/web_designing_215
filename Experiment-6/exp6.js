let heading=document.getElementById("heading");
let paragraph=document.getElementById("paragraph");
let input=document.getElementById("userinput");

let fontSize=16;

//changing heading text (onclick event)
document.getElementById("headingbtn").addEventListener("click", function() {
     if(input.value!==""){
     heading.innerHTML=input.value;
}
});

//chnage background color 
document.getElementById("bgcolorbtn").onclick=function() {
     document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
};

//increase font size
document.getElementById("increasesize").addEventListener("click", function() {
     fontSize+=2;
     paragraph.style.fontSize=fontSize+"px";
});

//decrease font size
document.getElementById("decreasesize").addEventListener("click", function() {
     fontSize-=2;
     paragraph.style.fontSize=fontSize+"px";
});

//show /hide paragraph
document.getElementById("togglebtn").addEventListener("click", function() {
     if(paragraph.style.display === "none"){
          paragraph.style.display = "block";   //bydefault display is block for paragraph, so we can also use "" instead of "block"
     }
     else{
          paragraph.style.display="none";
     }
});

//reset page
document.getElementById("resetbtn").addEventListener("click", function() {
     heading.innerHTML="Hello World";
     paragraph.style.display="block";
     paragraph.style.fontSize="16px";
     document.body.style.backgroundColor="#ffffff";
});