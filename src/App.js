import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]  = useState(null);
  const [darkMode,setDarkmode]  = useState(false);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type,
      
    })
    setTimeout(()=>{
      setAlert(null)

    }, 1500);
  }

    const toggleMode = (theme) =>{
      if (theme===null){
      if(mode==='light'){
        setMode('dark'); // setting the mode to dark
        document.body.style.backgroundColor = '#3F4E4F'
        showAlert('Dark Mode','success')
        setDarkmode(true); // setting the dark mode boolean;
      }
      else if(mode==='dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white'
        showAlert('Light Mode','success')
        setDarkmode(false);
      }
    }
      else{
        if(theme==='#F7ECDE' || theme==='#CEE5D0'){
          setDarkmode(false);
          setMode('light');
          document.body.style.backgroundColor = theme
        }
        else{
          setDarkmode(true);
          setMode('dark');
          document.body.style.backgroundColor = theme
        }
      }
      }
    
  return (
    <>
      <Navbar title='Stress Detection' mode = {mode} toggleMode={toggleMode} darkMode = {darkMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Router> */}
        <Routes>
          <Route path='home' element={<TextForm mode = {mode} showAlert={showAlert} darkMode = {darkMode}/>}/>
          <Route path='/' element={<TextForm mode = {mode} showAlert={showAlert} darkMode = {darkMode}/>}/>
          <Route path='about' element={<About  mode =  {mode}  darkMode = {darkMode}/>} />
        </Routes>
      {/* </Router> */}
      {/* <TextForm mode = {mode} showAlert={showAlert} darkMode = {darkMode}/> */}
      {/* <About mode =  {mode}  darkMode = {darkMode}/> */}
      </div>
    </>
  );
}

export default App;
