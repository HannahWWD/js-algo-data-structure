// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        const node = new Node(data);
        // note that this.children is not referring to the node.children. this.children is just an empty array
        this.children.push(node)
    }

    remove(data){
        this.children = this.children.filter(eachNode => eachNode.data !== data)
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(func){
        let nodes = [this.root]
        while(nodes.length !== 0){
            let node = nodes.shift()
            if(node.children){
                // add node's children to the end of the array
                nodes.push(...node.children)
            }
            func(node)
            
        }
       
}

    traverseDF(func){
        let nodes = [this.root]
        while(nodes.length !== 0){
            let node = nodes.shift()
            // add node's children to the beginning of the array
            if(node.children){
                nodes.unshift(...node.children)
            }
            func(node)

        }
        
        
    }

}

module.exports = { Tree, Node };
