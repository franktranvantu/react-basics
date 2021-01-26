const desc = 'I just learned how to create a React node and render it into the DOM.';
const titleId = 'main-title';
const name = 'Frank';

const header = (
  <header>
    {/* This is a comment */}
    <h1 id={titleId}>{name}'s first React Element!</h1>
    <p className="main-desc">{desc}</p>
  </header>
);

ReactDOM.render(header, document.getElementById('root'));