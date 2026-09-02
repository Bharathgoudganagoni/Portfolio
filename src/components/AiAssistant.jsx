// Production AI Assistant Component - Gemini 3.6 Flash Generative Engine
import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaChevronRight, FaFileAlt, FaDownload, FaRedo } from "react-icons/fa";
import "./aiAssistant.css";

// Comprehensive verified portfolio knowledge base
const SYSTEM_PROMPT = `
You are Bharath AI, a digital representative and AI assistant for Ganagoni Bharath Goud.
Your primary role is to answer questions from visitors, recruiters, developers, and clients about Bharath's professional background, work experience, internships, skills, projects, resume, and contact information.

VERIFIED PORTFOLIO DATA (SOURCE OF TRUTH):

1. IDENTITY & OVERVIEW:
   - Full Name: Ganagoni Bharath Goud
   - Role: Computer Science Engineer, Full Stack Developer (MERN Stack & Python), and UI/UX Designer.
   - Summary: Combines technical rigor with human-centered design to craft scalable MERN web applications, Python backend tools, and intuitive digital interfaces.

2. WORK EXPERIENCE & INTERNSHIPS:
   - MERN Full Stack Developer Intern — Edunet Foundation
     * Program: NxtGen 3.0, Virtual Internship
     * Duration: December 2024 – January 2025
     * Key Responsibilities:
       - Developed a full-stack Spotify Clone web application using MongoDB, Express.js, React, and Node.js.
       - Implemented real-time music streaming functionality and playlist management.
       - Implemented secure user authentication using JWT and OAuth.
       - Collaborated with a development team using Git/GitHub for version control.
       - Gained hands-on experience across the full software development lifecycle (SDLC).

   - Web Developer Intern & UI/UX — Keezenix Global LLP
     * Type: Remote/Hybrid, Paid Internship
     * Duration: February 2026
     * Website: www.keezenix.com
     * Key Responsibilities:
       - Developed the official Keezenix Global LLP corporate website (www.keezenix.com) from wireframe to live deployment.
       - Worked on web development and UI/UX design tasks to improve website structure and usability.
       - Conducted UX research, created wireframes and user flows.
       - Designed social media creatives and digital branding assets.
       - Collaborated with cross-functional teams using Figma, Canva, and Trello.

3. PROJECTS:
   - Keezenix Corporate Website (www.keezenix.com): Commercial corporate platform built with React, TypeScript, CSS3, HSL palettes, glassmorphic cards, and fast page transitions.
   - NN-Clicks Client Website (nn-clicks.vercel.app): Client platform delivering conversion-focused design, sleek animations, and responsive performance.
   - Gesture Control System (Demo available): Real-time computer vision desktop utility using Python, OpenCV, MediaPipe 3D hand tracking (21 coordinates), and TensorFlow to convert hand signs into OS commands (volume, window toggles, media).
   - Netflix Clone (mern-movie-app-n.onrender.com): Full-stack MERN movie streaming app pulling live TMDB API feeds with JWT cookie credentials, secure registrations, and OTP email validation flows.
   - Voice-Enabled Calculator (bharathgoudganagoni.github.io/calculator-project/): Web calculator using JavaScript and Web Speech API for voice arithmetic recognition, custom themes, and click audio.
   - WhatsApp Emergency Alert System (Under active staging): Emergency incident dashboard connecting React frontend with Node/Express backend to dispatch automated WhatsApp broadcasts (Twilio API) with SMS fallbacks.

4. TECHNICAL SKILLS:
   - Frontend: JavaScript (ES6+), React, Angular, TypeScript, HTML5, CSS3, Tailwind CSS, Next.js, Redux.
   - Backend & DB: Node.js, Express.js, MongoDB, Mongoose, Python, PostgreSQL, REST APIs, Socket.io, GraphQL, JWT Auth.
   - DevOps & Design: Git & GitHub, Docker, Cypress Testing, Postman, Linux, VS Code, AWS Basics, Figma, Canva, Photoshop.

5. CONTACT & RESUME:
   - Email: bharathgoudganagoni123@gmail.com
   - Phone / WhatsApp: +91 9666809898
   - Socials: LinkedIn (ganagoni-bharath-goud), GitHub (bharathgoudganagoni), Instagram (@bharathgoudganagoni), Threads (@ganagoni_bharath_goud).
   - Resume: Available for viewing and downloading directly in PDF format (Bharath_Resume.pdf).

GUIDELINES & BEHAVIORAL RULES:
1. PERSONALITY: Be intelligent, professional, friendly, confident, respectful, and conversational. Speak like a polished digital representative suitable for recruiters, HR managers, and developers.
2. ACCURACY & ZERO HALLUCINATION: Always prioritize truthfulness. If asked a specific factual question about Bharath that is NOT present in the portfolio data (e.g. unlisted companies, degrees, salary, unlisted awards), state clearly:
   "I don't have that information in Bharath's portfolio yet."
   Never invent companies, job roles, dates, projects, skills, degrees, or certifications.
3. TECHNICAL QUESTIONS: If asked about technical concepts (e.g., "What is React?", "What is MERN?"), explain the concept clearly AND naturally connect it to Bharath's experience (e.g., "MERN stands for MongoDB, Express, React, and Node.js. It's the full-stack technology Bharath used during his Edunet Foundation internship to build a Spotify Clone.").
4. UNRELATED QUESTIONS: If asked general/unrelated questions (e.g. "What is the weather?", "Tell me a joke"), answer briefly if appropriate or state lack of live tools, then naturally bring the conversation back toward Bharath's background. Avoid repeating rigid refusal templates.
5. CONTEXT MEMORY: Follow-up references like "the first one", "the second one", "that project" refer to items previously mentioned in the conversation.
6. RESUME REQUESTS: If asked for Bharath's resume or CV, mention that it can be viewed or downloaded directly using the action buttons provided.
`;

