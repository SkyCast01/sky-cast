import { Card, CardContent } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from "lucide-react";
import { Badge } from "./ui/badge";

export default function WeatherForecast() {
  const forecast = [
    {
      day: "Mon",
      high: 72,
      low: 58,
      status: "Sunny",
      icon: <Sun className="w-10 h-10 text-amber-400" />,
    },
    {
      day: "Tue",
      high: 68,
      low: 55,
      status: "Cloudy",
      icon: <Cloud className="w-10 h-10 text-gray-400" />,
    },
    {
      day: "Wed",
      high: 65,
      low: 52,
      status: "Rainy",
      icon: <CloudRain className="w-10 h-10 text-blue-400" />,
    },
    {
      day: "Thu",
      high: 70,
      low: 56,
      status: "Partly Cloudy",
      icon: <Cloud className="w-10 h-10 text-gray-300" />,
    },
    {
      day: "Fri",
      high: 75,
      low: 60,
      status: "Sunny",
      icon: <Sun className="w-10 h-10 text-amber-400" />,
    },
    {
      day: "Sat",
      high: 62,
      low: 48,
      status: "Windy",
      icon: <Wind className="w-10 h-10 text-cyan-400" />,
    },
    {
      day: "Sun",
      high: 58,
      low: 45,
      status: "Snow",
      icon: <CloudSnow className="w-10 h-10 text-blue-300" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
      {forecast.map((day, idx) => (
        <Card
          key={idx}
          className="text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 bg-white dark:bg-zinc-900/50 hover:shadow-md"
        >
          <CardContent className="flex flex-col items-center p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              {day.day}
            </h3>

            <div className="mb-4">{day.icon}</div>

            <div className="flex flex-col items-center mb-3">
              <span className="text-3xl sm:text-4xl font-bold">
                {day.high}°
              </span>
              <span className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-0.5">
                {day.low}°
              </span>
            </div>

            <Badge variant={"secondary"}>{day.status}</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
