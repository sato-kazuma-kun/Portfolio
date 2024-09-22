import { useTheme } from "@/providers/theme";
import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div id="theme-container" className="flex items-center">
      <Toggle
        id="theme-toggle"
        aria-label="Toggle theme"
        pressed={false}
        variant={'outline'}
        className="data-[state=on]:bg-transparent data-[state=on]:text-foreground"
        onPressedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
