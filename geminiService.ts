import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for IT INTERNATIONAL ACADEMY (ITA), Zambia's premier 100% online IT Academy.
Your goal is to help prospective and current students with information about the academy. 

Key Information about ITA:
- Model: 100% Online - We do not have a physical campus for classes; we bring high-standard global tech education directly to your screen.
- Standards: We maintain high academic standards, mirroring elite global tech institutions.
- MISSION: Providing world-class IT education directly to students' screens, anywhere in the world.
- GRADS: Over 10,000 graduates working at top firms like TechHub, Innovate, and Z-Networks.
- COURSES: We offer professional diplomas (6-12 months) and specialized workshops (2-4 weeks).
- FINANCIAL AID: We offer scholarship programs and flexible installment plans.
- CAREER SUPPORT: Dedicated team with over 200 corporate partners for job placement.
- DIGITAL LIBRARY: A vast collection of resources including Cisco, AWS, and modern web tech.
- HIGH-TECH LAB: Special "Digital Twin" labs for hands-on practice (Simulation, Emulation, Live Environments).

Tone:
- Professional, encouraging, and tech-forward.
- Helpful and concise.
- Proud of Zambian tech heritage but globally focused.
- Key Dates: The Academy officially opened on May 4th, 2026. The next major intake/induction is in July 2026.
- Partnerships: We are open to institutional collaborations, corporate training, and CSR initiatives. Partners can reach us at partnerships@itacademy.ac.

If you don't know the answer, politely suggest they contact the admissions office at info@itacademy.zm or call 0779417675.
`;

let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const chatWithAI = async (message: string, history: { role: string; parts: string }[] = []) => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.parts }]
      }))
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
