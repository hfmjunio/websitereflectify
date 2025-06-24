    import { useState } from 'react';
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
    import HloIcon from './assets/hlothere.png';

    export default function StudyPage() {
    const [selectedFlashcard, setSelectedFlashcard] = useState('');


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
                <Link to="/study" className="nav-link active">
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

        {/* Main Content */}
        <main className="main-content study-main">
            {/* Topbar */}
            <header className="topbar">
            <div className="search-box">
                <input type="text" placeholder="Search" />
            </div>
            </header>

            {/* Body Layout */}
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
                <button className="setsbtn">Sets</button>
                <button className="foldersbtn">Folders</button>
                <button className="sharedbtn">Shared Sets</button>
                </div>

                <div className="flashcards">
                <h2>Flashcards</h2>
                <div className="sets">
                    <button
                        className="set1"
                        onClick={() => setSelectedFlashcard('Introduction to Digital Image')}
                    >
                        Introduction to Digital Image
                    </button>
                    <button
                        className="set1"
                        onClick={() => setSelectedFlashcard('BRUH XD')}
                    >
                        BRUH XD
                    </button>
                    </div>

                </div>

                <div className="editandcreate">
                <button className="editbtn">Edit</button>
                <Link to="/createset" className="nav-link">
                    <button className="createbtn">+</button>
                </Link>
                </div>
            </section>

            {/* Right Panel */}
            <section className="study-right">
                <div className="fcmain">
                <div className="fcnocontent">
                    {selectedFlashcard ? (
                        <h2>HERE'S UR FLASHCARD: {selectedFlashcard}</h2>
                    ) : (
                        <>
                        <img src={HloIcon} alt="HelloThere Icon" />
                        <h2>
                            Hello There!
                            <br />
                            Please select your Flashcard to start studying with Reflectify
                        </h2>
                        </>
                    )}
                    </div>
                </div>
            </section>
            </div>
        </main>
        </div>
    );
    }
