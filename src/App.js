//import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction';

const Title = () => <h1> บัญชีรายรับ-รายจ่าย </h1>
const Description = () => <p> บันทึกข้อมูลประจำวันของฉัน </p>
const Notice = () => {
  return (
    <div>
      <p> หมายเหตุ: </p>
      <ul>
        <li> จดเอาไว้กันลืม </li>
        <li> ต้องมีระเบียบ </li>
      </ul>
    </div>
  );
}

function App() {
  const design = {color: "red", fontSize: "1.5rem"}
  return (
    <div className='container'>
      <Title />
      <Description />
      <p style={design}> Tontan Tomato </p>
      <Notice />
      < Transaction />
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>React Practice</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
