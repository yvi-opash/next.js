"use client";

import { useSearchParams } from "next/navigation";

const Info = () => {
  const searchParams = useSearchParams();

  const city = searchParams.get("city");


  return (
    <div>
      <h2> Client Component</h2>

      <p>City from URL: {city}</p>
  
    </div>
  );
};

export default Info;