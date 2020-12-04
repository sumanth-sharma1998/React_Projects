// import logo from './logo.svg';
import './App.css';
// import {FunctionComponentCheck,FunctionComponentCheckWithLambda} from './Components/FunctionalComponent'
// import {ClassComponent} from './Components/ClassComponents'
// import {PropsTestFn,PropsTestClass} from './Components/PropsTest';
// import {StateTest} from './Components/StateTest'
// import {DestructuringPropsFn,DestructuringPropsClass,DestructuringPropsFnInParameter} from './Components/DestructuringProps'
// import {DestructuringPropsFnInBody,DestructuringPropsClassInRender} from './Components/DestructuringProps'
// import {EventHandlingClass,EventHandlingFnWithVariable} from './Components/EventHandling'
// import {EventBinding} from './Components/EventBinding'
// import {ParentComponent} from './Components/ChildDataToParent/ParentComponent'
// import {ConditionalRendering} from './Components/ConditionalRendering'
import {ListRenderingBasic} from './Components/Lists/ListRendering'
import {ListObjectRenderingBasic} from './Components/Lists/ListObjectRendering'


function App() {
  return (
    <div className="App">
      <ListRenderingBasic></ListRenderingBasic>
      <ListObjectRenderingBasic></ListObjectRenderingBasic>

      {/* <ConditionalRendering></ConditionalRendering> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <EventBinding></EventBinding> */}

      {/* <EventHandlingClass></EventHandlingClass>
      <br></br>
      <EventHandlingFnWithVariable></EventHandlingFnWithVariable> */}

      {/* <StateTest></StateTest> */}
      {/* <DestructuringPropsFnInParameter name="DestructuringPropsFnInParameter"></DestructuringPropsFnInParameter>
      <DestructuringPropsFnInBody name="DestructuringPropsFnInBody"></DestructuringPropsFnInBody>
      <DestructuringPropsFn name="DestructuringPropsFn"></DestructuringPropsFn>
      <DestructuringPropsClass name="DestructuringPropsClass"></DestructuringPropsClass>
      <DestructuringPropsClassInRender name="DestructuringPropsClassInRender"></DestructuringPropsClassInRender> */}

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
