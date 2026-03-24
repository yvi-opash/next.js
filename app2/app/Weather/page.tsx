import Info from "./Info";


const Weather = async ({ searchParams }: any) => {
  const params = await searchParams;

  const city = params?.city || "surat";

  const URL = `https://wttr.in/${city}?format=j1`;

  const res = await fetch(URL, {
    cache: "no-store",
  }); 

  const data = await res.json();

  const temp = data.current_condition[0].temp_C;
  const desc = data.current_condition[0].weatherDesc[0].value;

  return (
    <div>
     

      <Info/>


      <p>Temperature: {temp} °C</p>
      <p>Condition: {desc}</p>
    </div>
  );
};

export default Weather;