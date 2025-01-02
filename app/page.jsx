import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import Social from "@/components/ui/Social";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Aspiring Software Engineer</span>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Kwabena Asare Boström</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Driven by a passion for engineering practical software solutions,
              I am an aspiring software engineer with a strong foundation in
              diverse programming languages and cutting-edge technologies.
              Finally, I thrive on creating innovative and efficient systems
              that solve real-world problems.
            </p>
            {/*btn and socials  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>
                  <a href="https://drive.google.com/file/d/1JTD8LRmavAzKVRLEn4HCwo6ReEiTGsf5/view?usp=sharing">
                    Download CV
                  </a>
                </span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
