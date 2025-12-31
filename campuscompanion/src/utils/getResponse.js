export default async function getResponse(data, query){
  const GEMINI_API_KEY = `${import.meta.env.VITE_GEMINI_API_KEY}`;
  
  if (!GEMINI_API_KEY) {
    throw new Error("VITE_GEMINI_API_KEY environment variable is not set");
  }

  const GEMINI_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

  const prompt = `
  SYSTEM:
  "You are a helpful campus assistant for IIIT Kottayam. Use only the provided context."
  
  OUTPUT HTML RULES:
  - Only use these tags: "section", "h2", "p", "ul", "li", "a", "strong"
  - Wrap answer in one or more <section> blocks.
  - Use <h2> for titles, <p> for text, <ul><li> for bullet lists.
  - Do NOT use markdown, JSON, or backticks. HTML ONLY.
  
  CONTEXT (FACTS FROM CAMPUS DATABASE):
  ${JSON.stringify(data)}
  
  USER QUESTION:
  "${query}"
  
  TASK:
  1. Answer the question using ONLY the data in CONTEXT.
  2. If the answer is not present in CONTEXT,but query does not require any data from context then  respond casually(example: hi, hello , time etc)

  3. If the answer is not present in CONTEXT but query requires CONTEXT, respond with:
     <p>I don't have that information in my current database.</p>
  4. Be concise and structured so it can be directly injected into a React UI.
  `;



  
  const response = await fetch(GEMINI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.2,      // low creativity → more factual
        maxOutputTokens: 800
      }
    })
  });
  
  const json = await response.json();
  if (!response.ok) {
    console.error("Gemini error:", json);
    throw new Error(json.error?.message || "Gemini API call failed");
  }

  const html = json.candidates?.[0]?.content?.parts?.[0]?.text || "";

  return html.trim();


}