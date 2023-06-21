import Image from "next/image";
import { useTranslation } from "next-i18next";
import timeline from "./timeline.json";

function convertToRoman(number_: number) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let string_ = "";

  for (const index of Object.keys(roman)) {
    const q = Math.floor(number_ / roman[index as keyof typeof roman]);
    number_ -= q * roman[index as keyof typeof roman];
    string_ += index.repeat(q);
  }

  return string_;
}

export default function HistoryTimeline() {
  const { t } = useTranslation("history");

  return (
    <ul className="flex flex-col gap-10">
      {timeline.map((event, index) => {
        return (
          <li
            key={event.title}
            className="flex flex-col items-center gap-3 md:items-start"
          >
            <h4 className="text-center text-primary md:text-left">
              {convertToRoman(index + 1)}. {t(event.title)}
            </h4>
            <div className="flex flex-col-reverse items-center gap-6 md:flex-row lg:gap-12">
              <div className="body-text-namu relative max-w-lg pl-5 lg:max-w-2xl xl:max-w-4xl">
                <p>{t(event.description)}</p>
                <span className="absolute bottom-0 left-0 top-0 w-px bg-primary"></span>
              </div>
              <div className="flex w-full max-w-xs flex-col items-center  gap-3 text-center md:flex-row md:text-left">
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={`/images/history/${event.image.path}`}
                    alt="sarmats wariors"
                    height="199"
                    width="138"
                    className="md:w-full"
                  />
                </div>
                {event.image.description && (
                  <p className="w-full font-namu-body text-base">
                    {t(event.image.description)}
                  </p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
