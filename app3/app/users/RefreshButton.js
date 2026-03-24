"use client";

import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      style={{
        padding: "8px 15px",
        background: "black",
        color: "white",
        borderRadius: "8px",
      }}
    >
      Refresh Users
    </button>
  );
}