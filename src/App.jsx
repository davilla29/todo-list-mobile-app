import React, { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import TodoScreen from "./screens/TodoScreen";
import { ThemeProvider } from "./ThemeContext";


export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <ThemeProvider>
      {!isAppReady ? (
        <SplashScreen onStart={() => setIsAppReady(true)} />
      ) : (
        <TodoScreen />
      )}
    </ThemeProvider>
  );
}