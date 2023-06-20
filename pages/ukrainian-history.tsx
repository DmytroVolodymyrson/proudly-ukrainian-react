import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

const UkrainianHistory = () => {
  return (
    <section className="mb-40 mt-12 md:mt-20 lg:mt-28 xl:mt-40">
      <div className="container relative flex flex-col ">
        <h1 className="main-title">Історія</h1>
        <div className="body-text-namu mt-6 max-w-lg lg:mt-10 lg:max-w-3xl">
          <p>
            Україна - це країна з багатою історією та культурою, яка продовжує
            розвиватися та шукати своє місце в світі. Ця країна має багато
            потенціалу та може стати однією з найбільш просунутих та успішних
            країн світу. Український народ зберігає свою національну свідомість
            та бажання жити вільно, що робить його сильним та незламним.
          </p>
        </div>
        <div className="relative ml-auto w-64  max-w-xs sm:absolute sm:-right-36 sm:-top-12 sm:w-auto md:-right-24 md:-top-24 md:max-w-sm lg:-right-60 lg:-top-40 lg:max-w-xl xl:-right-20 xl:-top-44 xl:max-w-full">
          <Image
            src="/images/bohdan-in-stone.png"
            alt="bohdan khmelnitsky"
            width="740"
            height="728"
          />
          <span className="red-square bottom-0  right-28 -z-10 aspect-[833/534] w-[112.5%] sm:right-52"></span>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default UkrainianHistory;
