const GEMSTONES_DATA = [
    {
        id: 1,
        names: { he: 'אמטיסט', en: 'Amethyst' },
        image: 'https://raw.githubusercontent.com/kishumetugan/gemstone-encyclopedia/main/images/amethyst.png',
        color: { he: 'סגול', en: 'Purple' },
        hardness: '7',
        content: {
            he: {
                spiritual: 'אבן של שלווה ורוגע, מסייעת במדיטציה ובפיתוח האינטואיציה. מחזקת את הקשר הרוחני ומביאה איזון נפשי. עוזרת להירגע לפני שינה ולשחרר מחשבות שליליות.',
                physical: 'קוורץ סגול בעל מבנה גבישי משושה. הצבע הסגול נובע מנוכחות ברזל במבנה הגביש. נמצאת בעיקר בברזיל, אורוגוואי וזמביה.',
                healing: 'עוזרת בהקלה על כאבי ראש ומיגרנות, מפחיתה מתח ומרגיעה את מערכת העצבים. מסייעת בשיפור איכות השינה ובהפחתת סיוטים.',
                care: 'יש לנקות במים זורמים וטעינה באור ירח. להימנע מחשיפה ישירה לשמש - הצבע עלול לדהות. ניתן גם לטעון על גבי אשכול אמטיסט.',
                history: 'נחשבה לאבן מלכותית באירופה והיתה יקרה כמו יהלום עד גילוי מרבצים גדולים. השם מגיע מיוונית "amethystos" - מגן מפני שכרות.',
                hoshen: 'יש דעה שזו אחת מ-12 אבני החושן של הכהן הגדול, המיוחסת לשבט יששכר.'
            },
            en: {
                spiritual: 'Stone of tranquility and peace, aids in meditation and intuition development. Strengthens spiritual connection and brings mental balance. Helps calm before sleep and release negative thoughts.',
                physical: 'Purple quartz with hexagonal crystal structure. Purple color comes from iron in the crystal structure. Found mainly in Brazil, Uruguay and Zambia.',
                healing: 'Helps relieve headaches and migraines, reduces stress and calms the nervous system. Aids in improving sleep quality and reducing nightmares.',
                care: 'Clean with running water and charge under moonlight. Avoid direct sunlight - color may fade. Can also charge on amethyst cluster.',
                history: 'Considered a royal stone in Europe and was as valuable as diamond until discovery of large deposits. Name comes from Greek "amethystos" - protection from intoxication.',
                hoshen: 'According to one opinion, this is one of the 12 Hoshen stones of the High Priest, attributed to the tribe of Issachar.'
            }
        }
    },
    {
        id: 2,
        names: { he: 'רוז קוורץ', en: 'Rose Quartz' },
        image: 'https://raw.githubusercontent.com/kishumetugan/gemstone-encyclopedia/main/images/rose-quartz.png',
        color: { he: 'ורוד', en: 'Pink' },
        hardness: '7',
        content: {
            he: {
                spiritual: 'אבן האהבה והחמלה. מטפחת אהבה עצמית ופותחת את הלב לאהבה. מושכת אהבה רומנטית ומחזקת קשרים קיימים. עוזרת לסלוח ולרפא פצעים רגשיים.',
                physical: 'קוורץ ורוד עם גוון עדין ועדין לעין. הצבע נובע מזהומי טיטניום, ברזל או מנגן במבנה הגביש. נמצאת במקומות רבים בעולם, בעיקר במדגסקר וברזיל.',
                healing: 'מחזקת את מערכת הלב וכלי הדם ומסייעת בבעיות לחץ דם. תומכת בריפוי רגשי ומפחיתה מתח וחרדה.',
                care: 'ניקוי במים פושרים וטעינה בשמש עדינה של בוקר. להימנע משמש חזקה שעלולה לגרום לדהייה. ניתן גם לטעון עם קוורץ שקוף.',
                history: 'נמצאת בשימוש מאז 600 לפנה"ס ברומא ומצרים כסמל לאהבה. הרומאים האמינו שהיא מביאה אהבה ומונעת הזדקנות.',
                hoshen: null
            },
            en: {
                spiritual: 'Stone of love and compassion. Cultivates self-love and opens the heart to love. Attracts romantic love and strengthens existing relationships. Helps forgive and heal emotional wounds.',
                physical: 'Pink quartz with delicate and gentle hue to the eye. Color comes from titanium, iron or manganese impurities in crystal structure. Found in many places worldwide, mainly in Madagascar and Brazil.',
                healing: 'Strengthens cardiovascular system and helps with blood pressure issues. Supports emotional healing and reduces stress and anxiety.',
                care: 'Clean with lukewarm water and charge in gentle morning sun. Avoid strong sunlight that may cause fading. Can also charge with clear quartz.',
                history: 'Used since 600 BCE in Rome and Egypt as symbol of love. Romans believed it brings love and prevents aging.',
                hoshen: null
            }
        }
    },
    {
        id: 3,
        names: { he: 'עין החתול', en: 'Cat Eye' },
        image: 'https://raw.githubusercontent.com/kishumetugan/gemstone-encyclopedia/main/images/cats-eye.png',
        color: { he: 'חום-זהוב עם פס', en: 'Brown-Gold with Band' },
        hardness: '8.5',
        content: {
            he: {
                spiritual: 'אבן הגנה חזקה ביותר מעין הרע ומאנרגיות שליליות. מחזקת את האינטואיציה ומגבירה ביטחון עצמי. עוזרת לראות את האמת ולהגן מפני מניפולציות. מסייעת בקבלת החלטות נכונות.',
                physical: 'כריזוברייל עם אפקט אופטי ייחודי של עין החתול (chatoyancy). הפס האור נע כמו אישון עין כאשר מסובבים את האבן. נחשבת לאחת האבנים היקרות והנדירות ביותר.',
                healing: 'מחזקת את הראייה ומסייעת בבעיות עיניים. מגינה מפני מחלות ומחזקת את מערכת החיסון. תומכת בבריאות כללית ובחיוניות.',
                care: 'ניקוי במים פושרים עם סבון עדין. עמיד מאוד לשריטות והשפעות חיצוניות. מומלץ להימנע מחשיפה לכימיקלים חזקים.',
                history: 'נחשבת לאבן מגן מעין הרע בתרבויות רבות ושימשה כקמע מגן. במזרח אמינו שהיא מביאה עושר ומגנה מפני סכנות.',
                hoshen: 'במדרש תלפיות כתוב: "...העין חתול, סגולתו היא שמי שנושא אותה לא יבוא לידי עניות, במקום עניות יבא לידי עשירות..."'
            },
            en: {
                spiritual: 'Powerful protection stone from evil eye and negative energies. Strengthens intuition and boosts self-confidence. Helps see the truth and protect from manipulations. Aids in making correct decisions.',
                physical: 'Chrysoberyl with unique optical cat eye effect (chatoyancy). Light band moves like a pupil when rotating the stone. Considered one of the most precious and rare stones.',
                healing: 'Strengthens vision and helps with eye problems. Protects from diseases and strengthens immune system. Supports overall health and vitality.',
                care: 'Clean with lukewarm water and mild soap. Very resistant to scratches and external effects. Recommended to avoid exposure to strong chemicals.',
                history: 'Considered protective from evil eye in many cultures and used as protective amulet. In the East believed to bring wealth and protect from dangers.',
                hoshen: 'In Midrash Talpiyot it is written: "...The cat\'s eye, its virtue is that whoever carries it will not come to poverty, instead of poverty will come to wealth..."'
            }
        }
    },
    {
        id: 4,
        names: { he: 'ג\'ספר במבלבי', en: 'Bumblebee Jasper' },
        image: 'https://raw.githubusercontent.com/kishumetugan/gemstone-encyclopedia/main/images/bumblebee-jasper.png',
        color: { he: 'צהוב-כתום-שחור', en: 'Yellow-Orange-Black' },
        hardness: '5',
        content: {
            he: {
                spiritual: 'אבן השמחה, האומץ והיצירתיות. מעוררת תשוקה לחיים ומביאה התלהבות. מחזקת את הרצון לפעול ולהגשים חלומות. עוזרת להתגבר על פחדים ולצאת מאזור הנוחות.',
                physical: 'תערובת ייחודית של גופרית, גיר, אבן געש וארסן. דפוסים מרהיבים של פסים צהובים, כתומים ושחורים המזכירים דבורת בומבוס. נמצאת רק באי ג\'אווה שבאינדונזיה.',
                healing: 'מגבירה אנרגיה ומסייעת בהתמודדות עם עייפות כרונית. תומכת במערכת העצבים ומחזקת את המוטיבציה. מסייעת בשחרור חסימות אנרגטיות.',
                care: 'ניקוי עדין ללא מים עם מטלית רכה בלבד. רגישה מאוד - מכילה ארסן ולכן אין לשים בפה או ליד מזון. יש ללבוש כפפות בעת טיפול.',
                history: 'התגלתה לראשונה בשנות ה-90 באינדונזיה והפכה מהר למבוקשת. נדירה מאוד ומחירה עולה עקב קושי בכרייה ומוגבלות המקורות.',
                hoshen: null
            },
            en: {
                spiritual: 'Stone of joy, courage and creativity. Awakens zest for life and brings enthusiasm. Strengthens desire to act and fulfill dreams. Helps overcome fears and leave comfort zone.',
                physical: 'Unique mix of sulfur, calcium, volcanic rock and arsenic. Stunning patterns of yellow, orange and black bands resembling a bumblebee. Found only on Java island in Indonesia.',
                healing: 'Increases energy and helps cope with chronic fatigue. Supports nervous system and strengthens motivation. Aids in releasing energy blockages.',
                care: 'Gentle cleaning without water with soft cloth only. Very sensitive - contains arsenic so do not put in mouth or near food. Wear gloves when handling.',
                history: 'First discovered in the 1990s in Indonesia and quickly became sought after. Very rare and price rises due to mining difficulty and source limitations.',
                hoshen: null
            }
        }
    },
    {
        id: 5,
        names: { he: 'סיטרין', en: 'Citrine' },
        image: 'https://raw.githubusercontent.com/kishumetugan/gemstone-encyclopedia/main/images/citrine.png',
        color: { he: 'צהוב/זהוב', en: 'Yellow/Golden' },
        hardness: '7',
        content: {
            he: {
                spiritual: 'אבן השפע, ההצלחה והביטחון העצמי. מושכת עושר, פרנסה והצלחה בעסקים ובכלכלה. מגבירה אופטימיות ומביאה שמחת חיים. עוזרת להפוך מחשבות שליליות לחיוביות ולמשוך שפע.',
                physical: 'קוורץ צהוב עם גוונים מזהובים עד כתומים. הצבע נובע מנוכחות ברזל במבנה הגביש. רוב הסיטרין בשוק הוא אמטיסט מחומם.',
                healing: 'מחזקת את מערכת העיכול ומסייעת בבעיות קיבה ומעיים. תומכת בחילוף חומרים בריא ומגבירה אנרגיה פיזית. מסייעת בהפחתת עייפות כרונית.',
                care: 'ניקוי במים פושרים ללא סבונים חזקים. להימנע משמש ישירה וממקורות חום - הצבע עלול לדהות או להשתנות. טעינה בירח או בין אבני קוורץ.',
                history: 'נקראת "אבן הסוחר" - קיימת מסורת עתיקה לשים אותה בקופת הכסף או במקום העבודה למזל ושפע. היתה פופולרית בתקופת הארט דקו.',
                hoshen: null
            },
            en: {
                spiritual: 'Stone of abundance, success and self-confidence. Attracts wealth, livelihood and success in business and finance. Increases optimism and brings joy of life. Helps turn negative thoughts to positive and attract abundance.',
                physical: 'Yellow quartz with shades from golden to orange. Color comes from iron presence in crystal structure. Most citrine in market is heated amethyst.',
                healing: 'Strengthens digestive system and helps with stomach and intestinal problems. Supports healthy metabolism and increases physical energy. Aids in reducing chronic fatigue.',
                care: 'Clean with lukewarm water without strong soaps. Avoid direct sunlight and heat sources - color may fade or change. Charge in moonlight or among quartz stones.',
                history: 'Called "merchant stone" - ancient tradition to place in cash register or workplace for luck and abundance. Was popular in Art Deco period.',
                hoshen: null
            }
        }
    }
];
