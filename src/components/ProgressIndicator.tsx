"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

export function ProgressIndicator({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const shell = document.getElementById("uruShell");
    if (!shell) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { root: shell, threshold: 0.5 },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="uru-progress" id="uruProgress">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={active === s.id ? "active" : ""}
          aria-label={s.label}
        />
      ))}
    </div>
  );
}
