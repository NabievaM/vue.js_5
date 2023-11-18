const selectButton = document.querySelector(".btn1");
const selectBGC = document.querySelector(".box");
const selectBGC1 = document.querySelector(".box1");
const selectIcon = document.querySelector(".like-icon");
const selectIcon2 = document.querySelector(".icon-star");
const selectIcon3 = document.querySelector(".icon-square");


const selectButton2 = document.querySelector(".button");
const selectButton3 = document.querySelector(".button1");
const selectP = document.querySelector(".box1>p");


selectButton.onclick = function () {
    selectBGC.style.cssText = "background-color:skyblue; color: white;";
    selectButton.style.cssText = "background-color:#eee; color: skyblue;";
    selectIcon.style.cssText = "background-color:#eee; color:red; border-radius:5px"
}

selectButton2.onclick = function () {
    selectButton2.style.cssText = "background-color:yellow; color:gray; border-color: gray"
    selectIcon3.style.cssText = "background-color:yellow; color:white; border-radius:5px"

}
selectButton3.onclick = function () {
    selectBGC1.style.cssText = "border:2px solid red; color:pink";
    selectP.style.cssText = "color:pink"
    selectButton3.style.cssText = "background-color:pink; color:red; border-color:pink";
    selectIcon2.style.cssText = "background-color:pink; color:red; border-radius:5px"
}