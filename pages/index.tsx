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
        <Image
          src="/images/red-square.svg"
          alt="red-square"
          className="absolute left-20 top-32"
          width="757"
          height="485"
        />
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
            src="/images/shevchenko.png"
            width="357"
            height="498"
          />

          <Image
            fill={true}
            alt="paper-bg-1"
            src="/images/paper-bg-1.png"
            className="absolute inset-0 -z-30 h-full w-full opacity-50"
          />
        </div>
        <div className="container">
          <div className="gap relative z-10 ml-auto flex max-w-[800px] flex-col gap-8 text-right font-namu-title text-3xl">
            <p>“tarasQuote”</p>
            <p>tarasName</p>

            <Image
              src="/images/kolosok.svg"
              alt="kolosok"
              className="absolute bottom-2 right-4 -z-10 translate-x-1/2 translate-y-1/2"
              width="200"
              height="200"
            />
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
