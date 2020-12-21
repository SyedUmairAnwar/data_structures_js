class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(element) {
        var node = new Node(element)
        if (this.head == null)
            this.head = node
        else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    remove(index) {
        if (index > 0 && index > this.size)
            return -1
        else {
            var cur, prev, it = 0
            cur = this.head
            prev = cur
            if (index === 0) {
                this.head = cur.next
            }
            else {
                while (it < index) {
                    it++
                    prev = cur
                    cur = cur.next
                }
                prev.next = cur.next
            }
            this.size--
            return cur.element
        }
    }
    display() {
        let curr = this.head
        let str = ""
        while (curr != null) {
            str += curr.element + " "
            curr = curr.next
        }

        return str
    }
    search(searchWord) {
        let current = this.head
        while (current != null) {
            if (current.element == searchWord) {
                return true
            }
            current = current.next
        }
        return false
    }
    removeElement(element) {
        let current = this.head
        let prev = null
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next
                } else {
                    prev.next = current.next
                }
                this.size--
                return current.element
            }
            prev = current
            current = current.next
        }
        return false
    }
    length() {
        return this.size
    }
    get(index) {
        if (index > 0 && index > this.size)
            return -1
        else {
            var cur, prev, it = 0
            cur = this.head
            prev = cur
            if (index === 0) {
                this.head = cur.next
            }
            else {
                while (it < index) {
                    it++
                    prev = cur
                    cur = cur.next
                }
            }
            return cur.element
        }
    }
    linkSort() {
        let array = this.display().split(" ")
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                }
            }
        }
        array.shift()
        let ab=""
        for (let i = 0; i < array.length; i++) {
            ab +=array[i]+" "
        }
        return ab
    }

}
module.exports = new LinkedList