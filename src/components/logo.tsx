import { Wind } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2 font-bold w-full">
      <Wind size={24} className="text-blue-600" />{" "}
      <span className="text-2xl text-zinc-800 dark:text-zinc-100">SkyCast</span>
    </div>
  );
}
