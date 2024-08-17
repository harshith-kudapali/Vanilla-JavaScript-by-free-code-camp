const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.getElementById("click");
const bg = document.querySelector('#color');
btn.addEventListener("click", function () {

    const randNum = getNum();
    document.body.style.backgroundColor = randNum;
    bg.textContent = randNum;
});
function getRand() {
    return Math.floor(Math.random() * 16);
}
var hexa = "";
function getNum() {
    hexa = '#';
    for (let i = 0; i < 8; i++) {
        hexa += hex[getRand()];
    }
    console.log(hexa);
    return hexa;
}