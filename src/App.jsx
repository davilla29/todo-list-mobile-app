import React, { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import TodoScreen from "./screens/TodoScreen";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  if (!isAppReady) {
    return <SplashScreen onStart={() => setIsAppReady(true)} />;
  }

  return <TodoScreen />;
}