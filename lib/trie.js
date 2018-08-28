import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = new Node();
    // this.words = {};
  }

  count() {
    return this.totalWords;
  }

  insert(word) {
    let currNode = this.root;
    let wordArray = [...word];
    this.insertRecursive(wordArray, currNode)
    this.totalWords++;
  }

  insertRecursive(wordArray, currNode) {
    if(wordArray.length < 1) {
        currNode.end = true;
        return
      }
    if(currNode.children[wordArray[0]]){
      currNode = currNode.root.children[wordArray.shift()];
    } else {
      let letter = wordArray[0];
      currNode.children[letter] = new Node();
      currNode = currNode.children[letter];
      wordArray.shift();
    }
    this.insertRecursive (wordArray, currNode);
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