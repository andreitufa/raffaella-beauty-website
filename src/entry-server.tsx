import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { AppContent, waitForLazyImports, pendingLazyImportCount } from "../App";

// Randează o rută în HTML complet, la build (prerendering).
// Boții (Google, GPTBot, ClaudeBot, PerplexityBot) primesc astfel pagina
// cu tot conținutul, fără să fie nevoie să execute JavaScript.
//
// Paginile sunt împărțite în chunk-uri lazy (code splitting), iar
// renderToString nu așteaptă module lazy: prima trecere declanșează
// import-urile, apoi așteptăm încărcarea lor și randăm din nou, până când
// nu mai apar import-uri noi. Modulele lazy rămân în cache, deci trecerea
// finală produce HTML-ul complet.
export async function render(url: string): Promise<{ html: string; helmet: HelmetServerState }> {
  let html = "";
  let helmetContext: { helmet?: HelmetServerState } = {};

  for (let pass = 0; pass < 5; pass++) {
    const before = pendingLazyImportCount();
    helmetContext = {};
    html = renderToString(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <AppContent />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
    );
    if (pendingLazyImportCount() === before) break;
    await waitForLazyImports();
  }

  return { html, helmet: helmetContext.helmet! };
}
