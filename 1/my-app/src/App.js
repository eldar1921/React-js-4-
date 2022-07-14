import logo from './logo.svg';
import './App.css';

//dz-1
function AboutUs (props){
  return (
    <><h1>{props.title}</h1></>
  )
}

function Header(){
  return (
    <div>
      <ul>
        <li>main page</li>
        <li>main page</li>
        <li>main page</li>
      </ul>
    </div>
  )
}

function Content (){
  return (
    <>
      <h1>hello world</h1> 
      <p>lorem eger
        ge rg 
        gegre</p>
      <button>say hello</button>
    </>
  )
}

function User (props){

  return (
    <div>{props.name} {props.lastName}</div>
  )
}

function App() {
  return (
    <div className="container">
        <AboutUs title="HOME"/>
        <AboutUs title="WORK"/>
        <AboutUs title="REACT"/>
        --------------------------
        <User name="Eldar" lastName="Abdykulov"/>
        <User name="Adilet" lastName="Irgeshbaev"/>
        <User name="Aziret" lastName="Bakasov"/>
        ------------------------
        <Header/>
        <Content/>
    </div>
  );
}

export default App;
