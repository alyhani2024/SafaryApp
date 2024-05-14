import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import  './index.scss';
const BookTourGuides = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden   pb-16 pt-[120px]   md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* <Image src={"/images/Home/pexels-omar-elsharawy-5609738.jpg"} width={2000} height={2000} alt="img" className="imgHome  absolute  top-0 "/> */}
        <video autoPlay muted loop className="video-background imgHome  absolute  top-0">
          <source
            src="https://video.wixstatic.com/video/11062b_9de2dbff3dda403b944bb98c41cb5764/1080p/mp4/file.mp4"
            type="video/mp4"
          /> </video>
        <div className="container ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-dark sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Safary for tourism in our world 
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-dark sm:text-lg md:text-xl">
                The Safary application aims to revolutionize the tourism industry by connecting tourists with local tour guides in Egypt. 
                This innovative platform will provide tourists with easy access to experienced tour guides, enabling them to explore Egypt rich cultural heritage and historical landmarks.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/Tourist/BookTourGuides"
                    className="transition duration-1500  rounded-sm bg-orange-500 px-8 py-4 text-base font-semibold text-white  ease-in-out hover:bg-orange-500/80 "
                  >
                    <span>Book Now</span>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookTourGuides;
