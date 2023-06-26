import IconMail from "~icons/pu/mail";
import IconLinkedin from "~icons/mdi/linkedin";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Head from "next/head";
import ContactSection from "../components/ContactSection";

const HelpUkraine = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("contactsMetaTitle")}</title>
        <meta name="description" content={`${t("contactsMetaDescription")}`} />
        <meta property="og:title" content={`${t("contactsMetaTitle")}`} />
        <meta
          property="og:description"
          content={`${t("contactsMetaDescription")}`}
        />
        <meta
          property="og:image"
          content="https://www.proudlyukrainian.com/images/flowers.svg"
        />
      </Head>

      <section className="mt-14 sm:mt-20 lg:mt-32">
        <div className="container">
          <ContactSection />
        </div>
      </section>
      <section className="mt-20 lg:mt-28">
        <div className="container">
          <div className="mx-auto mt-10 flex w-2/3 flex-col justify-center gap-6 text-center sm:flex-row md:w-1/2 md:gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center overflow-hidden rounded">
                <Image
                  src="/images/Inesa.webp"
                  alt="inesa ponberezhba"
                  width="313"
                  height="269"
                  sizes="(max-width: 640px) 230px, (max-width: 1024px) 176px, (max-width: 1280px) 240px, 313px"
                />
              </div>
              <h3 className="text-primary">{t("inesa")}</h3>
              <span>{t("design")}</span>
              <ul className="flex items-center gap-1">
                <a href="mailto:poberezhnainesa5@gmail.com">
                  <IconMail className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/inesa-poberezhna-181a8b257/">
                  <IconLinkedin className="text-2xl" />
                </a>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center overflow-hidden rounded">
                <Image
                  src="/images/Dmytro.webp"
                  alt="inesa ponberezhba"
                  width="313"
                  height="269"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 176px, (max-width: 1280px) 240px, 313px"
                />
              </div>
              <h3 className="text-primary">{t("dmytro")}</h3>
              <span>{t("development")}</span>
              <ul className="flex items-center gap-1">
                <a href="mailto:dimaafanasiev3@gmail.com">
                  <IconMail className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/dmytro-afanasiev-216574219/">
                  <IconLinkedin className="text-2xl" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default HelpUkraine;
