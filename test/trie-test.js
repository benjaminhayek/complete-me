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

  it('should insert a word by invoking the insert method', () => {
    trie.insert('hello');
    trie.insert('cool');
    trie.insert('poop');
    expect(trie.root).to.have.property('h') 
    expect(trie.root).to.have.property('c') 
    expect(trie.root).to.have.property('p') 
  });
  
  it('should suggest as array of words', () => {
    trie.insert('hello');
    trie.insert('help');
    trie.insert('poop');
    let response = trie.suggest('h');
    console.log(JSON.stringify(trie, null, 4))
    expect(response).to.deep.eq(['hello', 'help'])
  });

  it('should populate with words', () => {
    trie.populate(dictionary);
    expect(trie.totalWords).to.equal(235886)
  })

})