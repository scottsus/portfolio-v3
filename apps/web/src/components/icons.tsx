import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  return (
    <main className="flex h-full w-1/3 flex-1 flex-col items-center justify-start gap-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col justify-start gap-y-4">
          <h1 className="w-full text-left text-4xl font-semibold">
            Scott Susanto
          </h1>
          <div className="flex items-center gap-x-4">
            <Link
              href="https://github.com/scottsus"
              target="_blank"
              className="brightness-0 filter transition-all hover:brightness-100"
            >
              <Image
                src="/logos/github.svg"
                alt="GitHub"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://huggingface.co/scottsus"
              target="_blank"
              className="brightness-0 filter transition-all hover:brightness-100"
            >
              <Image
                src="/logos/huggingface.svg"
                alt="Huggingface"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://linkedin.com/in/susantoscott"
              target="_blank"
              className="brightness-0 filter transition-all hover:brightness-100"
            >
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://x.com/susantoscott"
              target="_blank"
              className="brightness-0 filter transition-all hover:brightness-100"
            >
              <Image src="/logos/x.svg" alt="X" width={30} height={30} />
            </Link>
          </div>
        </div>
        <Image
          src="/images/scott-avatar.jpeg"
          alt="Scott"
          width={120}
          height={300}
          className="rounded-md"
        />
      </div>
    </main>
  );
}
