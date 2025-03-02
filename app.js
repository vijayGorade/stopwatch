console.log("hello from the vijay gorade");



let hrDiv=document.querySelector("#hr");
let minuteDiv=document.querySelector("#mi");
let secondDiv=document.querySelector("#ds");
// console.log(hr,minute,second)

let resetBtn=document.querySelector(".reset");
let  stopBtn=document.querySelector(".stop");
let start=document.querySelector(".start");

let hr=0;
let mi=0;
let sr=0;
let no;
start.addEventListener("click",()=>{
     no=setInterval(()=>{
    sr++;
if(sr===59)
{
    sr=0;
    mi++;
    if(mi==59)
    {
        mi=0;
        hr++;
        hrDiv.innerText=hr;
    }

  minuteDiv.innerText=mi;  
}
secondDiv.innerText=sr;
},24)
})

stopBtn.addEventListener("click",()=>clearInterval(no))

resetBtn.addEventListener("click",()=>{
   

     hr=0; 
     mi=0;
 sr=0;
 hrDiv.innerText=hr+"0";
 minuteDiv.innerText=mi+"0";
 secondDiv.innerText=sr+"0";

})


