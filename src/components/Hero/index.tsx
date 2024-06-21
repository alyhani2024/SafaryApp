import { ArrowDown } from "lucide-react";
import Link from "next/link";
import './index.scss';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <video autoPlay muted loop className="video-background absolute top-0">
          <source
            src="https://video.wixstatic.com/video/11062b_9de2dbff3dda403b944bb98c41cb5764/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[900px] text-center bg-transparent-background p-8 rounded-lg">
                <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-4xl md:leading-tight text-shadow-lg text-orange-400">
                  Safary for tourism in our world 
                </h1>
                <p className="mb-12 text-lg leading-relaxed text-dark sm:text-xl md:text-1xl text-shadow-md text-white">
                  The Safary application aims to revolutionize the tourism industry by connecting tourists with local tour guides in Egypt. 
                  This innovative platform will provide tourists with easy access to experienced tour guides, enabling them to explore Egypts rich cultural heritage and historical landmarks.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#features"
                    className="transition duration-1500 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white ease-in-out hover:bg-orange-500/80"
                  >
                    <span><ArrowDown className="display: inline;" /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#FFA500" stopOpacity="0" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#FFA500" stopOpacity="0" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-82.1107 72.3303C-54.3401 66.4798 13.3965 64.9086 62.1783 105.427C123.155 156.076 141.59 162.093 176.333 166.607C211.076 171.12 249.718 183.657 274.889 212.24"
              stroke="url(#paint3_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.889"
                y1="2.24023"
                x2="184.889"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.889"
                y1="2.24023"
                x2="156.889"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.889"
                y1="2.24023"
                x2="125.889"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="96.8887"
                y1="2.24023"
                x2="96.8887"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA500" />
                <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
