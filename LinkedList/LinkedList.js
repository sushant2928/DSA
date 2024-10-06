class Node {
    constructor(nodeOrvalue) {
        if (nodeOrvalue instanceof Node) {
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
        const node = new Node(value)
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
            const node = new Node(value)
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
            this.#head = new Node(value)
            this.#head.next = oldHead
        }
    }


    indexOf(value) {
        let current = new Node(this.#head)
        let index = -1
        while (current?.value) {
            index += 1
            if (current.value === value) {
                return index
            } else {
                current = current.next
            }
        }
        return -1
    }

    toString() {
        let current = new Node(this.#head)
        let linkedListString = ""
        while (current?.value) {
            linkedListString = linkedListString ? linkedListString + " --> " + String(current.value) : String(current.value)
            current = current.next
        }
        return linkedListString
    }

    isEmpty() {
        return !this.#head
    }
}

const linkedList = new LinkedList()
linkedList.insertAtFirst(9)
linkedList.insert(1)
linkedList.insert(2)
linkedList.insert(2)
linkedList.insert(4)
linkedList.insertAtFirst(10)
linkedList.insert(2)
linkedList.insert(3)
linkedList.insertAt(5, 9999)
linkedList.insertAt(8, 999)
linkedList.insertAt(2, 99)
console.log(linkedList.toString())
console.log(linkedList.indexOf(999))
console.log(linkedList.indexOf(2))
