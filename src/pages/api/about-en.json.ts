export const prerender = true;

import { ABOUT } from "../../data/about";

export async function GET() {
  return new Response(JSON.stringify({ cards: ABOUT.en.cards }), {
    headers: { "Content-Type": "application/json" }
  });
}
