// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        const newNode = new Node(data,this.head)
        this.head = newNode;
    }

    size(){
        let count = 0;
        let node = this.head;
        // nextNode !== null
        while(node){
        count++;
        node = node.next;
        }
          return count;
      }

    getFirst(){
        return this.head
    }

    getLast(){
        let node = this.head;
    
        while(node.next){
          node = node.next
        }
        
        return node
      }

    clear(){
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next
    }

    removeLast(){

        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null
            return;
        }
        let prevNode = this.head;
        let currentNode = this.head.next;
        
        while (currentNode.next){
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
        
        prevNode.next = null;
        
      }

    insertLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            this.getLast().next = newNode;
        }
    }

    getAt(index){
        /* solution 1, but need to iterate through the linked list twice */
        // if(index > this.size() - 1){
        //     return null;
        // } else{
        //     let counter = 0;
        //     let currentNode = this.head;
        //     while(index !== counter){
        //         currentNode = currentNode.next;
        //         counter++
        //     }
        //     return currentNode
        // }

        /* solution 2 */
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node
            }
            // if node.next is null, then it will exit the while loop 
            node = node.next;

            counter++;
        }

        return null;
    } 

    removeAt(index){
        // empty list
        if(!this.head){
            return;
        }
        
        if(index === 0){
            this.head = this.head.next
            return;
        }

        const prev = this.getAt(index - 1)
       
        // !prev is to handle when index is larger than list length
        // ! prev.next is to handle the index EQUALS to list length
        if(!prev||!prev.next){
           return;
        }
        prev.next = prev.next.next;
    }

    insertAt(data,index){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            return;
        }

        if(index === 0){
            newNode.next = this.head
            this.head = newNode;
            return;
        }

        const prev = this.getAt(index - 1);
        
        // if index larger than list size-1
        if(!prev||!prev.next){
            this.getLast().next = newNode;
            return;
        }

        newNode.next = prev.next
        prev.next = newNode;

    }

    forEach(func){
        let node = this.head;
        while(node){
            func(node);
            node = node.next
        }

    }

    // optional
    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node=node.next
        }
    }

}

module.exports = { Node, LinkedList };
