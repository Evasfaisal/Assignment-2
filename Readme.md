1--What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :
The getElementById      : method is a reliable way to access a specific element by its unique ID. Returns a single Element object.

getElementsByClassName  : is a Js DOM method that returns all HTML elements that have a specific class name.

querySelector           : Selects the first HTML element that matches a specified CSS selector.

querySelectorAll        : Selects all HTML elements that match a specified CSS selector.


2--How do you create and insert a new element into the DOM?

Creating and inserting a new element into the (DOM) in JavaScript by two steps first one is document.createElement() method to create a new element node. using tag name of the element you want to create ("p")then Inserting the element into the DOM and creat appendChild() then push new element inside appendChild()method.


3--What is Event Bubbling and how does it work?

Event Bubbling occurs when an event that starts on a child element starts to bubble up to its parent elements and so on until it reaches the root element

4----What is Event Delegation in JavaScript? Why is it useful?

JavaScript’s Event Delegation approach lets you manage events more effectively by having one event listener assigned to a parent element rather than having separate listeners attached to each of the child components. its usefull becouse of When we working with a large number of elements  that are generated dynamically


5---What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() deals with the default browser behavior for an event and stopPropagation() deals with the flow of the event through the DOM hierarchy.