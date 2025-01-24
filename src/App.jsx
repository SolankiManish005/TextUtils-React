import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert(" Dark mode has been Enabled", "success")
      //  document.title = "TextUtlis - Dark Mode"

      //  setInterval(() => {
      //     document.title = "TextUtlis is Amazing Mode";
      //  }, 2000);

      //  setInterval(() => {
      //     document.title = "Install TextUtils Now"
      //  }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode hase been Enabled", "success")
      // document.title = "TextUtlis - Light Mode"
    }
  }

  const showAlert = (message , type)=>{
      setAlert({
        msg:  message,
        type: type
      })
  }

  setTimeout(() => {
    setAlert(null)
  }, 1500);

  return (
    <>
      <BrowserRouter>
        <Navbar title = "TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Navbar/> */}
        <div className="container my-3">
          <Routes>
          <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />} />
            <Route path="About" element={<About mode={mode}/> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
