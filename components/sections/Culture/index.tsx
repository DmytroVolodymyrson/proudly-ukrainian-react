import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Culture() {
  const { t } = useTranslation();

  return (
    <section className="mt-40 sm:mt-52 md:mt-48 lg:mt-52 xl:mt-80">
      <div className="container relative flex items-start gap-10 lg:gap-16">
        <div className="absolute right-8 top-9 z-10 w-48 grow rounded sm:relative sm:inset-0  sm:-top-16 sm:min-w-[150px] md:min-w-[230px] lg:min-w-[300px] xl:min-w-fit ">
          <Image
            src="/images/black-ukraine.webp"
            width="489"
            height="687"
            alt="black-ukraine"
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 230px, (max-width: 1280px) 300px, 489px"
          />
        </div>

        <div className="relative -mt-11 flex shrink flex-col gap-8 lg:gap-14">
          <div className="flex flex-col gap-80 sm:gap-6 md:relative lg:gap-10">
            <h2 className="stroke-text">{t("culture")}</h2>
            <div className="body-text-namu">
              <p>{t("cultureSectionDescription")}</p>
            </div>

            <div className="red-square -left-[16%] -top-6 -z-10 aspect-[901/938] w-[88%] xs:-top-[6%] xs:w-full sm:-bottom-12  sm:-top-[14%] sm:aspect-[901/760] sm:w-auto md:w-[129.64%] xl:aspect-[901/938] 2xl:aspect-[901/473]">
              <Image
                src="/images/poppy-flowers.webp"
                alt="poppy-flowers"
                className="h-full w-full object-cover"
                width="901"
                height="938"
                sizes="(max-width: 380px) 300px, (max-width: 640px) 340px, (max-width: 1024px) 602px, (max-width: 1280px) 812px, 901px"
              />
            </div>
          </div>
          <Link href="/ukrainian-culture" className="btn">
            {t("seeMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
