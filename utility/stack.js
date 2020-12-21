class Stack {
    constructor() {
        this.item = []
        this.top = 0
    }
    push(elem) {
        this.item[this.top] = elem
        this.top++
    }
    pop() {
        if (this.item.length === 0) return "underflow"
        else {
        
            this.top--
            return this.item.pop()
        }
    }
    display() {
        let str = ""
        for (var i = 0; i < this.item.length; i++) {
            str += this.item[i] + " "
        }
        return str
    }
}
module.exports = new Stack;