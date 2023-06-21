import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HistoryTimeline from "../components/HistoryTimeline";

const UkrainianHistory = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="mt-12 md:mt-20 lg:mt-28 xl:mt-40">
        <div className="container relative flex flex-col ">
          <h1 className="main-title">{t("historyTitle")}</h1>
          <div className="body-text-namu mt-6 max-w-lg lg:mt-10 lg:max-w-3xl">
            <p>{t("historyDescription")}</p>
          </div>
          <div className="relative ml-auto w-64  max-w-xs sm:absolute sm:-right-36 sm:-top-12 sm:w-auto md:-right-24 md:-top-24 md:max-w-sm lg:-right-60 lg:-top-40 lg:max-w-xl xl:-right-20 xl:-top-44 xl:max-w-full">
            <Image
              src="/images/bohdan-in-stone.webp"
              alt="bohdan khmelnitsky"
              width="740"
              height="728"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 576px, 740px"
            />
            <span className="red-square bottom-0  right-28 -z-10 aspect-[833/534] w-[112.5%] sm:right-52"></span>
          </div>
        </div>
      </section>
      <section className="mt-16 sm:mt-32 md:mt-40 lg:mt-60 xl:mt-96 2xl:mt-[414px]">
        <div className="container">
          <HistoryTimeline />
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "history"])),
    },
  };
}

export default UkrainianHistory;
