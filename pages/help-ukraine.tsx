import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import HelpOrganizations from "../components/HelpOrganizations";

const HelpUkraine = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Help Ukraine</title>
        <meta
          name="description"
          content="Explore organizations helping Ukraine, support military personnel and civilians affected by the conflict. Make a difference today."
        />
      </Head>

      <section className="pt-32 sm:pt-40 lg:pt-56 xl:pt-64">
        <div className="container">
          <h2 className="relative leading-snug max-xs:text-4xl sm:pl-5">
            <span>
              <span className="relative text-background ">
                <span className="relative z-10">{t("organizations")}</span>
                <span className="absolute -inset-x-1.5 -bottom-1 -top-20 bg-secondary-darker xs:-inset-x-3 xs:-bottom-3 sm:-bottom-4 lg:-inset-x-4 lg:-top-32 xl:-inset-x-6 xl:-bottom-8  xl:-top-40">
                  <span className="absolute bottom-0 left-0 w-[43.61%] opacity-30">
                    <Image
                      src="/images/flowers-2.png"
                      alt="flowers"
                      width="345"
                      height="328"
                    />
                  </span>
                  <span className="red-square -left-6 -top-6 -z-10 aspect-[602/385] w-[76%] sm:-left-8 sm:-top-8 lg:-left-10 lg:-top-10 xl:-left-20 xl:-top-20"></span>
                </span>
              </span>
              <span className="relative z-10"> {t("for")} </span>
              <span className="relative z-10 sm:hidden"> {t("help")} </span>
            </span>
            <div className="relative z-10 hidden sm:mr-40  sm:block sm:text-right  lg:mr-10  2xl:ml-[700px] 2xl:text-left">
              {t("help")}
            </div>

            <span className="absolute -bottom-4 right-0 -z-10 w-2/5 rotate-[-47.23deg] sm:-right-12 sm:-top-40 sm:bottom-0 sm:w-[34.45%] lg:-right-36 lg:-top-52">
              <Image
                alt="flowers"
                src="/images/flowers-3.png"
                width="430"
                height="542"
              />
            </span>
          </h2>
        </div>
      </section>
      <section className="mt-14 md:mt-16">
        <div className="container">
          <div className="flex max-w-4xl flex-col gap-3 lg:gap-3.5">
            <h4 className="text-primary">{t("dearFriends")}</h4>
            <p className="body-text-namu">{t("dearFriendsText")}</p>
          </div>
          <HelpOrganizations className="mt-16 md:mt-32" />
        </div>
      </section>
      <section className="mt-14 sm:mt-20 md:mt-32 lg:mt-40">
        <div className="body-text-namu container text-center text-primary">
          {t("ourCountryDeservesWin")}
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "organizations"])),
    },
  };
}

export default HelpUkraine;
