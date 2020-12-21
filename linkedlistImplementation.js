let user = require("readline-sync")
let linkedlist = require("../utility/linkedlist")
let count = 0
while (count == 0) {
    let choise = user.question("1)add 2)remove 3)display 4)sort")
    switch (choise) {
        case "1": let useradd = user.question("Enter the data ")
            linkedlist.add(useradd)
            break
        case "2": let userRemove = user.question("Enter the  index")
            let index = parseInt(userRemove)
            linkedlist.remove(index)
            break
        case "3":console.log( linkedlist.display())
            break
        case "4":console.log(linkedlist.linkSort())   
        break 
        default: console.log("Please give the correct data")
    }
    let useAsk = user.question("1)continew 2)End")
    if (useAsk == "2") count++
}