import { Moon, Sun } from "heroicons-react";
import { useState } from "react";
import { Button } from "./Button";
import { Nav } from "./Nav";
export const Header = () => {
  const [theme, setTheme] = useState("light");
  return (
    <header className="sticky top-0 z-[9999] grid grid-cols-[3fr,2fr,1fr] p-3 bg-[inherit] md:px-6">
      {/* Logo on Left */}
      <div className="relative text-lg font-bold">
        <span className="text-[#424242]">Project</span>
        <span className="text-[#5C95FF] ">Builder</span>
      </div>

      {/* Navigation on Centre-Right */}
      <Nav></Nav>
      {/* Light Toggle on Right */}
      <Button
        className="flex justify-center items-center"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
    </header>
  );
};
