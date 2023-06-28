import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import dynamic from "next/dynamic";

const MoviesTabs = dynamic(async () => import("../components/MoviesTabs"));
const ContactSection = dynamic(
  async () => import("../components/ContactSection")
);

const SimonenkoSection = dynamic(
  async () => import("../components/sections/Simonenko")
);
const CultureSection = dynamic(
  async () => import("../components/sections/Culture")
);
const HistorySection = dynamic(
  async () => import("../components/sections/History")
);
const ShevchenkoSection = dynamic(
  async () => import("../components/sections/Shevchenko")
);

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("proudlyUkrainianMetaTitle")}</title>
        <meta
          name="description"
          content={`${t("proudlyUkrainianMetaDescription")}`}
        />
        <meta
          property="og:title"
          content={`${t("proudlyUkrainianMetaTitle")}`}
        />
        <meta
          property="og:description"
          content={`${t("proudlyUkrainianMetaDescription")}`}
        />
        <meta
          property="og:image"
          content="https://www.proudlyukrainian.com/images/ukraine-preview.jpg"
        />
        <meta property="og:url" content="https://www.proudlyukrainian.com/" />
      </Head>

      <section className="relative flex h-[100svh]">
        <div className="container m-auto flex flex-col items-center gap-5">
          <h1 className="font-namu-title text-7xl text-primary xs:text-8xl md:text-[150px] md:leading-tight lg:text-[220px]">
            {t("ukraine")}
          </h1>
          <div className="font-namu-body text-sm text-background xs:text-base md:text-xl lg:text-2xl">
            {t("ukrainianHashtags")}
          </div>
        </div>
        <Image
          priority={true}
          alt="wheat"
          fill={true}
          loading={"eager"}
          src="/images/wheat.webp"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </section>
      <ShevchenkoSection />
      <HistorySection />
      <CultureSection />
      <section className="mt-20 sm:mt-32 md:mt-48 lg:mt-72 xl:mt-[340px] 2xl:mt-40">
        <div className="container">
          <h3>{t("legendaryUkrainianMovies")}</h3>
          <MoviesTabs className="mt-6 lg:mt-11" />
        </div>
      </section>
      <SimonenkoSection />
      <section className="mt-16 sm:mt-20 md:mt-28 lg:mt-36">
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "movies"])),
    },
  };
}

export default Home;
