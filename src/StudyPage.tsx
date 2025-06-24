import { Link } from 'react-router-dom';
import './StudyPage.css';
import ReflectifyIcon from './assets/reflogo.png';
import DashboardIcon from './assets/unslddashlogo.png';
import ChatIcon from './assets/unsldchatlogo.png';
import StudyIcon from './assets/sldstudylogo.png';
import UnsldStudyIcon from './assets/unsldstudylogo.png';
import CoursesIcon from './assets/unsldcourseslogo.png';
import AssignIcon from './assets/unsldassignlogo.png';
import NotifIcon from './assets/unsldnotiflogo.png';
import LogoutIcon from './assets/unsldlogoutlogo.png';

export default function StudyPage() {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <img src={ReflectifyIcon} alt="Reflectify Logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/studentdashboard" className="nav-link">
                                <img src={DashboardIcon} alt="Dashboard" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/chats" className="nav-link">
                                <img src={ChatIcon} alt="Chat" />
                                <span>Chat</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/createset" className="nav-link">
                                <img src={StudyIcon} alt="Study" />
                                <span>Study</span>
                                </Link>
                        </li>
                        <li>
                            <div className="nav-link">
                                <img src={CoursesIcon} alt="Courses" />
                                <span>Courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="nav-link">
                                <img src={AssignIcon} alt="Assignments" />
                                <span>Assignments</span>
                            </div>
                        </li>
                        <li>
                            <div className="nav-link">
                                <img src={NotifIcon} alt="Notifications" />
                                <span>Notifications</span>
                            </div>
                        </li>
                        <li className="logout">
                            <div className="nav-link">
                                <img src={LogoutIcon} alt="Logout" />
                                <span>Log Out</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Chat Layout */}
            <main className="main-content study-main">
                <header className="topbar">
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                    </div>
                </header>

                {/* Full Chat Split Layout */}
                <div className="study-body">
                    {/* Left Panel */}
                    <section className="study-left">
                        <div className="study-header">
                            <h2 className="study-title">
                                <img src={UnsldStudyIcon} alt="Study Icon" />
                                Study
                            </h2>
                        </div>
                        <div className="sets-folders-sharedsets">
                            <button className='setsbtn'>Sets</button>
                            <button className='foldersbtn'>Folders</button>
                            <button className='sharedbtn'>Shared Sets</button>
                        </div>

                        <div className='flashcards'>
                            <h2>Flashcards</h2>
                        
                        <div className='sets'>
                            <button className='set1'>
                                Introduction to Digital Image
                            </button>

                            <button className='set1'>
                                BRUH XD
                            </button>
                        </div>
                        </div>


                        <div className='editandcreate'>
                    <button className="editbtn">
                    Edit
                    </button>

                    <button className="createbtn">
                    +
                    </button>
                </div>
                    </section>

                    {/* Right Panel */}
                    <section className="chat-right">
                        <div className="chat-header">
                            <h2>Prof. Reyes</h2>
                            <span className="status">Online</span>
                        </div>
                        <div className="chat-conversation">
                            <div className="chat-message from">Don’t forget your deadline today!</div>
                            <div className="chat-message to">Noted po. Thank you!</div>
                        </div>
                        <div className="chat-input">
                            <input type="text" placeholder="Type a message..." />
                            <button>Send</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
