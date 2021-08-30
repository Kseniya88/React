import './App.scss';

const App = (props) => {

  const myName = "Kseniya";

  return (
    <div className="App">
      <header className="App-header">
        <p>
        My First React App
        </p>
        <Message myName={myName}/>
      </header>
    </div>
  );
}

function Message ({myName}) {
  return (
    <h3>Hello, {myName}! </h3>
  );
}

export default App;
