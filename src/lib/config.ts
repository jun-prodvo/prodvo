/**
 * App-level configuration resolved from environment variables.
 * NEXT_PUBLIC_ prefix ensures these are available in both server and client
 * code and are compatible with Vercel's build-time environment injection.
 *
 * Set NEXT_PUBLIC_APP_NAME and NEXT_PUBLIC_APP_DOMAIN in:
 *   - .env.local  (local development)
 *   - Vercel Project → Settings → Environment Variables  (deployed environments)
 */

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Prodvo";
export const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN ?? "prodvo.studio";

/** First letter of the app name, used for the condensed logo prefix (e.g. "P/"). */
export const APP_LOGO_PREFIX = `${APP_NAME.charAt(0)}/`;

