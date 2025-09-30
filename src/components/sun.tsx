export default function SunComponent({
  icon,
  time,
  type,
}: Readonly<{ icon: React.ReactNode; time: string; type: string }>) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {icon}
      <div className="flex flex-col gap-1 items-center">
        <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {time}
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400">{type}</p>
      </div>
    </div>
  );
}
