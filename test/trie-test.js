import { expect } from'chai';
import Trie from '../lib/trie';
import Node from '../lib/Node';

describe('TRIE', () => {
  let trie;

  beforeEach( () => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('should default count to zero', () => {
    expect(trie.totalWords).to.equal(0)
  });

  it('should default root to empty object', () => {
    expect(trie.root.children).to.deep.equal({})
  });

  it('should increase totalWords each time new word is instantiated', () => {
    expect(trie.count()).to.equal(0);
    trie.insert('poop')
    expect(trie.count()).to.equal(1);
  });

  it('should insert word when calling insert', () => {
    trie.insert('help')
    trie.insert('hello')
    console.log(JSON.stringify(trie, null, 4))
    expect(trie.root.children.letter).to.equal('h')
  });

})