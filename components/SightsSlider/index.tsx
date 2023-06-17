import IconArrowLeft from "~icons/pu/arrow-left";
import IconArrowRight from "~icons/pu/arrow-right";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Navigation, EffectFade } from "swiper";
import sights from "./sights.json";
import "swiper/css";
import "swiper/css/effect-fade";

export default function SightsSlider() {
  const { t } = useTranslation("sights");

  const previousButtonReference = useRef(null);
  const nextButtonReference = useRef(null);

  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      spaceBetween={50}
      navigation={{
        prevEl: previousButtonReference.current,
        nextEl: nextButtonReference.current,
      }}
      className="relative"
      effect="fade"
      autoHeight={true}
    >
      {sights.map((sight) => {
        return (
          <SwiperSlide key={sight.name}>
            <div className="relative z-10 bg-background pb-5">
              <h4 className="pr-16 text-primary">{t(sight.name)}</h4>
              <div className="mt-4 flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:items-stretch lg:gap-16">
                <ul className="body-text-namu list-disc pl-5 md:mt-4 md:w-[52.62%] xl:mt-10">
                  {t(sight.description)
                    .split("\\")
                    .map((point) => {
                      return <li key={point}>{point}</li>;
                    })}
                </ul>
                <div className="relative w-1/2 md:w-[40.38%]">
                  <Image
                    src={`/images/sights/${sight.image}`}
                    alt={t(sight.name)}
                    width="504"
                    height="336"
                    className="w-full"
                  />
                  <span className="red-square -inset-y-2 right-[56.74%] -z-10 w-[92.6%] md:-inset-y-4 md:w-[113.6%]"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="absolute right-0 top-2 z-10 flex gap-2 text-xl sm:gap-4 lg:top-0">
        <button ref={previousButtonReference} className="disabled:opacity-50">
          <IconArrowLeft />
        </button>
        <button ref={nextButtonReference} className="disabled:opacity-50">
          <IconArrowRight />
        </button>
      </div>
    </Swiper>
  );
}
