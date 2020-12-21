let user = require("readline-sync")
let fs = require("fs")
let data = fs.readFileSync('../assets/text/readorderlist.txt', 'utf-8')
let linkedList = require("../utility/linkedlist")
let word = user.question("Enter the word you want to search ")
let arr = data.toString().split(" ") //this is case sensetive to make it non case sensetive add .toLowerCase()
for (let i = 0; i < arr.length; i++) {
    linkedList.add(arr[i])
}
console.log(data)
let searchWord = linkedList.search(word)
if (searchWord == false) {
    data = data + word
    fs.writeFileSync("../assets/text/writeorderlist.txt", data, function (err) {
        if (err) console.error("Error found")
    })
} 
else {
    linkedList.removeElement(word)
    data=linkedList.display()
    console.log("The data ks given",data)
    fs.writeFileSync("../assets/text/writeorderlist.txt", data, function (err) {
        if (err) console.error("Error found")
    })
}
let op = fs.readFileSync("../assets/text/writeorderlist.txt", "utf-8")
console.log(op)
