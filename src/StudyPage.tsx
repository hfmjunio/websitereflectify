    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './StudyPage.css';
    import ReflectifyIcon from './assets/reflogo.png';
    import SldDashboardIcon from './assets/slddashlogo.png';
    import UnsldChatIcon from './assets/unsldchatlogo.png';
    import UnsldStudyIcon from './assets/unsldstudylogo.png';
    import UnsldCoursesIcon from './assets/unsldcourseslogo.png';
    import UnsldAssignIcon from './assets/unsldassignlogo.png';
    import UnsldNotifIcon from './assets/unsldnotiflogo.png';
    import UnsldLogoutIcon from './assets/unsldlogoutlogo.png';
    import DeleteLogo from './assets/deletelogo.png';
    import ArrangeLogo from './assets/arrangelogo.png';

    interface Flashcard {
    id: number;
    term: string;
    definition: string;
    }

    export default function StudyPage() {
    const [term, setTerm] = useState('');
    const [definition, setDefinition] = useState('');
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    const handleAddCard = () => {
        if (term.trim() && definition.trim()) {
        const newCard: Flashcard = {
            id: Date.now(),
            term,
            definition,
        };
        setFlashcards([...flashcards, newCard]);
        setTerm('');
        setDefinition('');
        }
    };

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
                <img src={UnsldCoursesIcon} alt="Courses Icon" />
                <span>Courses</span>
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

        {/* Main Content */}
        <main className="main-content">
            <header className="topbar">
            <div className="search-box">
                <input type="text" placeholder="Search" />
            </div>
            </header>

            <section className="study-container">
            <div className="study-header">
                <h1>New Study Set</h1>
            
            </div>
            <div className="settitle-box">

            <input type="text" placeholder="Title" />
            </div>
            

        


            <section className="card-meta">
                    {/* Left: Description */}
                    <div className="meta-left">
                        <textarea id="description" placeholder="Add a description for your study set..." />
                    </div>

                    {/* Right: Folder + Share */}
                    <div className="meta-right">
                        <div className="form-group">
                        <label htmlFor="folder">Select Folder:</label>
                        <select id="folder">
                            <option value="">None</option>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="custom">Custom Folder</option>
                        </select>
                        </div>

                        <div className="form-group">
                        <label htmlFor="share">Share With:</label>
                        <input
                            id="share"
                            type="text"
                            placeholder="Enter email or username"
                        />
                        </div>
                    </div>
                    </section>

                    <button className="uploaddocu-btn" onClick={handleAddCard}>
                        <div className='uplogo'><img src={ReflectifyIcon} alt="Reflectify Logo" />
</div>
                    Upload Document
                <p>(Supports .pptx, .pdf, .doc, .docx, and .txt)</p>
                </button>

        <section className='termndesc'>
            <div className="flashcard-form">

                <div className='delandarr'>
                    <button className="delete-btn">
                    <img src={DeleteLogo} alt="Delete Logo" />
                    </button>

                    <button className="arrange-btn">
                    <img src={ArrangeLogo} alt="Arrange Logo" />
                    </button>
                </div>
                
                <input
                type="text"
                placeholder="Term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                />
                <input
                type="text"
                placeholder="Definition"
                value={definition}
                onChange={(e) => setDefinition(e.target.value)}
                />


                <div className='addbtn'>
                <button className="add-flashcard-btn" onClick={handleAddCard}>
                +
                </button>
                </div>
            </div>
        </section>

            <div className="flashcards-grid">
                {flashcards.map((card) => (
                <div key={card.id} className="flashcard">
                    <h3>{card.term}</h3>
                    <p>{card.definition}</p>
                </div>
                ))}

                
            </div>
                <div className='savebtn'>
                <button className="save-btn" onClick={handleAddCard}>
                Save
                </button>
                </div>
            </section>
        </main>
        </div>
    );
    }
