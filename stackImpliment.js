let user = require("readline-sync")
let stack = require("../utility/stack")
let count = 0
while (count == 0) {
    let choise = user.question("1)push 2)pop 3)display ")
    switch (choise) {
        case "1": let userPush = user.question("Enter the data ")
            stack.push(userPush)
            break
        case "2": stack.pop()
            break
        case "3":console.log( stack.display())
            break
        default: console.log("Please give the correct data")
    }
    let useAsk = user.question("1)continew 2)End")
    if (useAsk == "2") count++
}