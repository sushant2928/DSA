// Assuming that the array is static in JS
class DynamicArray {
    constructor(capacity = 1) {
        this.capacity = capacity
        this.length = 0
        this.array = new Array(capacity)
    }
    get(index) {
        if (this.array[index]) return this.array[index]
        else throw new Error("Index out of bound")
    }
    set(index, elem) {
        if (index < this.length)
            this.array[index] = elem
        else throw new Error("Index out of bound")
    }
    size() {
        return this.length
    }
    isEmpty() {
        return this.length === 0
    }
    add(elem) {
        if (this.length >= this.capacity) {
            this.capacity *= 2
            const tempArray = new Array(this.capacity)
            for (let i = 0; i < this.length; i += 1) {
                tempArray[i] = this.array[i]
            }
            this.array = tempArray
        }
        this.array[this.length] = elem
        this.length += 1
    }
    removeAt(rm_index) {
        if (rm_index < 0 || rm_index >= this.length) {
            return "Index out of bound"
        }
        this.array = this.array.filter((_, index) => {
            return index !== rm_index
        })
        this.length -= 1
    }
}

const ar = new DynamicArray(2);
ar.add(3);
ar.add(7);
ar.add(6);
ar.add(-2);
ar.add(7);
for (let i = 0; i < ar.size(); i += 1) console.log(ar.get(i));
console.log("-------")
ar.removeAt(3)
for (let i = 0; i < ar.size(); i += 1) console.log(ar.get(i));
console.log("-------")
ar.set(2, 111)
for (let i = 0; i < ar.size(); i += 1) console.log(ar.get(i));