import { SocialIcon } from "./social-icon";

export function Footer() {
  return (
    <div className="w-full border-t-2 border-[#252525] py-6">
      <div className="mx-auto flex w-[11/12] max-w-[720px] items-center justify-between">
        <p className="text-lg text-[#ececec]">Insert cool quote here</p>
        <div className="flex">
          <SocialIcon
            href="https://linkedin.com/in/susantoscott"
            src="/logos/linkedin.svg"
            alt="LinkedIn"
          />
          <SocialIcon
            href="https://github.com/scottsus"
            src="/logos/github-colored.svg"
            alt="GitHub"
          />
          <SocialIcon
            href="https://huggingface.co/scottsus"
            src="/logos/huggingface.svg"
            alt="Huggingface"
          />
          <SocialIcon
            href="https://x.com/susantoscott"
            src="/logos/x.svg"
            alt="X"
          />
        </div>
      </div>
    </div>
  );
}
