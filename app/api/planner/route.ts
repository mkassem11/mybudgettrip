import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface PlannerInput {
  destination: string;
  budget: number;      // USD per day
  days: number;
  style: "backpacking" | "comfort" | "luxury-lite";
  group: "solo" | "couple" | "friends";
}

export interface PlannerOutput {
  destination: string;
  daily_budget: string;
  total_estimate: string;
  best_months: string;
  cheap_areas: { name: string; why: string }[];
  accommodation: { type: string; cost: string; tip: string }[];
  food: { option: string; cost: string; examples: string }[];
  transportation: { mode: string; cost: string; tip: string }[];
  activities: { name: string; cost: string; tip: string }[];
  money_saving_tips: string[];
  avoid: string[];
  local_insight: string;
}

const SYSTEM_PROMPT = `You are a budget travel expert. Return ONLY valid JSON. No markdown, no explanation. Be specific, practical, and honest about costs. Use real current prices. Keep tips actionable.`;

function buildPrompt(input: PlannerInput): string {
  return `Generate a budget travel plan for:
Destination: ${input.destination}
Budget: $${input.budget}/day USD
Duration: ${input.days} days
Travel style: ${input.style}
Group: ${input.group}

Return this exact JSON structure (no extra fields):
{
  "destination": "city, country",
  "daily_budget": "$XX–XX",
  "total_estimate": "$XXX–XXX for X days",
  "best_months": "Month–Month (reason)",
  "cheap_areas": [{"name": "area name", "why": "why stay here"}],
  "accommodation": [{"type": "hostel/guesthouse/hotel", "cost": "$XX/night", "tip": "specific tip"}],
  "food": [{"option": "where/how", "cost": "$X–XX/meal", "examples": "specific dishes/places"}],
  "transportation": [{"mode": "type", "cost": "$X–XX", "tip": "practical advice"}],
  "activities": [{"name": "activity", "cost": "$X or free", "tip": "how to save or do it"}],
  "money_saving_tips": ["tip1", "tip2", "tip3", "tip4", "tip5"],
  "avoid": ["tourist trap or mistake to avoid"],
  "local_insight": "one paragraph of genuine local knowledge that saves money"
}`;
}

export async function POST(req: NextRequest) {
  try {
    const input: PlannerInput = await req.json();

    if (!input.destination || !input.budget || !input.days) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "AI planner not configured" }, { status: 503 });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: buildPrompt(input) },
      ],
      temperature: 0.3,
      max_tokens: 1200,
      response_format: { type: "json_object" },
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";
    const plan: PlannerOutput = JSON.parse(raw);

    return NextResponse.json({ plan, input });
  } catch (err) {
    console.error("Planner error:", err);
    return NextResponse.json({ error: "Failed to generate plan" }, { status: 500 });
  }
}
