import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function History() {
  const { t } = useTranslation();

  return (
    <section className="mt-20 sm:mt-28 md:mt-20 xl:mt-36">
      <div className="container relative flex items-end gap-32">
        <div className="flex flex-col gap-[305px] sm:gap-6 md:w-3/4 lg:max-w-[700px] lg:gap-10 2xl:max-w-[950px]">
          <h2 className="relative flex w-5/6 flex-col items-start  leading-tight  sm:w-3/4 md:w-4/5 lg:w-auto">
            <div className="relative inline text-primary">
              {t("history")}
              <div className="absolute -right-[13%] top-[19%] aspect-square w-[30.61%] -rotate-90">
                <Image
                  src="/images/kolosok.svg"
                  alt="kolosok"
                  width="139"
                  height="138"
                />
              </div>
            </div>
            <span className="stroke-text relative ml-auto lg:w-auto xl:-right-48 2xl:right-14">
              {t("ofUkraine")}
            </span>

            <span className="red-square left-[100px] top-[53%] -z-10 aspect-[833/534] w-[360px] sm:left-44 sm:top-20 sm:w-[460px] md:w-[525px]  lg:left-72 lg:top-32 lg:w-[90%] xl:top-48 xl:w-[833px]"></span>
          </h2>
          <div className="flex flex-col gap-8 lg:gap-14">
            <div className="body-text-namu ">
              <p>{t("ukraineHistorySectionDescription")}</p>
            </div>
            <Link href="/ukrainian-history" className="btn">
              {t("seeMore")}
            </Link>
          </div>
        </div>
        <div className="absolute left-4 top-36 w-52 sm:-right-8 sm:-top-10 sm:left-auto sm:w-40 md:bottom-20 md:top-auto md:w-52 lg:right-0 lg:w-64 xl:relative xl:-bottom-0.5 xl:-right-24 xl:ml-auto xl:w-auto 2xl:right-0 2xl:ml-0">
          <Image
            src="/images/fight-and-overcome.webp"
            alt="fight-and-overcome"
            width="428"
            height="535"
            sizes="(max-width: 768px) 208px, (max-width: 1024px) 208px, (max-width: 1280px) 256px, 428px"
          />
        </div>
      </div>
    </section>
  );
}
