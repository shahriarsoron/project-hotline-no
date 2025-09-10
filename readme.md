## Written questions
---
*1.*  What is the difference between *getElementById, getElementsByClassName, and querySelector / querySelectorAll*?

## Answer
-> Since, every distict element has different ID, we use getElementById inorder to find the distinct element, thus we get only one returned element with this.

We use getElementsByClass to get the returned HTMLlist of all the elements under a distinct class name. We use this very often. 

We use queryselector to get the returned node of a single element under whichever parameter we are bringing it. If we use querySelector('class') then we will get the node of the first element that used the class.

We use querySelectorALL to get the nodelist of multiple elements either belonging to a same class or id or tag or whichever parameter we define.

---

---

*2.* How do you *create and insert a new element into the DOM*?
## Answer
-> We use the .CreateElement() function in javascript to create a childnode and then we add the child node to the parentnode by parentnode.append(childnode).

---

---

*3.* What is *Event Bubbling* and how does it work?
## Answer
-> When the childnodes pass along the command to parent node and they perform the function altogether then it is Event Bubbling.
It works like this childnode.parentnode.parentnode.......

---

---

*4.* What is *Event Delegation* in JavaScript? Why is it useful?
## Answer
-> When we don't assign the eventlistener or any other function to a chaildnode rather we assign it to it's parentnode so that it works through event bubbling then it is called event delegation.
In this way we don't have to add a same function to every childnode rather we can just add it to the parentnode once.

---

---

*5.* What is the difference between *preventDefault() and stopPropagation()* methods?
## Answer
-> The stop Propagation stops EventBubbling where the preventDefault() blocks the function it is assigned to.

---
