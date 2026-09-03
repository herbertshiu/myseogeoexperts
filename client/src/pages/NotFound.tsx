/* Harbour Ledger style: even an empty route should feel like a deliberate desk note with a clear return path. */

import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="article-missing">
      <p className="eyebrow">404 / OFF THE MAP</p>
      <h1>This page has drifted beyond the current issue.</h1>
      <Link href="/" className="button button--dark">Return to the index <ArrowLeft size={16} /></Link>
    </main>
  );
}
