import Link from "next/link";
import Image from "next/image";

const BookTourGuides = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden mt-5 mb-5 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <Image
          src={"/images/Home/Tour.jpg"}
          layout="fill"
          objectFit="cover"
          alt="img"
          className="absolute inset-0 w-full h-full"
        />
        <div className="container relative z-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center text-white">
                <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Book Your Tour Guide
                </h1>
                <p className="mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                  The Safary application aims to revolutionize the tourism
                  industry by connecting tourists with local tour guides in
                  Egypt. This innovative platform will provide tourists with
                  easy access to experienced tour guides, enabling them to
                  explore Egypts rich cultural heritage and historical
                  landmarks.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/Tourist/BookTourGuides"
                    className="transition duration-1500 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white ease-in-out hover:bg-orange-500/80"
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
