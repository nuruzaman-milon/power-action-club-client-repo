import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog-container'>
            <h3 className='blog'>Blogs Here</h3>
             <div>
                <p><strong>1. How does react works?</strong></p>
                <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript. Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.React is written using JSX instead of standard JavaScript to simplify components and keep code clean.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.</p>
             </div>

             {/* blog-2 */}
             <div>
                <p><strong>2. Props vs State</strong></p>
                <p>
                    -> Props are read-only. State changes can be asynchronous.<br/>
                    -> 	Props are immutable. State is mutable.<br/>
                    -> Props allow you to pass data from one component to other components as an argument. State holds information about the components.<br/>
                    -> Props can be accessed by the child component. State cannot be accessed by child components.<br/>
                    -> Props are used to communicate between components.  components.	States can be used for rendering dynamic changes with the component.<br/>
                    -> Stateless component can have Props. Stateless components cannot have State.
                </p>
             </div>

             <div>
                <p><strong>3. What does useEffect do?</strong></p>
                <p>
                The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. This is not what we want. There are several ways to control when side effects run.We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
                </p>
             </div>

        </div>
    );
};

export default Blog;