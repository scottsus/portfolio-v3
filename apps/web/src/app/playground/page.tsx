import { ConstructionIcon } from "lucide-react";

export default async function PlaygroundPage() {
  return (
    <main className="flex w-2/5 flex-1 flex-col items-center justify-center gap-y-6 text-[#959595]">
      <div className="flex items-center justify-start gap-x-2">
        <ConstructionIcon size={30} />
        <h1 className="text-2xl">This page is currently under construction.</h1>
      </div>
    </main>
  );
}
