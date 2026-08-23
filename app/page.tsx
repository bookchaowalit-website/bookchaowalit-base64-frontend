"use client";

import { useState } from "react";

async function copyText(text: string) {
  try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
}

export default function Home() {
  const [input, setInput] = useState("Hello, portfolio!");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [status, setStatus] = useState("BENCH READY / LOCAL ONLY");

  const run = () => {
    setError("");
    try {
      if (mode === "encode") {
        const bytes = new TextEncoder().encode(input);
        let binary = "";
        bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
        setOutput(btoa(binary));
        setStatus("PRINT READY / BASE64 OUTPUT");
      } else {
        const binary = atob(input.trim());
        const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
        setOutput(new TextDecoder().decode(bytes));
        setStatus("PRINT READY / UTF-8 TEXT");
      }
    } catch {
      setOutput("");
      setError(mode === "encode" ? "The text could not be exposed." : "The tray contains invalid Base64.");
      setStatus("HOLD / CHECK INPUT");
    }
  };

  const swap = () => {
    setInput(output); setOutput(input);
    setMode((current) => (current === "encode" ? "decode" : "encode"));
    setError(""); setStatus("TRAYS SWAPPED / READY");
  };
  const clear = () => { setInput(""); setOutput(""); setError(""); setStatus("BENCH CLEARED / LOCAL ONLY"); };
  const copy = async () => {
    if (!output) return;
    setStatus((await copyText(output)) ? "COPIED / OUTPUT IN CLIPBOARD" : "COPY BLOCKED / SELECT OUTPUT");
  };

  return (
    <main className="exposure-page">
      <div className="exposure-shell">
        <header className="exposure-header">
          <div className="exposure-mark">EXPOSURE / 64</div>
          <div className="exposure-status" aria-live="polite">{status}</div>
          <p className="exposure-note">A UTF-8-safe Base64 bench. Nothing leaves this browser.</p>
        </header>
        <section className="exposure-intro" aria-labelledby="page-title">
          <div>
            <h1 id="page-title">Develop the payload.</h1>
            <p>Move between readable text and Base64 without losing the trail. The result stays in the tray until you take it.</p>
          </div>
          <div className="exposure-receipt" role="group" aria-label="Current operation">
            <span>PROCESS</span><strong>{mode === "encode" ? "EXPOSE → ENCODE" : "DEVELOP → DECODE"}</strong><small>TEXT ONLY / NO UPLOAD</small>
          </div>
        </section>
        <nav className="exposure-switch" aria-label="Conversion direction">
          <button type="button" className={mode === "encode" ? "is-active" : ""} onClick={() => setMode("encode")}>01 / Expose to Base64</button>
          <button type="button" className={mode === "decode" ? "is-active" : ""} onClick={() => setMode("decode")}>02 / Develop to text</button>
        </nav>
        <section className="exposure-bench" aria-label="Base64 workbench">
          <label className="exposure-tray"><span className="tray-label">{mode === "encode" ? "SOURCE / PLAIN TEXT" : "SOURCE / BASE64"}</span><textarea value={input} onChange={(event) => setInput(event.target.value)} aria-label="Source input" spellCheck={false} /><span className="tray-footer">{input.length} characters · edit before processing</span></label>
          <div className="exposure-arrow" aria-hidden="true">→</div>
          <label className="exposure-tray result-tray"><span className="tray-label">RESULT / {mode === "encode" ? "BASE64" : "PLAIN TEXT"}</span><textarea value={output} readOnly aria-label="Conversion result" placeholder="The developed result appears here." spellCheck={false} /><span className="tray-footer">{output.length} characters · safe to copy</span></label>
        </section>
        {error ? <p className="exposure-error" role="alert">{error}</p> : null}
        <div className="exposure-actions">
          <button type="button" className="exposure-primary" onClick={run}>{mode === "encode" ? "Expose payload" : "Develop payload"}</button>
          <button type="button" className="exposure-secondary" onClick={copy} disabled={!output}>Take result</button>
          <button type="button" className="exposure-quiet" onClick={swap}>Swap trays</button>
          <button type="button" className="exposure-quiet" onClick={clear}>Clear bench</button>
        </div>
        <footer className="exposure-footer">BROWSER PROCESSING / NO SERVER REQUIRED / BOOKCHAOWALIT DEVELOPER TOOLS</footer>
      </div>
    </main>
  );
}
