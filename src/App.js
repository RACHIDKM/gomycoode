
import './App.css';


function Card(props) {

  return (<div className='contenaire' >
    <div className='image'></div>
    <h1>{props.name}</h1>
    <h4>{props.age}</h4>
    <p>{props.number}</p>
    <p>{props.gmail}
    </p>
  </div>
  )

}

function App() {
  return (
    <div className='body'>
      <Card name="rachid" age="21 ans" number="0000000000" gmail="rkarym7@gmail.com" />
      <Card name="omar" age="20 ans" number="8888888888" gmail="trsjr@gmail.com" />
      <Card name="maraim" age="36 ans" number="4444444444" gmail="yulr57td7@gmail.com" />
      <Card name="hafsa" age="24" number="2454223537" gmail="ktydsrd@gmail.com" />

    </div>

  );
}

export default App;
