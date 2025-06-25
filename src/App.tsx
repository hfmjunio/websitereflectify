import { Route, Routes } from "react-router-dom";
import SignupPage from "./SignupPage";
import WcPage from "./WcPage";
import LoginPage from "./LoginPage";
import StudDBPage from "./StudDBPage";
import ChatsPage from "./ChatPage";
import CreatesetPage from "./CreatesetPage";
import StudyPage from "./StudyPage";
import CoursesPage from "./CoursesPage";


function App() {
  return (
<>
  
    <Routes>
      <Route path="/" element={<WcPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/studentdashboard" element={<StudDBPage />} />
      <Route path="/chats" element={<ChatsPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/createset" element={<CreatesetPage />} />
      <Route path="/courses" element={<CoursesPage />} />
    </Routes>
    </>
    
  );
}

export default App;