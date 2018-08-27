import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = null;
  }

  count() {
    return this.totalWords;
  }

  insert(newWord) {
    this.totalWords++
  }
}