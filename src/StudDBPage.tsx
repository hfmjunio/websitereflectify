import { Link } from 'react-router-dom';
import './StudDBPage.css';
// Assets
import ReflectifyIcon from './assets/reflogo.png';
import SldDashboardIcon from './assets/slddashlogo.png';
import UnsldChatIcon from './assets/unsldchatlogo.png';
import UnsldStudyIcon from './assets/unsldstudylogo.png';
import UnsldCoursesIcon from './assets/unsldcourseslogo.png';
import UnsldAssignIcon from './assets/unsldassignlogo.png';
import UnsldNotifIcon from './assets/unsldnotiflogo.png';
import UnsldLogoutIcon from './assets/unsldlogoutlogo.png';

export default function StudDBPage() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="studashboard-container">
            {/* Sidebar */}
            <aside className="studbsidebar">
                <div className="logo">
                    <img src={ReflectifyIcon} alt="Reflectify Logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <img src={SldDashboardIcon} alt="Dashboard Icon" />
                            <span>Dashboard</span>
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
                            <img src={UnsldAssignIcon} alt="Assignments Icon" />
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

            {/* Main Content */}
            <main className="studbmain-content">
                {/* Topbar */}
                <header className="studtopbar">
                    <div className="studsearch-box">
                        <input type="text" placeholder="Search" />
                    </div>
                </header>

                {/* Dashboard Content */}
                <section className="studdbcontent">
                    {/* Assignments Card */}
                    <div className="card assignments">
                        <div className="card-header">
                            <h2>Assignments</h2>
                            <span>See all</span>
                        </div>
                        <div className="assign-list">
                            <div className="studassign-box">WMA1 - Activity #2</div>
                        </div>
                    </div>

                    {/* Courses Card */}
                    <div className="carddashcourses">
                        <div className="card-header">
                            <h2>Courses</h2>
                            <Link to="/courses" className="nav-link">
                                <span>See all</span>
                            </Link>
                        </div>
                        <div className="course-list">
                            <div className="course-box">CCS</div>
                            <div className="course-box">WMA1</div>
                            <div className="course-box">R2</div>
                            <div className="course-box">WS</div>
                        </div>
                    </div>

                    {/* Schedules Card */}
                    <div className="card schedules">
                        <div className="card-header">
                            <h2>Courses Schedule</h2>
                        </div>
                        <p>{currentDate}</p>
                        <div className="sched-list">
                            <div className="sched-box">10:00 AM CCS</div>
                            <div className="sched-box">10:00 AM WMA1</div>
                            <div className="sched-box">10:00 AM R2</div>
                            <div className="sched-box">10:00 AM WS</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
