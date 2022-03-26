import React from 'react';
import './Answer.css';
const Answer = () => {
    return (
        <div >
            <h1 className='ans-head'>Answer to Question</h1>
            <div className='answer-container'>
                <div className='first-answer'>
                    <h2>How does react work?</h2>
                    <p>
                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development.One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.You may have knew that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. A state is a JavaScript object that represents a part of a component.It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications. A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.That how react work.This is how react normally works. </p>
                </div>
                <div className='second-answer'>
                    <h2>How does useState work?</h2>
                    <p><small className='small-text'>useState</small> is a Hook that allows you to have state variables in functional components.Calling React.useState inside a function component generates a single piece of state associated with that component.Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.useState takes the initial value of the state variable as an argument.The initial value will be assigned only on the initial render.In subsequent renders, the argument of the useState Hook will be ignored and the current value will be retrieved.Using useState alone won't work because its argument is used the first time only -not every time the property change.Usually, you’ll use array destructuring to simplify the code.This way, you can use the state variable in the functional component.</p>
                </div>
            </div>
        </div>
    );
};

export default Answer;