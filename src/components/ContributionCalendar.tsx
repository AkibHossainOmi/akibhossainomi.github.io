import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const theme = {
  light: ["#e7e0d4", "#f4c9a8", "#e99a62", "#cf6a2c", "#a3400d"],
  dark: ["#26231f", "#5a3218", "#8f4a1e", "#cf6a2c", "#f39a5c"],
};

const isDark = () => document.documentElement.classList.contains("dark");

export default function ContributionCalendar({ username }: { username: string }) {
  // null until mounted: nothing theme-dependent is rendered at build time,
  // so there is no static skeleton to clash with the live calendar.
  const [dark, setDark] = useState<boolean | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = () => setDark(isDark());
    onChange();
    document.addEventListener("themechange", onChange);
    return () => document.removeEventListener("themechange", onChange);
  }, []);

  // On narrow screens the grid scrolls sideways inside the library's own
  // scroll container; keep it scrolled to the latest weeks, like GitHub does.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const toEnd = () => {
      const s = el.querySelector<HTMLElement>(".react-activity-calendar__scroll-container");
      if (s) s.scrollLeft = s.scrollWidth;
    };
    const mo = new MutationObserver(toEnd);
    mo.observe(el, { childList: true, subtree: true, attributes: true });
    toEnd();
    return () => mo.disconnect();
  }, []);

  // The wrapper is identical on the server and the first client render, so
  // hydration matches; its min-height also gives client:visible a target.
  return (
    <div ref={wrap} style={{ minHeight: 140 }}>
      {dark !== null && (
        <GitHubCalendar
          username={username}
          colorScheme={dark ? "dark" : "light"}
          theme={theme}
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          errorMessage="Couldn't load GitHub activity right now."
        />
      )}
    </div>
  );
}
