import { expect } from'chai';
import Node from '../lib/Node';

describe('NODE', () => {
 let node;

 beforeEach(() => {
   node = new Node('p')
 });

 it('should exist now', () => {
  expect(node).to.exist;
 })

 it('should take a letter as an argument and assign it to a property', () => {
  expect(node.letter).to.equal('p');
 })

 it('should default the end to false', () => {
  expect(node.end).to.equal(false);
 })

 it('should default children to false', () => {
  expect(node.children).to.equal(null);
 })
})