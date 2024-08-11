import React from "react";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-[#21e065]">your</span> digital
          profits to the next levet?
        </h1>
        <p className="text-white-200 text-lg md:mt-10 my-5 text-center">
          Buy out <span className="text-3xl text-[#21e065]">Pepeverse</span> today and let&apos;s have fun together!
        </p>
        <a href="mailto:pratiknavlani7572@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-noraml font-light">
          Copyright © 2024 by PepeVerse
        </p>
        <div className="flex items-center gap-3 lg:gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.img} width={48} height={48} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
