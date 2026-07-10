import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const apiKey = process.env.DEEPSEEK_API_KEY;

  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        {role: "system", content: "Tum ek expert Pakistani developer ho. User Urdu me batayega. Tum React + Tailwind ka complete code do, aur har step Urdu me samjhao."},
        {role: "user", content: prompt}
      ]
    })
  });

  const data = await response.json();
  return NextResponse.json({code: data.choices[0].message.content});
}
