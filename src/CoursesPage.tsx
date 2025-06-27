import { Link } from 'react-router-dom';
import './CoursesPage.css';
import ReflectifyIcon from './assets/reflogo.png';
import UnsldDashboardIcon from './assets/unslddashlogo.png';
import UnsldChatIcon from './assets/unsldchatlogo.png';
import UnsldStudyIcon from './assets/unsldstudylogo.png';
import SldCoursesIcon from './assets/sldcourseslogo.png';
import UnsldAssignIcon from './assets/unsldassignlogo.png';
import UnsldNotifIcon from './assets/unsldnotiflogo.png';
import UnsldLogoutIcon from './assets/unsldlogoutlogo.png';

export default function CoursesPage() {

    return (
        <div className="courses-container">
            {/* Sidebar */}
            <aside className="courses-sidebar">
                <div className="logo">
                    <img src={ReflectifyIcon} alt="Reflectify Logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/studentdashboard" className="nav-link">
                            <img src={UnsldDashboardIcon} alt="Dashboard Icon" />
                            <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/chats" className="nav-link">
                                <img src={UnsldChatIcon} alt="Chat Icon" />
                                <span>Chat</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/study" className="nav-link">
                            <img src={UnsldStudyIcon} alt="Study Icon" />
                            <span>Study</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses" className="nav-link">
                            <img src={SldCoursesIcon} alt="Courses Icon" />
                            <span>Courses</span>
                            </Link>
                        </li>
                        <li>
                            <img src={UnsldAssignIcon} alt="Assignments Icon" />
                            <span>Assignments</span>
                        </li>
                        <li>
                            <img src={UnsldNotifIcon} alt="Notifications Icon" />
                            <span>Notifications</span>
                        </li>
                        <li className="logout">
                            <img src={UnsldLogoutIcon} alt="Logout Icon" />
                            <span>Log Out</span>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <main className="courses-main">
                <header className="courses-topbar">
                    <div className="courses-search-box">
                        <input type="text" placeholder="Search" />
                    </div>
                </header>

                <section className="courses-scontent">
                    

                    {/* Courses Card */}
                    <div className="card-courses">
                        <div className="cardcourse-header">
                            <h2>Courses</h2>
                        </div>
                        <hr></hr>
                        <div className="courselists">

                            <div className="course-boxs">CCS</div>
                            <div className="course-boxs">WMA1</div>
                            <div className="course-boxs">R2</div>
                            <div className="course-boxs">WS</div>

                        </div>
                    </div>

                    
                </section>
            </main>
        </div>
    );
}
