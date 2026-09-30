/**
 * UTF-8-safe Base64 helpers that run unchanged in the browser, Node, and the
 * edge runtime (they only rely on TextEncoder/TextDecoder and btoa/atob).
 */

export class Base64Error extends Error {}

/** Encode UTF-8 text as standard (or URL-safe, unpadded) Base64. */
export function encodeBase64(text: string, options: { urlSafe?: boolean } = {}): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  const encoded = btoa(binary);
  return options.urlSafe ? encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encoded;
}

/**
 * Normalize user input: strip whitespace/line breaks, accept the URL-safe
 * alphabet, and restore missing padding. Throws Base64Error on invalid input.
 */
export function normalizeBase64(input: string): string {
  const compact = input.replace(/\s+/g, "").replace(/-/g, "+").replace(/_/g, "/");
  if (compact.length === 0) return "";
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(compact)) {
    throw new Base64Error("Input contains characters that are not valid Base64.");
  }
  const unpadded = compact.replace(/=+$/, "");
  if (unpadded.length % 4 === 1) {
    throw new Base64Error("Input length is not valid Base64 (one character too many or too few).");
  }
  const padded = unpadded + "=".repeat((4 - (unpadded.length % 4)) % 4);
  if (compact.includes("=") && compact.length !== padded.length) {
    throw new Base64Error("Input has incorrect '=' padding.");
  }
  return padded;
}

/** Decode Base64 (standard or URL-safe) into UTF-8 text. */
export function decodeBase64(input: string): string {
  const normalized = normalizeBase64(input);
  let binary: string;
  try {
    binary = atob(normalized);
  } catch {
    throw new Base64Error("Input is not valid Base64.");
  }
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new Base64Error("Decoded bytes are not valid UTF-8 text (binary payloads are out of scope).");
  }
}
