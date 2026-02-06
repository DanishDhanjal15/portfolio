// src/claude.cjs
// Simple Claude client wrapper. Does NOT store your key.
// Usage: set CLAUDE_API_KEY in environment or create a .env file and install dotenv.

try { require('dotenv').config(); } catch (e) {}

const API_KEY = process.env.CLAUDE_API_KEY;
const API_URL = process.env.CLAUDE_API_URL || 'https://api.anthropic.com/v1/complete';

let fetchFn = (typeof fetch !== 'undefined') ? fetch : null;
if (!fetchFn) {
  try { fetchFn = require('node-fetch'); } catch (e) {}
}

if (!fetchFn) {
  throw new Error('No fetch available. Use Node 18+ or install node-fetch.');
}

async function callClaude(prompt, opts = {}) {
  if (!API_KEY) throw new Error('Missing CLAUDE_API_KEY in environment');

  const body = {
    model: opts.model || 'claude-instant-v1',
    prompt,
    max_tokens: opts.max_tokens || 300,
    temperature: opts.temperature ?? 0.2,
  };

  const res = await fetchFn(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Claude API error ${res.status}: ${text}`);
  }

  return res.json();
}

module.exports = { callClaude };
