import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Head from "next/head";
import MoviesTabs from "../components/moviesTabs";
import ContactForm from "../components/contactForm";
import ContactEmail from "../components/contactEmail";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Help Ukraine</title>
        <meta
          name="description"
          content="This is an example page with a meta description."
        />
      </Head>

      <section className="pt-[21rem]">
        <div className="container">
          <h2 className="pl-5 text-primary 2xl:leading-snug">
            <span>
              <span className="relative text-background">
                <span className="relative z-10">Організації</span>
                <span className="absolute -inset-x-6 -bottom-8 -top-40  bg-secondary-darker">
                  <span className="absolute bottom-0 left-0 opacity-30">
                    <Image
                      src="/images/flowers-2.png"
                      alt="flowers"
                      width="345"
                      height="328"
                    />
                  </span>
                  <span className="red-square -left-16 -top-16 -z-10 aspect-[602/385] w-[76%]"></span>
                </span>
              </span>
              <span> для </span>
            </span>
            <div className="text-right"> допомоги</div>
          </h2>
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
