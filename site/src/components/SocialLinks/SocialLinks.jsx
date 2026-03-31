"use client";

import React from "react";
import { IconBrandGithub, IconBrandNpm, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: <IconBrandGithub size={18} />,
      url: "https://github.com/suraj-savle/vibe-toast",
      hoverColor: "#333",
    },
    {
      name: "npm",
      icon: <IconBrandNpm size={18} />,
      url: "https://www.npmjs.com/package/vibe-toast",
      hoverColor: "#cb3837",
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin size={18} />,
      url: "https://linkedin.com/in/suraj-savle",
      hoverColor: "#0a66c2",
    },
    {
      name: "X (Twitter)",
      icon: <IconBrandX size={18} />,
      url: "https://x.com/SurajSavle",
      hoverColor: "#000",
    },
  ];

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-2">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)/10",
              color: "var(--foreground)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            aria-label={social.name}
          >
            <span
              className="block transition-colors duration-300 group-hover:text-[--hover-color]"
              style={{ "--hover-color": social.hoverColor }}
            >
              {social.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}