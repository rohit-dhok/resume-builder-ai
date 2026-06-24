const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function improveDescription(text) {
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`

    const prompt = `You are an expert resume writer and recruiter.

            Rewrite the following resume bullet points to improve clarity, professionalism, and impact.

            GOALS:

            * Use clear, professional language
            * Prefer strong but natural action verbs
            * Improve readability and recruiter scanability
            * Preserve the original meaning
            * Keep each bullet concise

            STRICT RULES:

            * Do NOT invent metrics, achievements, technologies, responsibilities, or outcomes
            * Do NOT use asterisk as bullet, always use "•" before sentences.
            * Do NOT assume business impact that is not stated
            * Do NOT remove any information from the original
            * Do NOT merge or split bullet points
            * Maintain the same number of bullet points
            * Avoid buzzwords and AI-sounding phrases such as:
            "cutting-edge", "revolutionary", "world-class", "game-changing",
            "spearheaded", "synergized", "leveraged" (unless genuinely appropriate)

            STYLE:

            * Write like a real recruiter would expect on a modern software engineering resume
            * Prefer clarity over sophistication
            * Avoid excessive adjectives
            * Use past tense for past roles and present tense for current roles when appropriate

            Original:
            ${text}

            Return ONLY the improved bullet points.
    `;

    const response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            contents: [{ parts: [{ text:prompt }] }],
            generationConfig: {
                thinkingConfig: { thinkingBudget: 0 }
            }
        })
    })

    const data = await response.json();

    if (!data.candidates) {
        throw new Error("Gemini API error : " + JSON.stringify(data));
    }

    const raw = data.candidates[0].content.parts[0].text;
    console.log(raw);
    return raw.trim();
}