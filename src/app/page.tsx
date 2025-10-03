import DetailsItem from "@/components/details-item";
import SunComponent from "@/components/sun";
import WeatherForecast from "@/components/weather-forecast";
import {
  CircleQuestionMark,
  Droplet,
  Sun,
  Sunrise,
  Sunset,
  Wind,
} from "lucide-react";

export default async function Home() {
  const dateNow = Date.now();

  const date = new Date(dateNow).toISOString().split(".")[0];

  const data = await fetch("https://nasa.runasp.net/api/Weather/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      city: "Cairo",
      datetime: date,
    }),
  }).then((res) => res.json());

  let { humidity, temperature, wind_speed } = data.Data;
  const { weather } = data.Data;

  temperature = Math.round(temperature);
  humidity = Math.round(humidity);
  wind_speed = Math.round(wind_speed);

  return (
    <section className="flex flex-col lg:flex-row gap-10">
      <div className="basis-2/3 flex flex-col gap-8">
        {/* weather part */}
        <div className="p-10 w-full flex flex-col md:flex-row items-center justify-around gap-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-lg rounded-xl">
          <div>
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Today&apos;s weather
            </h3>
            <div className="flex flex-col items-center mt-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Sun size={130} className="text-yellow-400" />
                <span className="text-6xl sm:text-7xl font-bold text-zinc-800 dark:text-zinc-100">
                  {temperature}°C
                </span>
              </div>
              <div className="text-md text-center mt-4 text-zinc-600 dark:text-zinc-400">
                {weather}. Highs around {temperature}°C.
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-blue-400/20 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <CircleQuestionMark size={30} className="text-blue-400" />
              <h4 className="font-bold text-lg sm:text-xl text-zinc-800 dark:text-zinc-200">
                Recommendation
              </h4>
            </div>
            <div>
              <p className=" text-md text-zinc-600 dark:text-zinc-400">
                It would be good to go and touch some grass today, the weather
                is good.
              </p>
            </div>
          </div>
        </div>
        {/* forecast part */}
        <div className="p-10 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-lg rounded-xl overflow-x-scroll">
          <h3 className="text-2xl mb-5 font-semibold text-zinc-800 dark:text-zinc-100">
            7-Day ForeCast
          </h3>
          <WeatherForecast />
        </div>
      </div>
      {/* left section */}
      <div className="basis-1/3 w-full flex flex-col gap-6">
        {/* details section */}
        <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg">
          <h3 className="text-xl font-bold dark:text-zinc-100 text-zinc-800 mb-4  ">
            Today&apos;s Details
          </h3>
          <DetailsItem
            icon={<Wind className="text-blue-500" />}
            name="Wind"
            value={wind_speed + " m/s"}
          />
          <DetailsItem
            icon={<Droplet className="text-blue-500" />}
            name="humidity"
            value={humidity + " %"}
          />
        </div>
        {/* sunrise & sunset */}
        <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg">
          <h3 className="text-xl font-bold dark:text-zinc-100 text-zinc-800 mb-4  ">
            Sunset & Sunrise
          </h3>
          <div className="flex items-center justify-around px-3 mx-4">
            <SunComponent
              icon={<Sunrise className="text-yellow-500 size-12" />}
              time={"6:05 AM"}
              type="Sunrise"
            />
            <SunComponent
              icon={<Sunset className="text-orange-500 size-12" />}
              time={"7:30 PM"}
              type="Sunset"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
