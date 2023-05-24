import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative flex h-screen">
        <div className="container m-auto flex flex-col items-center gap-5">
          <h1 className="font-namu-title text-7xl text-primary xs:text-8xl md:text-[150px] md:leading-tight lg:text-[220px]">
            {t("ukraine")}
          </h1>
          <h3 className="font-namu-body text-background">
            {t("ukrainianHashtags")}
          </h3>
        </div>
        <Image
          alt="wheat"
          fill={true}
          src="/images/wheat.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </section>
      <section className="relative py-[220px]">
        <div id="taras-section-bg" className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0"
            height="0"
            viewBox="0 0 1440.62 578.28"
          >
            <clipPath id="svgPath-1" clipPathUnits="objectBoundingBox">
              <path
                d="M0,0V578.28s764.8-199.46,1440.62,0V0Z"
                transform="scale(0.00069414557,0.00172926609)"
                fill="none"
              />
            </clipPath>
          </svg>
          <Image
            alt="shevchenko"
            className="absolute bottom-0 left-0"
            src="/images/taras-group.png"
            width="501"
            height="531"
          />
        </div>
        <div className="container">
          <div className="relative">
            <div className="gap relative z-10 ml-auto flex max-w-[800px] flex-col gap-8 text-right font-cassandra text-[34px]">
              <p>“{t("tarasQuote")}”</p>
              <p>{t("tarasName")}</p>
            </div>

            <span className="absolute -right-[1%] top-1/2 aspect-[139/87] w-[56%] -translate-y-1/2 border border-primary"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default Home;
