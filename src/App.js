
import './App.css';
import Jimnasians from './component/Jimnasians/Jimnasians';
import Navbar from './component/Navbar/Navbar';
import Question from './component/Question/Question';



function App() {
  return (
    <div className='App' >
      <Navbar></Navbar>
      <Jimnasians></Jimnasians>
      <Question></Question>
     
    </div>
  );
}

export default App;