const SUGGESTIONS = [
  "Tell me about Bharath",
  "View his experience",
  "Show his projects",
  "View resume"
];

// Supported Gemini endpoints
const GEMINI_MODELS = [
  "gemini-1.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-pro"
];

// Zero-Fail Knowledge Engine for Portfolio Facts
const generateLocalKnowledgeResponse = (userQuery) => {
  const q = userQuery.toLowerCase();

  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("who are you") || q.includes("tell me about")) {
    return "Hello! I am Bharath AI, digital assistant for Ganagoni Bharath Goud. Bharath is a Computer Science Engineer, Full Stack Developer (MERN Stack & Python), and UI/UX Designer who builds high-performance, scalable web apps and intuitive interfaces.";
  }

  if (q.includes("experience") || q.includes("internship") || q.includes("work") || q.includes("company") || q.includes("job") || q.includes("edunet") || q.includes("keezenix")) {
    return "Bharath has completed 2 key professional internships:\n\n1. MERN Full Stack Developer Intern at Edunet Foundation (NxtGen 3.0, Dec 2024 – Jan 2025): Built a full-stack Spotify Clone with real-time music streaming, JWT auth, and MongoDB.\n\n2. Web Developer & UI/UX Intern at Keezenix Global LLP (Feb 2026): Designed and deployed the official corporate website (www.keezenix.com) with custom UI/UX wireframes and React.";
  }

  if (q.includes("project") || q.includes("portfolio") || q.includes("built") || q.includes("gesture") || q.includes("spotify") || q.includes("netflix") || q.includes("whatsapp")) {
    return "Here are some of Bharath's highlighted projects:\n\n• Keezenix Corporate Site (www.keezenix.com): Commercial React & TypeScript corporate platform.\n• Gesture Control System: Real-time computer vision desktop utility using Python, OpenCV, and MediaPipe 3D hand tracking (21 landmarks) for OS control.\n• Netflix Clone: Full-stack MERN app with live TMDB API feed, JWT auth, and OTP email validation.\n• WhatsApp Emergency Alert System: Incident dispatch system connecting React & Express with Twilio automated broadcasts.\n• Voice-Enabled Calculator: Web Speech API powered smart calculator.";
  }

  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("python") || q.includes("react") || q.includes("node")) {
    return "Bharath's Technical Stack:\n\n• Frontend: React, JavaScript (ES6+), Angular, TypeScript, HTML5, CSS3, Tailwind CSS, Next.js, Redux.\n• Backend & DB: Node.js, Express.js, MongoDB, Mongoose, Python, PostgreSQL, REST APIs, Socket.io, JWT Auth.\n• Tools & Design: Git & GitHub, Docker, Postman, Linux, Figma, Canva, Photoshop.";
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("bio")) {
    return "Bharath's official resume is available directly! You can view or download the PDF using the action buttons provided below.";
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("hire") || q.includes("linkedin") || q.includes("github")) {
    return "You can connect with Bharath directly:\n\n• Email: bharathgoudganagoni123@gmail.com\n• Phone / WhatsApp: +91 9666809898\n• LinkedIn: linkedin.com/in/ganagoni-bharath-goud\n• GitHub: github.com/bharathgoudganagoni";
  }

  if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("university")) {
    return "Bharath is a Computer Science Engineer with deep expertise in full-stack web development, Python automation systems, software architecture, and user experience design.";
  }

  return "Bharath is a Computer Science Engineer and MERN / Python Full Stack Developer specializing in scalable applications and modern UI/UX design. Feel free to ask about his internships (Edunet, Keezenix), projects (Gesture Control, Spotify/Netflix Clones), skills, or contact info!";
};

