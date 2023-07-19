import Image from "next/image";

const contactDetails = [
  {
    title: "GitHub",
    href: "https://www.github.com/catnapz",
    label: "github.com/catnapz",
    icon: "fa-brands fa-github",
  },
  {
    title: "Email",
    href: "mailto:support@catnapz.app",
    label: "support@catnapz.app",
    icon: "fa-solid fa-envelope",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-brand">
      <div className="container mx-auto flex justify-between">
        <address className="flex w-fit flex-col space-y-2 self-center">
          {contactDetails.map((detail, idx) => (
            <a
              key={idx}
              title={detail.title}
              href={detail.href}
              target="_blank"
              className="space-x-2 underline hover:font-medium text-on-primary"
              rel="noreferrer"
            >
              <i className={detail.icon} />
              <span>{detail.label}</span>
            </a>
          ))}
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
