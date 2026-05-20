import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ta";

type Dict = Record<string, { en: string; ta: string }>;

export const t: Dict = {
  // Nav
  "nav.home": { en: "Home", ta: "முகப்பு" },
  "nav.about": { en: "About MLA", ta: "எம்.எல்.ஏ பற்றி" },
  "nav.constituency": { en: "Constituency", ta: "தொகுதி" },
  "nav.complaints": { en: "Complaints", ta: "புகார்கள்" },
  "nav.schemes": { en: "Schemes", ta: "திட்டங்கள்" },
  "nav.development": { en: "Development", ta: "மேம்பாடு" },
  "nav.news": { en: "News & Events", ta: "செய்திகள்" },
  "nav.contact": { en: "Contact", ta: "தொடர்பு" },

  // Branding
  "brand.party": { en: "Tamilaga Vettri Kazhagam", ta: "தமிழக வெற்றிக் கழகம்" },
  "mla.name": { en: "V. Sampathkumar", ta: "வே. சம்பத்குமார்" },
  "mla.title": { en: "MLA Candidate", ta: "எம்.எல்.ஏ வேட்பாளர்" },
  "mla.constituency": { en: "Coimbatore North", ta: "கோயம்புத்தூர் வடக்கு" },
  "slogan.main": { en: "People First. Progress Always.", ta: "மக்களே முதன்மை. முன்னேற்றமே குறிக்கோள்." },

  // Hero
  "hero.welcome": {
    en: "A new chapter of transparent, people-powered governance for Coimbatore North.",
    ta: "கோயம்புத்தூர் வடக்கிற்கு வெளிப்படையான, மக்கள் சக்தி நிறைந்த ஆட்சியின் புதிய அத்தியாயம்."
  },
  "cta.connect": { en: "Connect with MLA", ta: "எம்.எல்.ஏ-வை தொடர்பு கொள்ளுங்கள்" },
  "cta.complaint": { en: "Submit Complaint", ta: "புகார் அளியுங்கள்" },
  "cta.whatsapp": { en: "WhatsApp Us", ta: "வாட்ஸ்அப் செய்யுங்கள்" },
  "cta.track": { en: "Track Complaint", ta: "புகார் நிலையை அறிய" },

  // Quick access
  "qa.title": { en: "Quick Access", ta: "விரைவு அணுகல்" },
  "qa.complaint": { en: "Complaint Registration", ta: "புகார் பதிவு" },
  "qa.schemes": { en: "Government Schemes", ta: "அரசு திட்டங்கள்" },
  "qa.appointment": { en: "Appointment Booking", ta: "சந்திப்பு பதிவு" },
  "qa.emergency": { en: "Emergency Help", ta: "அவசர உதவி" },
  "qa.development": { en: "Development Works", ta: "மேம்பாட்டுப் பணிகள்" },
  "qa.students": { en: "Student Corner", ta: "மாணவர் மூலை" },

  // Announcement
  "ann.label": { en: "LIVE", ta: "நேரலை" },
  "ann.1": { en: "Free medical camp this Sunday at Ward 12 Community Hall — 9 AM to 4 PM.", ta: "இந்த ஞாயிறு வார்டு 12 சமூகக் கூடத்தில் இலவச மருத்துவ முகாம் — காலை 9 முதல் மாலை 4 வரை." },
  "ann.2": { en: "New scholarship applications open for engineering students.", ta: "பொறியியல் மாணவர்களுக்கு புதிய உதவித்தொகை விண்ணப்பங்கள்." },
  "ann.3": { en: "Drinking water project Phase-2 inaugurated in Saravanampatti.", ta: "சரவணம்பட்டி குடிநீர் திட்டம் கட்டம்-2 தொடங்கப்பட்டது." },

  // Stats
  "stats.title": { en: "Our Impact So Far", ta: "எங்கள் தாக்கம் இதுவரை" },
  "stats.complaints": { en: "Complaints Resolved", ta: "தீர்க்கப்பட்ட புகார்கள்" },
  "stats.projects": { en: "Development Projects", ta: "மேம்பாட்டுத் திட்டங்கள்" },
  "stats.beneficiaries": { en: "Welfare Beneficiaries", ta: "நலன் பெற்றவர்கள்" },
  "stats.wards": { en: "Wards Covered", ta: "வார்டுகள்" },

  // Testimonials
  "testi.title": { en: "Voices of Coimbatore North", ta: "கோயம்புத்தூர் வடக்கின் குரல்கள்" },
  "testi.subtitle": { en: "Real stories from people we serve.", ta: "மக்கள் சொல்லும் உண்மையான கதைகள்." },

  // About
  "about.bio.title": { en: "Biography", ta: "வாழ்க்கை குறிப்பு" },
  "about.bio.text": {
    en: "V. Sampathkumar is a grassroots leader from Coimbatore North, dedicated to serving the people through transparent governance, youth empowerment, and sustainable development. A long-time community organizer, he champions the values of Tamizhaga Vettri Kazhagam — fairness, progress, and Tamil pride.",
    ta: "வே. சம்பத்குமார் கோயம்புத்தூர் வடக்கிலிருந்து ஒரு அடித்தள தலைவர். வெளிப்படையான ஆட்சி, இளைஞர் மேம்பாடு, நிலையான வளர்ச்சி ஆகியவற்றின் மூலம் மக்களுக்கு சேவை செய்வதில் அர்ப்பணிப்புடையவர். தமிழக வெற்றிக் கழகத்தின் நேர்மை, முன்னேற்றம், தமிழ் பெருமை ஆகிய மதிப்புகளுக்காக போராடுபவர்."
  },
  "about.timeline.title": { en: "Political Journey", ta: "அரசியல் பயணம்" },
  "about.vision.title": { en: "Vision for the Constituency", ta: "தொகுதிக்கான பார்வை" },

  // Constituency
  "con.intro": { en: "Coimbatore North is a vibrant constituency in Tamil Nadu's manufacturing capital, blending heritage neighborhoods with fast-growing IT corridors.", ta: "கோயம்புத்தூர் வடக்கு, தமிழ்நாட்டின் உற்பத்தித் தலைநகரில் உள்ள ஒரு துடிப்பான தொகுதி — பாரம்பரிய பகுதிகளுக்கும் வளரும் ஐ.டி. தாழ்வாரங்களுக்கும் இடையே." },
  "con.facilities": { en: "Key Facilities", ta: "முக்கிய வசதிகள்" },

  // Complaints
  "comp.title": { en: "Public Complaint System", ta: "மக்கள் புகார் அமைப்பு" },
  "comp.subtitle": { en: "Your voice matters. Submit your issue and track resolution in real time.", ta: "உங்கள் குரல் முக்கியம். புகார் அளித்து நிலையை நேரடியாக அறியுங்கள்." },
  "comp.form.category": { en: "Category", ta: "வகை" },
  "comp.form.name": { en: "Your Name", ta: "உங்கள் பெயர்" },
  "comp.form.phone": { en: "Phone Number", ta: "தொலைபேசி எண்" },
  "comp.form.ward": { en: "Ward / Area", ta: "வார்டு / பகுதி" },
  "comp.form.desc": { en: "Describe the issue", ta: "பிரச்சினையை விவரிக்கவும்" },
  "comp.form.submit": { en: "Submit Complaint", ta: "புகார் சமர்ப்பிக்கவும்" },
  "comp.success": { en: "Complaint submitted! Your tracking ID:", ta: "புகார் சமர்ப்பிக்கப்பட்டது! உங்கள் கண்காணிப்பு எண்:" },
  "comp.track.title": { en: "Track Your Complaint", ta: "உங்கள் புகாரை கண்காணியுங்கள்" },
  "comp.track.placeholder": { en: "Enter tracking ID (e.g. TVK-12345)", ta: "கண்காணிப்பு எண் உள்ளிடவும்" },

  // Schemes
  "sch.title": { en: "Government Welfare Schemes", ta: "அரசு நலத்திட்டங்கள்" },
  "sch.subtitle": { en: "Find schemes you're eligible for and apply with ease.", ta: "உங்களுக்கான திட்டங்களை கண்டறிந்து எளிதாக விண்ணப்பிக்கவும்." },
  "sch.eligibility": { en: "Eligibility", ta: "தகுதி" },
  "sch.apply": { en: "Apply", ta: "விண்ணப்பிக்க" },

  // Development
  "dev.title": { en: "Development Works", ta: "மேம்பாட்டுப் பணிகள்" },
  "dev.subtitle": { en: "Transparent updates on every project — completed, ongoing, and planned.", ta: "ஒவ்வொரு திட்டத்திற்கும் வெளிப்படையான புதுப்பிப்புகள் — முடிந்தவை, நடப்பவை, திட்டமிடப்பட்டவை." },

  // News
  "news.title": { en: "News & Events", ta: "செய்திகள் மற்றும் நிகழ்வுகள்" },
  "news.subtitle": { en: "Stay updated with rallies, camps, press releases, and field visits.", ta: "பேரணிகள், முகாம்கள், செய்திக் குறிப்புகள் மற்றும் நேரடி வருகைகளை அறிந்துகொள்ளுங்கள்." },

  // Contact
  "contact.title": { en: "Reach Our Office", ta: "எங்கள் அலுவலகத்தை தொடர்பு கொள்ளுங்கள்" },
  "contact.subtitle": { en: "We're here for you — 7 days a week.", ta: "வாரத்தில் 7 நாட்களும் உங்களுக்காக." },
  "contact.address": { en: "MLA Office, Coimbatore North,\nCoimbatore, Tamil Nadu 641001", ta: "எம்.எல்.ஏ அலுவலகம், கோயம்புத்தூர் வடக்கு,\nகோயம்புத்தூர், தமிழ்நாடு 641001" },
  "contact.email": { en: "Email", ta: "மின்னஞ்சல்" },
  "contact.phone": { en: "Phone", ta: "தொலைபேசி" },

  // Footer
  "footer.tagline": { en: "Building a better Coimbatore North, together.", ta: "ஒன்றாக சிறந்த கோயம்புத்தூர் வடக்கை கட்டியெழுப்புவோம்." },
  "footer.rights": { en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "ta") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const tr = (key: string) => t[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
