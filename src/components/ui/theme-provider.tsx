import { createContext, useContext, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "avy-app-ui-theme";
const TEXT_SIZE_STORAGE_KEY = "avy-app-text-size";

type Theme = "dark" | "light" | "system";
type BaseFontSize = "font-size-normal" | "font-size-big";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  baseFontSize: BaseFontSize;
  toggleTheme: () => void;
  toggleBaseFontSize: () => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  baseFontSize: "font-size-normal",
  toggleTheme: () => null,
  toggleBaseFontSize: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || systemTheme
  );
  const [baseFontSize, setBaseFontSize] = useState<BaseFontSize>(
    () =>
      (localStorage.getItem(TEXT_SIZE_STORAGE_KEY) as BaseFontSize) ||
      "font-size-normal"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("font-size-normal", "font-size-big");
    root.classList.add(baseFontSize);
  }, [baseFontSize]);

  const value = {
    theme,
    toggleTheme: () => {
      setTheme((prevTheme) => {
        const nextTheme = prevTheme === "dark" ? "light" : "dark";
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        return nextTheme;
      });
    },
    baseFontSize,
    toggleBaseFontSize: () => {
      setBaseFontSize((prevSize) => {
        const nextSize =
          prevSize === "font-size-normal"
            ? "font-size-big"
            : "font-size-normal";
        localStorage.setItem(TEXT_SIZE_STORAGE_KEY, nextSize);
        return nextSize;
      });
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
