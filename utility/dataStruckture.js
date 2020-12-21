let user = require("readline-sync")
let choise = user.question("Provide the chose you want 1)stack 2)queue 3)linkedlist ")
let stack = require("./stack.js")
let queue = require("./queue")
let linklist=require("./linkedlist")
const { link } = require("fs")
const linkedlist = require("./linkedlist")
switch (choise) {
    case "1":
        stack.push("syed")
        stack.push("umair")
        stack.push("anwar")
        let op = stack.display()
        console.log(op)
        stack.pop()
        console.log(stack.display())
        break
    case "2":
        queue.enqueue("HCL")
        queue.enqueue("Lenovo")
        queue.enqueue("HP")
        queue.enqueue("MAC")
        console.log(queue.display())
        queue.dequeue()
        console.log(queue.display())
        break
    case "3": console.log("you hvae select linkedlist")
        linklist.add("syed")
        linklist.add("umair")
        linklist.add("anwar")
        linklist.add("this ")
        linklist.add("boy")
        linklist.display()
        linklist.remove(2)
       console.log( linklist.display())
       console.log(linklist.linkSort())
        break
    default: console.log("please give the correct option ")
}