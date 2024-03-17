import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://apis.is/flight");
  const flights: { results: any[] } = await res.json();
  console.log(flights);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {flights.results.map((flight: any, index: number) => {
        return <div key={index}>{flight.flightNumber}</div>;
      })}
    </main>
  );
}
