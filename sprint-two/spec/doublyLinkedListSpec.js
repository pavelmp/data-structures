describe('doublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

it("should add a bunch of nodes", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    expect(linkedList.contains(7)).to.equal(true);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(23)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it("should add a value before the head", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToHead(10);
    linkedList.addToHead(11);
    linkedList.addToHead(12);
    linkedList.addToHead(13);
    expect(linkedList.removeHead()).to.equal(13);
    expect(linkedList.removeTail()).to.equal(6);

    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
    expect(linkedList.contains(10)).to.equal(true);
    expect(linkedList.contains(11)).to.equal(true);
    expect(linkedList.contains(12)).to.equal(true);
    expect(linkedList.contains(13)).to.equal(false);
  });

  it("should retturn the value removed from tail", function(){
    linkedList.addToHead(11);
    linkedList.addToTail(12);
    linkedList.addToHead(10);
    linkedList.addToTail(13);
    expect(linkedList.removeTail()).to.equal(13);
    expect(linkedList.removeHead()).to.equal(10);
     expect(linkedList.removeTail()).to.equal(12);
    expect(linkedList.removeHead()).to.equal(11);
  });
  // add more tests here to test the functionality of linkedList
});
