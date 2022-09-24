import React from "react";

// import HeroImage from '../images/hero-image.png';
import HeroImage from "../images/Hero.png";

function HeroHome() {
    return (
        <section className="relative">
            {/* Illustration behind hero content */}
            <div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
                aria-hidden="true"
            >
                <svg
                    width="1360"
                    height="578"
                    viewBox="0 0 1360 578"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="illustration-01"
                        >
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1
                            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                        >
                            I'm Himanshi Joshi a{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                                Web Developer
                            </span>
                        </h1>

                        <div className=" sm:flex sm:items-center ">
                            <div className="flex justify-center mb-8">
                                <img
                                    className=" h-64 w-64 rounded-full object-cover "
                                    src="https://cdn.discordapp.com/attachments/1001549514194301019/1022874098277298377/IMG_20220923_194552.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="max-w-3xl mx-auto">
                                <p
                                    className="text-xl text-gray-600 mb-8"
                                    data-aos="zoom-y-out"
                                    data-aos-delay="150"
                                >
                                    Hi I am Himanshi joshi a web Developer i am
                                    currently studying in government polytechnic
                                    kashipur and I am learning coding from
                                    CodeYogi!!
                                </p>
                                <div
                                    className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                    data-aos="zoom-y-out"
                                    data-aos-delay="300"
                                >
                                    <div>
                                        <a
                                            className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                                            href="https://www.linkedin.com/feed/"
                                            target="_blank"
                                        >
                                            check out my LinkedIn
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 transition"
                                            href="https://github.com/"
                                            target="_blank"
                                        >
                                            Check out my Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div>
                        <div
                            className="relative flex justify-center mb-8"
                            data-aos="zoom-y-out"
                            data-aos-delay="450"
                        >
                            <div className="flex flex-col justify-center">
                                <img
                                    className="mx-auto"
                                    src={HeroImage}
                                    width="768"
                                    height="432"
                                    alt="Hero"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
