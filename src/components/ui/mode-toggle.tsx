import { Moon, Sun, ZoomIn, ZoomOut } from "lucide-react";
import cn from "classnames";
import { Button } from "components/ui/button";
import { useTheme } from "components/ui/theme-provider";

const iconStyles = "h-[1.2rem] w-[1.2rem] transition-all duration-100";

export function ModeToggle() {
  const { toggleTheme, baseFontSize, toggleBaseFontSize } = useTheme();
  const isNormalText = baseFontSize === "font-size-normal";

  return (
    <div className="grid auto-cols-max grid-flow-col gap-x-2">
      <Button variant="outline" size="icon" onClick={toggleBaseFontSize}>
        <ZoomIn
          className={cn(
            iconStyles,
            isNormalText ? "-rotate-0 scale-100" : "rotate-90 scale-0"
          )}
        />
        <ZoomOut
          className={cn(
            iconStyles,
            "absolute",
            isNormalText ? "rotate-90 scale-0" : "rotate-0 scale-100"
          )}
        />
        <span className="sr-only">Toggle base font size</span>
      </Button>

      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <Sun
          className={cn(
            iconStyles,
            "rotate-90 scale-0 dark:-rotate-0 dark:scale-100"
          )}
        />
        <Moon
          className={cn(
            iconStyles,
            "absolute rotate-0 scale-100 dark:rotate-90 dark:scale-0"
          )}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
