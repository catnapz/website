import type { Metadata } from "next";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "catnapz website",
  referrer: "origin-when-cross-origin",
  keywords: ["catnapz", "apps"],
  title: {
    template: "%s | catnapz",
    default: "catnapz",
  },
};

export default function HomePage() {
  return (
    <div className="align-middle dark:bg-on-surface flex flex-grow flex-col items-center justify-center">
      <h1 className="text-left text-3xl font-bold">catnapz</h1>
      <h2>Clawlity apps made with cattitude.</h2>
      <h2>Under Construction</h2>
    </div>
  );
}
