'use client';

import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();

  return (
    <div id="theme-container" className="flex items-center">
      <Toggle
        id="theme-toggle"
        aria-label="Toggle theme"
        pressed={false}
        variant={'outline'}
        className="data-[state=on]:bg-transparent data-[state=on]:text-foreground"
        onPressedChange={() => setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'dark' : systemTheme !== undefined ? systemTheme === 'dark' ? 'light' : 'dark' : 'dark')}
      >
        {theme === 'dark' ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )}
      </Toggle>
    </div>
  );
}
