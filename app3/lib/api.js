export async function getUsers() {
  const res = await fetch("https://randomuser.me/api/?results=21", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("fail to fetch");
  }

  const data = await res.json();
  return data.results;
}