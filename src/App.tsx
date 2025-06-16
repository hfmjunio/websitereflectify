import { Route, Routes } from "react-router-dom";
import SignupPage from "./SignupPage";
import WcPage from "./WcPage";
import LoginPage from "./LoginPage";

function App() {
  return (
   <>
  
    <Routes>
      <Route path="/" element={<WcPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

    </Routes>
    </>
    
  );
}

export default App;
