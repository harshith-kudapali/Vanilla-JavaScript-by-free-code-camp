let count=0;
const num= document.querySelector("#num");
const btn_l=document.querySelectorAll(".btn");
console.log(btn_l);
btn_l.forEach(function(item){
    console.log(item)
   item.addEventListener("click",function(e){
    const sty=e.currentTarget.classList;
    if (sty.contains("dc")){
        count--
        updatecount();
    }
    if(sty.contains("in")){
        count++
        updatecount();
    }
    if(sty.contains("rs")){
        count=0
        updatecount(); 
    }
   });
    
});
function updatecount(){
    num.textContent=count;
}