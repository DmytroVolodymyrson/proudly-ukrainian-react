import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import SightsSlider from "../components/SightsSlider";
import CultureGrid from "../components/CultureGrid";

const UkrainianCulture = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Ukrainian Culture</title>
        <meta
          name="description"
          content="This is an example page with a meta description."
        />
      </Head>

      <section>
        <div className="container relative flex flex-col gap-4 pb-10 pt-10 sm:gap-9 sm:pt-20 md:pb-16 lg:pb-28 lg:pt-44 xl:pb-52">
          <h1 className="main-title">{t("cultureTitle")}</h1>
          <div className="body-text-namu max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
            <p>{t("cultureDescription")}</p>
          </div>

          <div className="absolute -right-36 bottom-0 hidden sm:right-0 sm:block">
            <div className="w-40 sm:w-52 lg:w-80 xl:w-fit">
              <Image
                src="/images/ukrainian-woman.webp"
                alt="ukrainian-woman"
                width="441"
                height="547"
              />
            </div>
            <span className="red-square bottom-0 right-20 -z-10 aspect-[833/534] w-96 sm:right-32 lg:w-[700px] xl:w-[833px]"></span>
          </div>
          <div className="absolute left-0 top-0 -z-10 max-w-xs sm:max-w-sm md:max-w-md lg:top-8 lg:max-w-2xl xl:w-auto xl:max-w-full 2xl:left-36">
            <Image
              src="/images/flowers-4.webp"
              alt="flowers"
              width="885"
              height="882"
            />
          </div>
        </div>
      </section>
      <section className="mt-10 sm:mt-24 md:mt-36">
        <div className="container">
          <CultureGrid />
        </div>
      </section>
      <section className="mt-10 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-36">
        <div className="container">
          <SightsSlider />
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "culture",
        "sights",
      ])),
    },
  };
}

export default UkrainianCulture;
