import { Link } from 'react-router-dom';
import './AssignPage.css';
import ReflectifyIcon from './assets/reflogo.png';
import UnsldDashboardIcon from './assets/unslddashlogo.png';
import UnsldChatIcon from './assets/unsldchatlogo.png';
import UnsldStudyIcon from './assets/unsldstudylogo.png';
import UnsldCoursesIcon from './assets/unsldcourseslogo.png';
import SldAssignIcon from './assets/sldassignlogo.png';
import UnsldNotifIcon from './assets/unsldnotiflogo.png';
import UnsldLogoutIcon from './assets/unsldlogoutlogo.png';

export default function AssignPage() {

    return (
        <div className="assign-container">
            {/* Sidebar */}
            <aside className="assign-sidebar">
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
                            <img src={UnsldCoursesIcon} alt="Courses Icon" />
                            <span>Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/assign" className="nav-link">
                            <img src={SldAssignIcon} alt="Assignments Icon" />
                            <span>Assignments</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/notif" className="nav-link">
                            <img src={UnsldNotifIcon} alt="Notifications Icon" />
                            <span>Notifications</span>
                            </Link>
                        </li>
                        <li className="logout">
                            <img src={UnsldLogoutIcon} alt="Logout Icon" />
                            <span>Log Out</span>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <main className="assign-main">
                <header className="assign-topbar">
                    <div className="assign-search-box">
                        <input type="text" placeholder="Search" />
                    </div>
                </header>

            <section className="assign-content">
                <div className='assign-header'>
                    <h1>Assignments</h1>
                    <hr></hr>
                </div>


                <div className="upcom-pastd-comp">
                <button className="upcombtn">Upcoming</button>
                <button className="pastdbtn">Past Due</button>
                <button className="compbtn">Completed</button>
                </div>

                <div className="assignlists">
                    hmmm
                </div>
                </section>
            </main>
        </div>
    );
}
