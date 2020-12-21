let user = require("readline-sync")
let stack = require("../utility/stack")
userIp=user.question("enter the expression")
console.log(isMatching(userIp))
function isMatching(str) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
            stack.push(str[i])
        }
        else {
            let last = stack.pop()
            if (str[i] !== map[last]) { return false }
            else return true
        }
    }
    if (stack.length !== 0) { return false }
}
