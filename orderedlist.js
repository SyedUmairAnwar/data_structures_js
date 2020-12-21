let user = require("readline-sync")
let fs = require("fs")
let linkedlist = require("../utility/linkedlist")
let data = fs.readFileSync("../assets/text/readorderlist.txt", "utf-8")
let word = user.question("Enter the word ")
console.log(data)
let arr = data.toString().split(" ")
for (let i = 0; i < arr.length; i++) {
    linkedlist.add(arr[i])
}
console.log(linkedlist.linkSort())
let searchWord = linkedlist.search(word)
if (searchWord == false) {
    linkedlist.add(word)
    sortData = linkedlist.linkSort()
    fs.writeFileSync("../assets/text/writeorderlist.txt", sortData, function (err) {
        if (err) console.error("Error found")
    })
}
else {
    linkedlist.removeElement(word)
    console.log(linkedlist.display())
    sortData = linkedlist.linkSort()
    fs.writeFileSync("../assets/text/writeorderlist.txt", sortData, function (err) {
        if (err) console.error("Error found")
    })
}
let op = fs.readFileSync("../assets/text/writeorderlist.txt", "utf-8")
console.log(op)



