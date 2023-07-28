import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {  
  return (
    <>
      <HomePage /> 
      <ToastContainer />
    </>
  );
};

export default App;
