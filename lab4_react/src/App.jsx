import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LightBulb from "./components/LightBulb"
import Toggle from "./components/Toggle"
import Counter from "./components/Counter"
import Parent from "./components/Parent";


//main finction for home page
function Home() {

  const navigate = useNavigate();

  return (

    <div className="flex gap-4">
      <h1>Lab 4 (REACT)</h1>

      <button onClick={() => navigate("/lab41")}>Go to lab4.1</button>

      <button onClick={() => navigate("/lab42")}>Go to lab4.2</button>

      <button onClick={() => navigate("/lab43")}>Go to lab4.3</button>

      <button onClick={() => navigate("/lab44")}>Go to lab4.4</button>
      <button onClick={() => navigate("/lab45")}>Go to lab4.5</button>
    

    </div>
  );
}

function Lab41()
{
  return(
    <>
    <LightBulb />
    </>
  );
}



function Lab42()
{
  return(
    <>
    <Toggle />
    </>
  );
}

function Lab43()
{
  return(
    <>
    <Parent />
    </>
  );
}

function Lab44()
{
  const navigate = useNavigate();

  return (

    <div className="flex gap-4">
      

      <button onClick={() => navigate("/")}>Go back to home page</button>

      <button onClick={() => navigate("/about")}>Go to about page</button>

      <button onClick={() => navigate("/contactus")}>Go to contact US page</button>

      
    

    </div>
  );
}

function Lab45()
{
  return(
    <>
    <Counter />
    </>
  );
}


//this is for lab4.4
function About()
{
  return(
   <>
   <h1>this is about page</h1>
   </> 
  );

}

//this is also for lab 4.4
function Contact()
{
  return(
    <h1>this is contact us page</h1>
  );
}



//we do routing in this function
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab41" element={<Lab41 />} />
        <Route path="/lab42" element={<Lab42 />} />
        <Route path="/lab43" element={<Lab43 />} />
        <Route path="/lab44" element={<Lab44 />} />
        <Route path="/lab45" element={<Lab45 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        
      </Routes>


    </BrowserRouter>
  );
}

export default App;




