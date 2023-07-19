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
    <div className="text-center grow flex flex-col justify-center">
      <h1 className="text-3xl font-bold">catnapz</h1>
      <h2>Clawlity apps made with cattitude.</h2>
      <h2>Under Construction</h2>
    </div>
  );
}
