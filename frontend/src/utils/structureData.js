// AIzaSyBzQ-hQLf4MWDJoYRNAm_ApC4759SuWT3U
// async function callGeminiAPI() {
//   try {
//     const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-goog-api-key': ''
//       },
//       body: JSON.stringify({
//         "contents": [
//           {
//             "parts": [
//               {
//                   "text": `
//                   You are a data extraction engine for a campus knowledge base.

//                   Task:
//                   Read the following RAW_TEXT about a university campus and convert it into structured JSON objects
//                   using the fixed schema below.
                  
//                   Schema (top-level object):
//                   - faq: array of FAQ objects
//                   - courses: array of Course objects
//                   - faculty: array of Faculty objects
//                   - departments: array of Department objects
//                   - services: array of Service objects
//                   - events: array of Event objects
                  
//                   FAQ object:
//                   - id: string (generate a short stable slug, e.g. "faq_library_hours")
//                   - topic: one of ["library","hostel","exam","fees","transport","mess","other"]
//                   - question: string (natural-language question a student might ask)
//                   - answer: string (1–3 sentences, factual, campus-specific)
//                   - tags: array of strings
//                   - related_entities: array of { "type": string, "id": string }
                  
//                   Course object:
//                   - code: string
//                   - name: string
//                   - department: string
//                   - semester: integer (1–8, or 0 if unknown)
//                   - credits: integer (0 if unknown)
//                   - slots: string
//                   - faculty_id: string ("" if unknown)
                  
//                   Faculty object:
//                   - id: string (e.g. "F001" or slug from name)
//                   - name: string
//                   - email: string
//                   - department: string
//                   - office_location: string
//                   - consultation_hours: string
                  
//                   Department object:
//                   - id: string
//                   - name: string
//                   - building_location: string
//                   - contact_email: string
                  
//                   Service object:
//                   - id: string
//                   - name: string
//                   - type: one of ["library","hostel","canteen","admin","medical","sports","other"]
//                   - location: string
//                   - hours: string
//                   - contact: string
                  
//                   Event object:
//                   - id: string
//                   - name: string
//                   - type: one of ["fest","workshop","talk","competition","other"]
//                   - description: string
//                   - start_date: string in "YYYY-MM-DD" (or "" if unknown)
//                   - end_date: string in "YYYY-MM-DD" (or "" if unknown)
//                   - location: string
                  
//                   Rules:
//                   - Use ONLY the schema and field names above. Do not invent new keys.
//                   - If a field is missing in the RAW_TEXT, fill it with a safe default as described ("" or 0).
//                   - Use concise, factual text taken from the RAW_TEXT. Do NOT hallucinate extra policies.
//                   - Return VALID JSON only. No comments, no markdown, no backticks, no extra text.
                  
//                   RAW_TEXT:

//                   ${content}
                  
                  
                  
                  
//                   `
                  
//               }
//             ]
//           }
//         ]
//       })
//     });

//     const res = await response.json();
//     const data = await res.candidates[0].content.parts[0].text;
//     console.log(JSON.parse(data));

//   } catch (error) {
//     console.error('Error:', error);

//   }
// }

import responseSchema from './responseSchema'
async function structureData(content) {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": "AIzaSyBzQ-hQLf4MWDJoYRNAm_ApC4759SuWT3U"
        },
        body: JSON.stringify({
          // structured output config
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: responseSchema
          },
          contents: [
            {
              parts: [
                {
                  text: `
You are a data extraction engine for a campus knowledge base.

Task:
Read the following RAW_TEXT about a university campus and convert it into structured JSON objects
using the fixed schema below.

Use ONLY the schema and field names. If a field is missing in RAW_TEXT, use "" or 0.
Use concise, factual text taken from RAW_TEXT. Do NOT hallucinate extra policies.

RAW_TEXT:
"""
${content}
"""
`
                }
              ]
            }
          ]
        })
      }
    );

    const res = await response.json();

    // Because we used responseMimeType=application/json, the model
    // responds with structured JSON in candidates[0].content.parts[0].functionCall/parsed value
    // but the simplest pattern is still text() -> parse:

    const text = res.candidates[0].content.parts[0].text;
    const data = JSON.parse(text);

    
    return data; // { faq: [...], courses: [...], ... }

  } catch (error) {
    console.error("Error calling Gemini:", error);
    return error;
  }
}

export default structureData;