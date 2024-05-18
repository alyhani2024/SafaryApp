import Breadcrumb from "@/components/Common/Breadcrumb";
import UserApiTable from "@/components/Table/UserApi";
import SingleTour from "@/components/Tour/SingleTour";
import TourDayForm from "@/components/Tour/TourDay";
import tourData from "@/components/Tour/tourData";
import TourHourForm from "@/components/Tour/tourhour";
import TodoComponentTour from "@/components/todo/Todotour";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TourHour Page | Tourrist Template for Tourism ",
  description: "This is Tourhour Page for Tourist Template",
  // other metadata
};

const TourHour = () => {
  return (
    <>

      <Breadcrumb
        pageName="Tour Section"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <TodoComponentTour/>

      <UserApiTable/>


      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {tourData.map((tour) => (
              <div
                key={tour.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleTour tour={tour} />
              </div>
            ))}
          </div>


   

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default TourHour;
