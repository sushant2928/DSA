'use strict'
class ListNode {
    constructor(nodeOrvalue) {
        if (nodeOrvalue instanceof ListNode) {
            this.value = nodeOrvalue.value
            this.next = nodeOrvalue.next
        } else {
            this.value = nodeOrvalue
            this.next = null
        }
    }
}

class LinkedList {
    #head
    #tail
    insert(value) {
        const node = new ListNode(value)
        if (this.isEmpty()) {
            this.#head = this.#tail = node
        } else {
            this.#tail.next = node
            this.#tail = this.#tail.next
        }
    }
    insertAt(index, value) {
        let current = this.#head
        let currentIndex = -1
        if (index === 0) {
            this.insertAtFirst(value)
            return
        }
        while (current.next && currentIndex < index - 1) {
            currentIndex += 1
            current = current.next
        }
        if (currentIndex === index - 1) {
            const node = new ListNode(value)
            node.next = current.next
            current.next = node
        }
        else throw new RangeError("Index out of Bound!")
    }

    insertAtFirst(value) {
        if (this.isEmpty()) {
            this.insert(value)
        } else {
            const oldHead = this.#head
            this.#head = new ListNode(value)
            this.#head.next = oldHead
        }
    }

    deleteFirst() {
        const temp = this.#head
        this.#head = this.#head?.next
        temp.next = null
    }

    deleteLast() {
        if (this.isEmpty()) return
        if (this.#head === this.#tail) {
            this.#head = this.#tail = null
            return
        }
        let secondLast = this.#head
        while (secondLast.next !== this.#tail) {
            secondLast = secondLast.next
        }
        secondLast.next = null
        this.#tail = secondLast
    }

    deleteAt(index) {
        if (this.isEmpty()) throw new RangeError("Index out of bound!")
        if (index === 0) {
            this.deleteFirst()
            return
        }
        let currentIndex = 0
        let current = this.#head
        let prev = null
        while (currentIndex < index && current !== null) {
            prev = current
            current = current.next
            currentIndex += 1
        }
        if (currentIndex < index) throw new RangeError("Index out of bound!")
        if (current === this.#tail) {
            this.deleteLast()
            return
        }
        prev.next = current.next
        current.next = null
    }

    deleteAtFromEnd(index) {
        if (this.isEmpty()) throw new RangeError("Index out of bound!")
        if (index === 0) {
            this.deleteLast()
            return
        }
        let total = 1
        let current = this.#head
        while (current.next) {
            total += 1
            current = current.next
        }
        this.deleteAt(total - index - 1)
    }

    indexOf(value) {
        let current = new ListNode(this.#head)
        let index = -1
        while (current?.value === 0 || current?.value) {
            index += 1
            if (current.value === value) {
                return index
            } else {
                current = current.next
            }
        }
        return -1
    }

    reverse() {
        if (!this.#head || !this.#head.next) {
            return this
        }
        let prev = { ...this.#head }
        let current = { ...prev?.next }
        this.#tail = prev
        this.#tail.next = null
        while (current) {
            this.#head = current
            const next = current?.next
            current.next = prev
            prev = current
            current = next
        }
    }
    toString() {
        let current = new ListNode(this.#head)
        let linkedListString = ""
        while (current?.value === 0 || current?.value) {
            linkedListString = linkedListString ? linkedListString + " --> " + String(current.value) : String(current.value)
            current = current.next
        }
        return linkedListString || "EMPTY"
    }

    isEmpty() {
        return !this.#head
    }
    swapPairs() {
        let head = this.#head
        const node = new ListNode()
        node.next = head
        let prev = node
        while (head && head?.next) {
            let node1 = head
            let node2 = head.next
            prev.next = node2
            node1.next = node2.next
            node2.next = node1
            this.#tail = node1
            prev = node1
            head = node1?.next
        }
        this.#head = node.next
    }
}

const linkedList = new LinkedList()
linkedList.insert(2)
linkedList.insert(3)
linkedList.insertAtFirst(1)
linkedList.insert(4)
linkedList.insert(5)
linkedList.deleteAt(2)
linkedList.insertAtFirst(0)
linkedList.insert(6)
linkedList.insert(7)
linkedList.insertAt(5, 55)
linkedList.reverse()
console.log(linkedList.toString())
linkedList.insertAt(1, 11)
linkedList.deleteFirst()
linkedList.deleteLast()
console.log(linkedList.toString())
linkedList.deleteAtFromEnd(3)
console.log(linkedList.toString())
console.log(linkedList.indexOf(5))
console.log(linkedList.toString())
linkedList.swapPairs()
console.log(linkedList.toString())

