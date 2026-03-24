"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function LiveClock() {

  const [time, setTime] = useState("");

  useEffect(() => {

    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div>
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Live Digital Clock</h1>
      <h2>{time}</h2>
    </div>
    <div className="mt-6 space-y-3">
        <Link href="/blog" className="block text-blue-600 underline">Bl;og</Link>
        <Link href="/Weather" className="block text-blue-600 underline">Weather</Link>
        
      </div>
      </div>
  );
}