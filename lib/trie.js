import Node from './Node';

export default class Trie {
  constructor () {
    this.root = new Node ();
    this.totalWords = 0;
  }

  count() {
    return this.totalWords;
  }

  insert(word) {
    let currNode = this.root;
    let wordArray = [...word];

    this.insertRecursive (wordArray, currNode);
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
      let letter = wordArray.shift();

      currNode[letter] = new Node();
      currNode = currNode[letter];
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
      return "no word";
    }
  }

  getWords(path, input) {
    let results = [];
    let arr = Object.keys(path);

    arr.forEach( key => {
      if (key !== 'end') {
        results.push(...this.getWords(path[key], input + key));
      } else if (path.end) {
        results.push(input);
      }
    });
    return results;
  }

  populate(dictionary) {
    dictionary.forEach( word => {
      this.insert(word);
    });
  }
}