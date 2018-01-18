class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
   this.count = 0;
   this.storage = {}; 
   this.dequeuePos = 0;
   this.enqueuePos = 0;
 }

  enqueue(value) {
   this.storage[this.enqueuePos] = value; 
   this.count++;  
   this.enqueuePos++;
  }

  dequeue() {
  	if (this.count > 0) {
  	 var temp = this.storage[this.dequeuePos];
  	 delete this.storage[this.dequeuePos];
  	 this.count--; 
  	 this.dequeuePos++; 
  	 return temp;
  	}
  }

  size() {
   return this.count;
  }
}
