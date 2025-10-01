"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold tracking-tight">Abdullah Al Towsif</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Building scalable web apps & sharing my journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary">About Me</Link></li>
            <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link href="/blogs" className="hover:text-primary">Blogs</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Connect
          </h3>
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="https://github.com/AbdullahAlTowsif"
              target="_blank"
              className="hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdullah-al-towsif-1528ba345/"
              target="_blank"
              className="hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/towsif635?t=QVnz53_n4hhwtr1Cki9-Fw&s=09"
              target="_blank"
              className="hover:text-primary"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Abdullah Al Towsif. All rights reserved.
      </div>
    </footer>
  );
}
