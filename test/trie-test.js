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

it('should create new branch for each new first letter', () => {
    trie.insert ('help');
    trie.insert ('cool');
    trie.insert ('poop');
    console.log(JSON.stringify(trie, null, 4))
    expect(Object.keys(trie.root.children)).to.deep.eq([ 'h', 'c', 'p' ])
  })

})