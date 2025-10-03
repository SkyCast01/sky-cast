import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Droplet } from "lucide-react";
import { Badge } from "./ui/badge";

type Day = {
  Date: string;
  Temperature: number;
  Humidity: number;
  WindSpeed: number;
  Weather: string;
};

export default async function WeatherForecast() {
  const dateNow = Date.now();
  const date = new Date(dateNow).toISOString().split("T")[0];

  function getDayName(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
    });
  }

  const data = await fetch("https://nasa.runasp.net/api/Weather/predict-week", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      city: "Cairo",
      startDate: date,
    }),
  }).then((res) => res.json());

  const forecast = data.result.Predictions;

  return (
    <div
      className="grid gap-3 sm:gap-4 pb-2"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
      }}
    >
      {forecast.map((day: Day, idx: number) => {
        return (
          <Card
            key={idx}
            className="min-w-[7rem] sm:min-w-[8rem] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 bg-white dark:bg-zinc-900/50 hover:shadow-md"
          >
            <CardContent className="flex flex-col items-center p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                {getDayName(day.Date)}
              </h3>
              <div className="flex flex-col items-center mb-3">
                <div className="flex items-center gap-2">
                  <Thermometer />
                  <span className="text-3xl sm:text-4xl font-bold">
                    {Math.round(day.Temperature)}°
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Droplet />
                  <span className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {Math.round(day.Humidity)}°
                  </span>
                </div>
              </div>
              <Badge variant={"secondary"}>{day.Weather}</Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
