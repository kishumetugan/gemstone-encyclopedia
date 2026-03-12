const { useState } = React;

const EDIT_PASSWORD = '3347';

// Icons as SVG
const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
    </svg>
);

const XIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const GlobeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const UploadIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
);

// Language translations
const LANG = {
    he: {
        title: 'אנציקלופדיית אבני חן',
        search: 'חפש אבן חן...',
        spiritual: '🌟 סגולות רוחניות',
        physical: '💎 תכונות פיזיות',
        healing: '🌿 שימושים בריפוי',
        care: '✨ טיפול וניקוי',
        history: '📜 היסטוריה',
        hoshen: '✡️ מקורות ביהדות',
        color: 'צבע',
        hardness: 'קשיות (מוהס)',
        back: 'חזרה לרשימה',
        noImage: 'אין תמונה'
    },
    en: {
        title: 'Gemstone Encyclopedia',
        search: 'Search gemstone...',
        spiritual: '🌟 Spiritual Properties',
        physical: '💎 Physical Properties',
        healing: '🌿 Healing Uses',
        care: '✨ Care & Cleansing',
        history: '📜 History',
        hoshen: '✡️ Jewish Sources',
        color: 'Color',
        hardness: 'Hardness (Mohs)',
        back: 'Back to List',
        noImage: 'No Image'
    }
};

// Section Component
const Section = ({ title, content }) => (
    <div className="section">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);

// Main App Component
const GemstoneEncyclopedia = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('he');
    const [selectedGem, setSelectedGem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const [clickTimeout, setClickTimeout] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleTitleClick = () => {
        setClickCount(prev => prev + 1);
        
        if (clickTimeout) clearTimeout(clickTimeout);
        
        const timeout = setTimeout(() => {
            if (clickCount + 1 === 3) {
                setShowPasswordPrompt(true);
            }
            setClickCount(0);
        }, 500);
        
        setClickTimeout(timeout);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordInput === EDIT_PASSWORD) {
            setEditMode(true);
            setShowPasswordPrompt(false);
            setPasswordInput('');
        } else {
            alert('סיסמה שגויה');
            setPasswordInput('');
        }
    };

    const filteredGems = GEMSTONES_DATA.filter(gem =>
        gem.names[selectedLanguage].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const t = LANG[selectedLanguage];

    return (
        <div>
            {/* Password Modal */}
            {showPasswordPrompt && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>🔒 מצב עריכה</h3>
                        <p>למפתחים בלבד</p>
                        <form onSubmit={handlePasswordSubmit}>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                placeholder="הכנס סיסמה"
                                autoFocus
                            />
                            <div className="modal-buttons">
                                <button type="submit" className="modal-confirm">אישור</button>
                                <button 
                                    type="button" 
                                    className="modal-cancel"
                                    onClick={() => {
                                        setShowPasswordPrompt(false);
                                        setPasswordInput('');
                                    }}
                                >
                                    ביטול
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="header">
                <div className="header-content">
                    <div style={{width: '6rem'}}>
                        {editMode && (
                            <button className="btn btn-exit" onClick={() => setEditMode(false)}>
                                <XIcon size={16} />
                                יציאה
                            </button>
                        )}
                    </div>
                    <h1 onClick={handleTitleClick}>{t.title}</h1>
                    <button 
                        className="btn"
                        onClick={() => setSelectedLanguage(selectedLanguage === 'he' ? 'en' : 'he')}
                    >
                        <GlobeIcon />
                        {selectedLanguage === 'he' ? 'English' : 'עברית'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="container">
                {!selectedGem ? (
                    <>
                        {/* Search */}
                        <div className="search-container">
                            <span className="search-icon"><SearchIcon /></span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder={t.search}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{direction: selectedLanguage === 'he' ? 'rtl' : 'ltr'}}
                            />
                        </div>

                        {/* Gem List */}
                        <div className="gem-list">
                            {filteredGems.map(gem => (
                                <div
                                    key={gem.id}
                                    className="gem-item"
                                    onClick={() => setSelectedGem(gem)}
                                    style={{direction: selectedLanguage === 'he' ? 'rtl' : 'ltr'}}
                                >
                                    <div className="gem-image">
                                        {gem.image ? (
                                            <img src={gem.image} alt={gem.names[selectedLanguage]} />
                                        ) : (
                                            <div className="gem-image-placeholder">{t.noImage}</div>
                                        )}
                                    </div>
                                    <div className="gem-name">
                                        <h3>{gem.names[selectedLanguage]}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Detail View */
                    <div className="detail-view">
                        <div className="detail-image">
                            {selectedGem.image ? (
                                <img src={selectedGem.image} alt={selectedGem.names[selectedLanguage]} />
                            ) : (
                                <div style={{textAlign: 'center', color: '#a8a29e'}}>
                                    <UploadIcon />
                                    <p>{t.noImage}</p>
                                </div>
                            )}
                            <button className="close-btn" onClick={() => setSelectedGem(null)}>
                                <XIcon />
                            </button>
                        </div>

                        <div className="detail-content" style={{direction: selectedLanguage === 'he' ? 'rtl' : 'ltr'}}>
                            <h2 className="detail-title">{selectedGem.names[selectedLanguage]}</h2>

                            <div className="detail-meta">
                                <div>
                                    <span>{t.color}: </span>
                                    <span>{selectedGem.color[selectedLanguage]}</span>
                                </div>
                                <div>
                                    <span>{t.hardness}: </span>
                                    <span>{selectedGem.hardness}</span>
                                </div>
                            </div>

                            <div className="sections">
                                <Section 
                                    title={t.spiritual} 
                                    content={selectedGem.content[selectedLanguage].spiritual} 
                                />
                                <Section 
                                    title={t.physical} 
                                    content={selectedGem.content[selectedLanguage].physical} 
                                />
                                <Section 
                                    title={t.healing} 
                                    content={selectedGem.content[selectedLanguage].healing} 
                                />
                                <Section 
                                    title={t.care} 
                                    content={selectedGem.content[selectedLanguage].care} 
                                />
                                <Section 
                                    title={t.history} 
                                    content={selectedGem.content[selectedLanguage].history} 
                                />
                                {selectedGem.content[selectedLanguage].hoshen && (
                                    <Section 
                                        title={t.hoshen} 
                                        content={selectedGem.content[selectedLanguage].hoshen} 
                                    />
                                )}
                            </div>

                            <button className="back-btn" onClick={() => setSelectedGem(null)}>
                                {t.back}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Render the app
ReactDOM.render(<GemstoneEncyclopedia />, document.getElementById('root'));
```

---

## ✅ זהו! סיימנו!

**עכשיו יש לך את כל הקבצים:**
- ✅ `index.html` - דף ראשי
- ✅ `css/styles.css` - עיצוב
- ✅ `js/data.js` - מידע על האבנים
- ✅ `js/app.js` - הלוגיקה

---

## 🚀 איך לראות את האפליקציה:

1. **כנס ל-Settings** של ה-Repository
2. לחץ **Pages** (בתפריט שמאל)
3. תחת "Branch" בחר **main**
4. לחץ **Save**
5. תחכה דקה ותקבל קישור:
```
   https://kishumetugan.github.io/gemstone-encyclopedia/
