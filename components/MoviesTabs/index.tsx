import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import movies from "./movies.json";

interface Properties {
  className: string;
}

export default function MoviesTabs({ className }: Properties) {
  const { t } = useTranslation("movies");

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleChangeTab = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <Tab.Group as="div" className={className}>
      <Tab.List className="xl:scrollbar-hide flex flex w-full  flex-wrap gap-2.5 overflow-x-auto   ">
        {movies.map((movie, movieIndex) => {
          return (
            <Tab as={Fragment} key={movie.name}>
              {({ selected }) => {
                return (
                  <button
                    onClick={() => {
                      handleChangeTab(movieIndex);
                    }}
                    className={classNames(
                      "body-text-namu w-full rounded px-4 py-2 text-background hover:bg-primary sm:w-auto sm:w-fit md:py-3.5 xl:whitespace-nowrap",
                      selected ? "bg-primary" : "bg-secondary"
                    )}
                    style={{ order: movieIndex }}
                  >
                    {t(movie.name)}
                  </button>
                );
              }}
            </Tab>
          );
        })}

        <Tab.Panels
          className="mt-2 w-full sm:!order-last sm:mt-4 lg:mt-14"
          style={{ order: selectedTabIndex }}
        >
          {movies.map((movie) => {
            return (
              <Tab.Panel
                key={movie.name}
                className="flex min-h-[203px] w-full flex-col items-start justify-start gap-4 sm:flex-row sm:gap-6 md:min-h-[244px] lg:min-h-[230px] lg:gap-11 xl:min-h-[248px] "
              >
                <div className="w-full max-w-xl sm:w-1/3 md:w-[46.47%]">
                  <Swiper
                    modules={[FreeMode, Autoplay]}
                    autoplay
                    slidesPerGroup={1}
                    slidesPerView={2}
                    spaceBetween={1}
                    slidesOffsetAfter={0}
                    mousewheel={true}
                    freeMode
                    breakpoints={{
                      1280: {
                        slidesPerView: 2.3133,
                      },
                      1024: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                      },
                      768: {
                        slidesPerView: 1.4,
                      },
                      650: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                    }}
                  >
                    {movie.images.map((image) => {
                      return (
                        <SwiperSlide key={image}>
                          <Image
                            src={image}
                            alt={image}
                            width="249"
                            height="249"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="body-text-namu">{t(movie.description)}</div>
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.List>
    </Tab.Group>
  );
}
