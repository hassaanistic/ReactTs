// ThemeContext.js
import { createContext, ReactNode, useState } from "react";
// ReactNode --> for children

type ThemeType = "light" | "dark";
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// theme, toggleTheme ya dono themesContext ka hissa ha ab 
// Ham themeContext ko use kr k inha use kr sakty ha 
// Hma na themeContext create krty waqt () bracket mn Type define ki ha or uski default value b di ha Vo chahy function ho ya koi stat jise ham na hirarchy mn import krna ha 
//ham na jab b new function ko bnana ha to hamay  "themeContext" k params mn use add krna hoga or use default values B deni hogi 

// Js mn  ham default values ya value type nhi dete kyu k hhamay us mn type se qarz nhi hota 

// JS m ham ese krty ha 
//  const ThemeContext = createContext();

//  const ThemeContext = createContext<ThemeContextType >({  theme: "light", toggleTheme: ()=>{} });
  
//yahan game sari ha Type ki 
// ham na params mn jo jo functions ya states pass krna ha hamay un k lye pehla "Interface" bnana prta ha ta k params() mn vo sab functions aa saky 
// to jab b ham na function bnana ha to uski default value k sath createContext() mn hamay vo state Ya function pass krna prta ha   

//jo jo function bnana ha use pehla interface mn decalre krna ha then param mn pass
// b krna ha with default value  "ThemeContextType()" Or may b with null