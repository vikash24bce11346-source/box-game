// let s1= document.querySelector("#b1");
let s1= document.getElementById("b1");
let s2= document.getElementById("b2");
let s3= document.getElementById("b3");
let s4= document.getElementById("b4");
// s1.addEventListener("mouseenter",function(){
//     s1.style.backgroundColor="red"
// })
// s1.addEventListener("mouseleave",function(){
//     s1.style.backgroundColor="white"
// })

// instring if you have to give dynamic value use the dynamical variable inbetween the braces followed by dollar sign
s1.addEventListener("mouseenter",function(){
    let r1= Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r1}</h1>`;
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>1</h1>`;
})
let clr= "green";
s2.addEventListener("mouseenter",function(){
   if(clr=="green"){
    s2.style.backgroundColor="green";
    clr="red";
   }
   else if(clr=="red"){
     s2.style.backgroundColor="red";
     clr="blue";
   }
   else{
   s2.style.backgroundColor="blue";
   clr="green";
   }
   
})
s2.addEventListener("mouseleave",function(){
   s2.style.backgroundColor="white";
})


s3.addEventListener("mouseenter",function(){

//  s3.backgroundColor= `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  s3.style.backgroundColor=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
})
s3.addEventListener("mouseleave",function(){
   s3.style.backgroundColor="white";
})

s4.addEventListener("click",function(){
     s1.style.backgroundColor=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
      s2.style.backgroundColor=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
       s3.style.backgroundColor=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
})
s4.addEventListener("mouseleave",function(){
     s1.style.backgroundColor="white";
       s2.style.backgroundColor="white";
         s3.style.backgroundColor="white";
})






