import { useTheme } from "@/providers/theme";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        id="theme-switch" />
      <Label htmlFor="theme-switch">{theme === 'dark' ? 'Dark' : 'Light'} Mode</Label>
    </div>
  );
}
