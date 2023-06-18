import Image from "next/image";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import particularities from "./particularities.json";

export default function CultureGrid() {
  const { t } = useTranslation("culture");

  return (
    <div className="grid min-h-[531px] gap-2.5 sm:grid-rows-6 md:grid-cols-2 lg:grid-cols-3">
      {particularities.map((part, index) => {
        return (
          <div
            key={part.title}
            className={classNames(
              "group relative h-full rounded text-background",
              {
                "row-span-4": index === 1,
                "row-span-2": index === 5,
                "row-span-3": index !== 5 && index !== 1,
              }
            )}
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src={`/images/culture/${part.image}`}
                alt="national wear"
                height="260"
                width="410"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative z-20 flex h-full items-center justify-center bg-black/60 p-4 font-namu-body text-base opacity-0 transition-opacity group-hover:opacity-100 md:p-9">
              <p>{t(part.description)}</p>
            </div>
            <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center transition-opacity group-hover:opacity-0">
              <h4>[&nbsp;{t(part.title)}&nbsp;]</h4>
              <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-black to-transparent"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
