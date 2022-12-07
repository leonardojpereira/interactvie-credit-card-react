import Card from './components/Card';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icons from './components/Icons'


function App() {
  return (
      <div>
        <div className='background'/>
        <Card/>
        <Icons/>
        <ToastContainer />
      </div>
  );
}

export default App;
