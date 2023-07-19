import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#23ACEC]">
      <div className="container mx-auto flex justify-between">
        <address className="flex w-fit flex-col space-y-2 self-center">
          <a
            title="GitHub"
            href="https://www.github.com/catnapz"
            target="_blank"
            className="space-x-2"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" />
            <span>github.com/catnapz</span>
          </a>
          <a
            title="email"
            href="mailto:support@catnapz.app"
            target="_blank"
            className="space-x-2"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope" />
            <span>support@catnapz.app</span>
          </a>
        </address>
        <Image
          src="/logo.png"
          alt="Organization Logo"
          height={100}
          width={100}
        />
      </div>
    </footer>
  );
};
