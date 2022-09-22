import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='text-2xl font-semibold'>Football News</h1>

      <APILoadData></APILoadData>
      
    </div>
  );
}



const APILoadData = ()=> 
{
  const loadData = ()=>{

    alert("working?");



  }


  // Button For Calling Data One time
  return <button onClick={loadData} className='bg-blue-400 rounded-sm px-4 mt-2'>Load Data</button>
  
}




export default App;