export default function AiAssistant({ isOpenExternal, onCloseExternal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "init",
      sender: "ai",
      text: "Hi! I'm Bharath AI. Ask me about Bharath's experience, skills, projects, or career journey.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: null
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isError, setIsError] = useState(false);
  const [lastUserText, setLastUserText] = useState("");
  const messagesEndRef = useRef(null);

  // Sync external toggle
  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  const handleToggleOpen = (newVal) => {
    setIsOpen(newVal);
    if (onCloseExternal && !newVal) {
      onCloseExternal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const handleAction = (actionType) => {
    handleToggleOpen(false);
    if (actionType === "projects") {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (actionType === "experience") {
      const el = document.getElementById("experience");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (actionType === "skills") {
      const el = document.getElementById("skills");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (actionType === "contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (actionType === "view_resume") {
      const resumeUrl = `${import.meta.env.BASE_URL}Bharath_Resume.pdf`;
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    } else if (actionType === "download_resume") {
      const resumeUrl = `${import.meta.env.BASE_URL}Bharath_Resume.pdf`;
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Bharath_Goud_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Real Google Gemini API Call with Multi-Turn Conversation & Model Fallbacks
  const fetchGeminiResponse = async (userText, currentHistory) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("VITE_GEMINI_API_KEY is not defined in environment.");
      return null;
    }

    // Build chat conversation turns
    const historyTurns = currentHistory.slice(-8).map(m => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    const contents = [
      {
        role: "user",
        parts: [
          { text: `SYSTEM INSTRUCTION:\n${SYSTEM_PROMPT}` }
        ]
      },
      {
        role: "model",
        parts: [
          { text: "Understood. I am Bharath AI, ready to act as a professional, accurate digital representative of Ganagoni Bharath Goud." }
        ]
      },
      ...historyTurns,
      {
        role: "user",
        parts: [{ text: userText }]
      }
    ];

    // Attempt Gemini model endpoints sequentially
    for (const model of GEMINI_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.3,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024
            }
          })
        });

        if (res.ok) {
          const data = await res.json();
          const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText && candidateText.trim().length > 0) {
            return candidateText.trim();
          }
        } else {
          console.warn(`Gemini model ${model} returned status ${res.status}`);
        }
      } catch (err) {
        console.warn(`Fetch error for model ${model}:`, err);
      }
    }

    return null;
  };

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || input.trim();
    if (!query || isTyping) return;

    setInput("");
    setIsError(false);
    setLastUserText(query);

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setIsTyping(true);

    // Call real Gemini Generative AI, or fallback seamlessly to Local Knowledge Engine
    let responseText = await fetchGeminiResponse(query, messages);
    if (!responseText) {
      responseText = generateLocalKnowledgeResponse(query);
    }

    setIsTyping(false);

    if (responseText) {
      // Check if response suggests action shortcuts
      const lowerQ = query.toLowerCase();
      let actionType = null;
      if (lowerQ.includes("resume") || lowerQ.includes("cv")) {
        actionType = "resume_options";
      } else if (lowerQ.includes("project")) {
        actionType = "projects";
      } else if (lowerQ.includes("experience") || lowerQ.includes("internship")) {
        actionType = "experience";
      } else if (lowerQ.includes("skill") || lowerQ.includes("tech")) {
        actionType = "skills";
      } else if (lowerQ.includes("contact") || lowerQ.includes("email") || lowerQ.includes("reach")) {
        actionType = "contact";
      }

      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType
      };
      setMessages((prev) => [...prev, aiMsg]);
    }
  };

  const handleRetry = () => {
    if (lastUserText) {
      setMessages((prev) => prev.filter(m => !m.isError));
      handleSendMessage(lastUserText);
    }
  };

  return (
    <>
      {/* Main AI Chat Panel */}
      {isOpen && (
        <div className="ai-modal-backdrop" onClick={() => handleToggleOpen(false)}>
          <div className="ai-chat-card" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-header-info">
                <div className="ai-avatar-wrap">
                  <FaRobot className="ai-avatar-icon" />
                  <span className="ai-online-dot" />
                </div>
                <div>
                  <h3 className="ai-header-title">Bharath AI</h3>
                  <span className="ai-header-subtitle">Digital AI Assistant</span>
                </div>
              </div>

              <div className="ai-header-actions">
                <button
                  className="ai-icon-btn"
                  onClick={() => {
                    setMessages([
                      {
                        id: "init",
                        sender: "ai",
                        text: "Hi! I'm Bharath AI. Ask me about Bharath's experience, skills, projects, or career journey.",
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        action: null
                      }
                    ]);
                    setIsError(false);
                  }}
                  title="Reset Chat"
                >
                  <FaRedo />
                </button>
                <button
                  className="ai-icon-btn close-btn"
                  onClick={() => handleToggleOpen(false)}
                  aria-label="Close Assistant"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="ai-chat-body">
              {messages.map((msg) => (
                <div key={msg.id} className={`ai-message-row ${msg.sender} ${msg.isError ? "error-row" : ""}`}>
                  {msg.sender === "ai" && (
                    <div className="ai-msg-avatar">
                      <FaRobot />
                    </div>
                  )}
                  <div className="ai-msg-bubble">
                    <p className="ai-msg-text">{msg.text}</p>

                    {/* Action buttons inside response */}
                    {msg.actionType === "resume_options" && (
                      <div className="ai-resume-actions-group">
                        <button
                          className="ai-action-btn primary"
                          onClick={() => handleAction("view_resume")}
                        >
                          <FaFileAlt /> View Resume
                        </button>
                        <button
                          className="ai-action-btn secondary"
                          onClick={() => handleAction("download_resume")}
                        >
                          <FaDownload /> Download Resume
                        </button>
                      </div>
                    )}

                    {msg.actionType && msg.actionType !== "resume_options" && (
                      <button
                        className="ai-msg-action-btn"
                        onClick={() => handleAction(msg.actionType)}
                      >
                        <span>Explore {msg.actionType.toUpperCase()}</span>
                        <FaChevronRight className="action-arrow" />
                      </button>
                    )}

                    {msg.isError && (
                      <button className="ai-retry-btn" onClick={handleRetry}>
                        <FaRedo /> Retry Connection
                      </button>
                    )}

                    <span className="ai-msg-time">{msg.time}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="ai-message-row ai">
                  <div className="ai-msg-avatar">
                    <FaRobot />
                  </div>
                  <div className="ai-msg-bubble typing">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="ai-suggestions-strip">
              <span className="suggestions-label">Suggested:</span>
              <div className="suggestions-scroll">
                {SUGGESTIONS.map((sText, idx) => (
                  <button
                    key={idx}
                    className="ai-chip-btn"
                    onClick={() => handleSendMessage(sText)}
                  >
                    {sText}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="ai-chat-input-form">
              <input
                type="text"
                className="ai-chat-input"
                placeholder="Ask Bharath AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
              />
              <button
                type="submit"
                className="ai-chat-send-btn"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
