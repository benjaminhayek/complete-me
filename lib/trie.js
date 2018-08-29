import Node from './Node';

export default class Trie {
  constructor () {
    this.root = new Node ();
    this.totalWords = 0;
  }

  count() {
    return this.totalWords;
  };

  insert(word) {
    let currNode = this.root;
    let wordArray = [...word];
    this.insertRecursive (wordArray, currNode)
    this.totalWords++;
  }

  insertRecursive (wordArray, currNode) {
    if (wordArray.length < 1) {
      currNode.end = true;
      return;
    }
    if (currNode[wordArray[0]]) {
      currNode = currNode[wordArray.shift()];
    } else {
      let letter = wordArray[0]
      currNode[letter] = new Node();
      currNode = currNode[letter];
      wordArray.shift ();
    }

    return this.insertRecursive (wordArray, currNode);
  }

  suggest(input = '') {
   if (Object.keys(this.root).includes(input[0])) {
     let splitInput = input.split('');
     let path = splitInput.reduce( (key, letter) => {
       return key[letter];
     }, this.root);

     return this.getWords(path, input);
   } else {
     return "no words";
   }
 }

  getWords(obj, input) {
    let results = [];
    let arr = Object.keys(obj);

    arr.forEach( key => {
      if (key !== 'end') {
        results.push(...this.getWords(obj[key], input + key));
      } else if (obj.end) {
        results.push(input);
      }
    })
    return results;
  }

  populate(dictionary) {
    dictionary.forEach( word => {
      this.insert(word);
    })
  }
}


    // let letterArr = word.split('');
    // let letter = letterArr.shift();
    // let node = new Node(letter);
    // this.head = node;
    // let currNode = this.root;
    // let prevNode;

    // while(letterArr.length !== 0){
    //   letter = letterArr.shift();
    //   prevNode = currNode;
    //   currNode = currNode.next;
    //   let newNode = new Node(letter);
    // }