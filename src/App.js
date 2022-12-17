import "@fontsource/poppins";
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div 
      className="flex animate-pulse m-4 justify-center items-center p-2 rounded-xl w-fit h-10 absolute bg-orange-500 text-white">
       Web In Development
      </div>
      <Home/>
    </div>
  );
}

export default App;
