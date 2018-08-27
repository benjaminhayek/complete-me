export default class Node {
  constructor(letter, children = null) {
    this.letter = letter[0];
    this.end =false;
    this.children = children;
  }
}