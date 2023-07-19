import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUsPage = () => {
  return (
    <div className="text-center grow flex flex-col justify-center">
      <h2>We are purrfecting this page right meow.</h2>
      <h2>Come back later :)</h2>
    </div>
  );
};

export default AboutUsPage;
