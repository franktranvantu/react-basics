const title = <h1>My first React App</h1>;

const desc = <p>I just learned how to create a React node and render it into the DOM.</p>;

const header = React.createElement(
  'header',
  null,
  title, desc
);

ReactDOM.render(header, document.getElementById('root'));