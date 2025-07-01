    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './NotifPage.css';

    import ReflectifyIcon from './assets/reflogo.png';
    import DashboardIcon from './assets/unslddashlogo.png';
    import ChatIcon from './assets/unsldchatlogo.png';
    import StudyIcon from './assets/unsldstudylogo.png';
    import CoursesIcon from './assets/unsldcourseslogo.png';
    import AssignIcon from './assets/unsldassignlogo.png';
    import NotifIcon from './assets/sldnotiflogo.png';
    import UnsldNotifIcon from './assets/unsldnotiflogo.png';
    import LogoutIcon from './assets/unsldlogoutlogo.png';


    export default function NotifPage() {
    const [notifications] = useState([
        { id: 1, message: 'New flashcard set shared with you!', time: '2 mins ago' },
        { id: 2, message: 'Your password was changed.', time: '1 hour ago' },
        { id: 3, message: 'Reminder: Study session at 5 PM.', time: 'Yesterday' },
    ]);

    return (
        <div className="notifpage-container">
        {/* Sidebar */}
        <aside className="notif-sidebar">
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
                <Link to="/study" className="nav-link">
                    <img src={StudyIcon} alt="Study" />
                    <span>Study</span>
                </Link>
                </li>
                <li>
                <Link to="/courses" className="nav-link">
                    <img src={CoursesIcon} alt="Courses" />
                    <span>Courses</span>
                </Link>
                </li>
                <li>
                <Link to="/assignments" className="nav-link">
                    <img src={AssignIcon} alt="Assignments" />
                    <span>Assignments</span>
                </Link>
                </li>
                <li>
                <div className="nav-link active">
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

        {/* Main Content */}
        <main className="notif-main">
            {/* Topbar */}
            <header className="notif-topbar">
            <div className="notif-search-box">
                <input type="text" placeholder="Search" />
            </div>
            </header>

            {/* Body */}
            <div className="notif-body">
            {/* Left Panel */}
            <section className="notif-left">
                <div className="notif-header">
                <h2 className="notif-title">
                    <img src={UnsldNotifIcon} alt="Notif Icon" />
                    Notifications
                </h2>
                </div>

                <div className="notif-list">
                {notifications.length === 0 ? (
                    <p className="no-notif">You're all caught up!</p>
                ) : (
                    notifications.map((notif) => (
                    <div className="notif-card" key={notif.id}>
                        <p className="notif-msg">{notif.message}</p>
                        <span className="notif-time">{notif.time}</span>
                    </div>
                    ))
                )}
                </div>
            </section>

            {/* Right Panel */}
            <section className="notif-right">
                <div className="notif-illustration">
                <h3>Stay updated!</h3>
                <p>Check here often to see all your activity alerts.</p>
                </div>
            </section>
            </div>
        </main>
        </div>
    );
    }
