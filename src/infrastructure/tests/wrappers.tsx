import { ThemeProvider } from "components/ui/theme-provider";

export const wrapper = ({ children }: { children: React.ReactElement }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
