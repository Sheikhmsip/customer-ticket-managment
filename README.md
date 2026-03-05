1. What is JSX, and why is it used?
JSX stands for JavaScript XML. It is a syntax used in React that allows us to write HTML-like code inside JavaScript.
It makes React code easier to read and understand because we can design the UI in a way that looks similar to HTML.

2. What is the difference between State and Props?
Both State and Props are used to store data in React, but they are used in different ways.
Props
Props are used to pass data from one parent component to another child component
State
State is used to store data that can change inside a component.

3. What is the useState hook, and how does it work?
useState is a React Hook that allows us to add state to functional components.
Before hooks, state was mostly used in class components. But now with useState, functional components can also manage data.

4. How can you share state between components in React?
To share state between components, we usually lift the state up to the closest common parent component.
The parent component keeps the state, and then passes the data to child components using props.

5. How is event handling done in React?
Event handling in React is similar to HTML but uses camelCase syntax and we pass a function instead of a string.