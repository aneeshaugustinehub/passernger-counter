let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
//let preVal = "previous entre "
function increment() {
    count += 1
    countEl.innerText = count
}
console.log();

function save(){
    let preVal = count + " - "
    saveEl.textContent += preVal
    count = 0
    countEl.textContent = count
}
