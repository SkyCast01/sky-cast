export default function DetailsItem({
  icon,
  name,
  value,
}: Readonly<{ icon: React.ReactNode; name: string; value: string }>) {
  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 min-w-[100px]">
        {icon} <span>{name}</span>
      </div>
      <p className="text-zinc-800 dark:text-zinc-100 text-md font-semibold">
        {value}
      </p>
    </div>
  );
}
