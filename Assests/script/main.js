const allCardCount = document.querySelectorAll(".card-body").length

const totalCardCountElement = document.getElementById("totalCardCount")
totalCardCountElement.innerText = allCardCount


let num = 0;

function increase() {
    num++;                     // increase by 1
    document.getElementById("interview-count").innerText = num;
}