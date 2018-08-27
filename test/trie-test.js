import { expect } from'chai';
import Trie from '../lib/trie';

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

  it('should default root to null', () => {
    expect(trie.root).to.equal(null)
  });

  it('should increase totalWords each time new word is instantiated', () => {
    expect(trie.count()).to.equal(0);
    trie.insert('poop')
    expect(trie.count()).to.equal(1);
  });

})