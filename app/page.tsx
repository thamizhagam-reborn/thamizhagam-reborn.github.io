"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DoomsdayClock from "./components/DoomsdayClock";
import UtilityBar from "./components/UtilityBar";

export default function Home() {
  const [isLaunched, setIsLaunched] = useState(false);
  const router = useRouter();

  const handleLaunch = () => {
    setIsLaunched(true);
    setTimeout(() => {
      router.push("/home");
    }, 1500); // Wait 1.5s for the fade out to finish before navigating
  };

  return (
    <div className={`transition-opacity duration-1000 ease-in-out ${isLaunched ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <DoomsdayClock onLaunch={handleLaunch} />
      <UtilityBar />
    </div>
  );
}
