import { expect } from'chai';
import Trie from '../lib/trie';
import fs from 'fs';
require('locus');

describe('TRIE', () => {
  let trie;
  const text = "/usr/share/dict/words";
  const dictionary = fs.readFileSync(text).toString().trim().split('\n');

  beforeEach( () => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('should default count to zero', () => {
    expect(trie.totalWords).to.equal(0)
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
    trie.insert('collar');
    trie.insert('collared');

    let response = trie.suggest('c');

    expect(response).to.deep.eq(['collar', 'collared'])
  });

  it('should populate with words', () => {
    trie.populate(dictionary);
    expect(trie.totalWords).to.equal(235886)
  });

})