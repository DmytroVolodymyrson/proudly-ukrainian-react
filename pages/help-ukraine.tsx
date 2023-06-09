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
        <title>{t("helpUkraineMetaTitle")}</title>
        <meta
          name="description"
          content={`${t("helpUkraineMetaDescription")}`}
        />
        <meta property="og:title" content={`${t("helpUkraineMetaTitle")}`} />
        <meta
          property="og:description"
          content={`${t("helpUkraineMetaDescription")}`}
        />
        <meta
          property="og:image"
          content="https://www.proudlyukrainian.com/images/organizations/come-back-alive.webp"
        />
      </Head>

      <section className="pt-32 sm:pt-40 lg:pt-56 xl:pt-64">
        <div className="container">
          <h2 className="relative leading-snug max-xs:text-4xl sm:pl-5">
            <span>
              <span className="relative text-background ">
                <span className="relative z-10">{t("organizations")}</span>
                <span className="absolute -inset-x-1.5 -bottom-1 -top-20 bg-secondary-darker xs:-inset-x-3 xs:-bottom-3 sm:-bottom-4 lg:-inset-x-4 lg:-top-32 xl:-inset-x-6 xl:-bottom-8  xl:-top-40">
                  <span className="absolute bottom-0 left-0 max-h-full w-[43.61%] overflow-hidden opacity-30">
                    <Image
                      priority={true}
                      src="/images/flowers-2.webp"
                      alt="flowers"
                      width="345"
                      height="328"
                      sizes="(max-width: 380px) 109px, (max-width: 640px) 149px, (max-width: 1024px) 184px, (max-width: 1280px) 290px, 345px"
                    />
                  </span>
                  <span className="red-square -left-6 -top-6 -z-10 aspect-[602/385] w-[76%] sm:-left-8 sm:-top-8 lg:-left-10 lg:-top-10 xl:-left-20 xl:-top-20"></span>
                </span>
              </span>
              <div className=" inline gap-2.5 max-[330px]:flex">
                <span className="relative z-10"> {t("for")} </span>
                <span className="relative z-10 block text-right xs:inline sm:hidden">
                  {t("help")}
                </span>
              </div>
            </span>
            <div className="relative z-10 hidden sm:mr-40  sm:block sm:text-right  lg:mr-10  2xl:ml-[700px] 2xl:text-left">
              {t("help")}
            </div>

            <span className="absolute -bottom-4 right-0 -z-10 w-2/5 rotate-[-47.23deg] sm:-right-12 sm:-top-40 sm:bottom-0 sm:w-[34.45%] lg:-right-36 lg:-top-52">
              <Image
                priority={true}
                alt="flowers"
                src="/images/flowers-3.webp"
                width="430"
                height="542"
                sizes="(max-width: 380px) 107px, (max-width: 640px) 139px, (max-width: 768px) 209px, (max-width: 1024px) 254px, (max-width: 1280px) 342px, 430px"
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "organizations"])),
    },
  };
}

export default HelpUkraine;
