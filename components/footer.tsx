import Image from "next/image";
import loader from "../image-loader";
import logo from "../public/logo.png";

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
            href="mailto:support@catnapz.dev"
            target="_blank"
            className="space-x-2"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope" />
            <span>support@catnapz.dev</span>
          </a>
        </address>
        <Image
          loader={loader}
          src={logo}
          alt="catnapz Logo"
          height={100}
          width={100}
          placeholder="blur"
        />
      </div>
    </footer>
  );
};
