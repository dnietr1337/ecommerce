import React from 'react';

import HeroImg from '../img/woman_hero.png';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=" h-[800px] bg-hero bg-no-repeat  bg-cover bg-center  py-24 ">
      <div className="container mx-auto flex justify-around h-full ">
        <div className="flex flex-col justify-center items-start w-full ">
          <div className="font-semibold flex items-center uppercase ">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4  text-black  [text-shadow:_0px_0px_80px_rgba(25,49,23,0.93)] uppercase">
            2025 spring style
            <p className="font-semibold">WOMENS</p>
          </h1>
          <Link
            to={'/'}
            className="self-start uppercase font-semibold border-b-2 border-primary "
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block lg:mt-[9.6rem] xl:mt-[7.3rem]">
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
