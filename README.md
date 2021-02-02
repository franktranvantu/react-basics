When you create a class component that extends from React.Component, any custom methods you create are not bound to the component by default. 

You need to bind your custom methods, so that this refers to the component instance. 

In this section, we'll go over the ways to bind the this context in React.