import { Route, Routes } from "react-router-dom";
import SignupPage from "./SignupPage";
import WcPage from "./WcPage";

function App() {
  return (
   <>
  
    <Routes>
      <Route path="/" element={<WcPage />} />

      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </>
    
  );
}

export default App;
