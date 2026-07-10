import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { AppContent } from "../App";

// Randează o rută în HTML complet, la build (prerendering).
// Boții (Google, GPTBot, ClaudeBot, PerplexityBot) primesc astfel pagina
// cu tot conținutul, fără să fie nevoie să execute JavaScript.
export function render(url: string): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppContent />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>,
  );

  return { html, helmet: helmetContext.helmet! };
}
