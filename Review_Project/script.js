const reviews = [
    {
        id: 1,
        name: "Mahesh",
        img: "1.jpg",
        text: "Lorm ipsum dolor sit, amet consectetur adipisicing elit. Molestias, ea nulla ab rerum provident at culpa, ad commodi cum alias impedit omnis soluta exercitationem molestiae",
        job: "Developer"
    },
    {
        id: 2,
        name: "ganga",
        img: "2.jpg",
        text: "Lorm ipsum dolor sit, amet consectetur adipisicing elit. Molestias, ea nulla ab rerum provident at culpa, ad commodi cum alias impedit omnis soluta exercitationem molestiae",
        job: "Designer"
    },
    {
        id: 3,
        name: "Alex",
        img: "3.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        job: "Project Manager"
    },
    {
        id: 4,
        name: "Jordan",
        img: "4.jpg",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        job: "Marketing Specialist"
    }
];


console.log(reviews[1].name)
let img = document.getElementById("img");
const Name = document.getElementById("name");
let job = document.getElementById("job");
let info = document.getElementById("about");

const left = document.querySelector("#Lt");
const rigth = document.querySelector("#Rt");
const randBt = document.querySelector("#rand");
console.log(left);
let i = 0;
left.addEventListener("click", function () {
   i--;
   if(i==0){
    i=4;
   }
   img.src=reviews[i].img;
   Name.textContent=reviews[i].name;
   job.textContent=reviews[i].job;
   info.textContent=reviews[i].text;

});
rigth.addEventListener("click", function () {
   i++;
   if(i==4){
    i=0;
   }
   img.src=reviews[i].img;
   Name.textContent=reviews[i].name;
   job.textContent=reviews[i].job;
   info.textContent=reviews[i].text;

});
randBt.addEventListener("click", function () {
    
   i=getrand();
   img.src=reviews[i].img;
   Name.textContent=reviews[i].name;
   job.textContent=reviews[i].job;
   info.textContent=reviews[i].text;

});
function getrand(){
    let rand= Math.floor(Math.random()*4);
    return rand;
}