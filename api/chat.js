// Serverless API function for Vercel deployment
export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history } = req.body || {};
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY environment variable is not configured." });
  }

  const models = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"];
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `SYSTEM INSTRUCTION: You are Bharath AI, digital assistant for Ganagoni Bharath Goud (MERN Full Stack Dev & Computer Science Engineer). Answer accurately based on his experience (Edunet Foundation, Keezenix Global), projects (Spotify clone, Gesture Control, Netflix clone), skills, and resume.`
        }
      ]
    },
    ...(history || []).slice(-6).map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    })),
    {
      role: "user",
      parts: [{ text: message || "Hello" }]
    }
  ];

  for (const model of models) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return res.status(200).json({ reply: text.trim() });
        }
      }
    } catch (err) {
      console.error(`Error with model ${model}:`, err);
    }
  }

  return res.status(500).json({ error: "Failed to fetch response from Gemini API models." });
}
