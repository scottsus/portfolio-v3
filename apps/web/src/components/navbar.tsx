import {
  BriefcaseIcon,
  EllipsisIcon,
  HomeIcon,
  LinkedinIcon,
  MicroscopeIcon,
  PaletteIcon,
  TwitterIcon,
} from "lucide-react";

export function Navbar() {
  return (
    <div className="mb-[5vh] flex items-center justify-around gap-x-2 rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-4 text-white">
      <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]">
        <HomeIcon size={24} />
      </div>
      <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]">
        <BriefcaseIcon size={24} />
      </div>
      <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]">
        <PaletteIcon size={24} />
      </div>
      <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]">
        <MicroscopeIcon size={24} />
      </div>
      <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]">
        <EllipsisIcon size={24} />
      </div>
      <div className="mx-2 h-[2rem] w-[0.17rem] rounded-full bg-white" />
      <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]">
        <LinkedinIcon size={24} />
      </div>
      <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]">
        <TwitterIcon size={24} />
      </div>
    </div>
  );
}

function Icon() {}
