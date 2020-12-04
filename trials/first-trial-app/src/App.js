// import logo from './logo.svg';
import './App.css';
// import {FunctionComponentCheck,FunctionComponentCheckWithLambda} from './Components/FunctionalComponent'
// import {ClassComponent} from './Components/ClassComponents'
// import {PropsTestFn,PropsTestClass} from './Components/PropsTest';
import {StateTest} from './Components/StateTest'


function App() {
  return (
    <div className="App">
      <StateTest></StateTest>



      {/* <PropsTestFn name="Sumanth"/>
      <PropsTestFn name="Amruth"/>
      <PropsTestClass name="Achyuth"/> */}

      {/* <FunctionComponentCheck/>
      <FunctionComponentCheckWithLambda/>
      <ClassComponent/> */}

      {/* <a>Hello Sumanth</a> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
