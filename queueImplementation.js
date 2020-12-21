let user = require("readline-sync")
let queue = require("../utility/queue")
let count = 0
while (count == 0) {
    let choise = user.question("1)enqueue 2)dequeue 3)display ")
    switch (choise) {
        case "1": let userPush = user.question("Enter the data ")
            queue.enqueue(userPush)
            break
        case "2": queue.dequeue()
            break
        case "3": console.log(queue.display())
            break
        default: console.log("Please give the correct data")
    }
    let useAsk = user.question("1)continew 2)End")
    if (useAsk == "2") count++
}