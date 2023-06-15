import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import HelpOrganizations from "../components/HelpOrganizations";

const Home = () => {
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
          <h1 className="main-title">Культура</h1>
          <div className="body-text-namu max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
            <p>
              Українська культура - це культура, яка відображає національну
              ідентичність, традиції та цінності українців. Вона має багатий
              історичний досвід і коріння, що зберігаються в культурі та
              мистецтві, які створюються українськими творцями.
            </p>
          </div>

          <div className="absolute -right-36 bottom-0 hidden sm:right-0 sm:block">
            <div className="w-40 sm:w-52 lg:w-80 xl:w-fit">
              <Image
                src="/images/ukrainian-woman.png"
                alt="ukrainian-woman"
                width="441"
                height="547"
              />
            </div>
            <span className="red-square bottom-0 right-20 -z-10 aspect-[833/534] w-96 sm:right-32 lg:w-[700px] xl:w-[833px]"></span>
          </div>
          <div className="absolute left-0 top-0 -z-10 max-w-xs sm:max-w-sm md:max-w-md lg:top-8 lg:max-w-2xl xl:w-auto xl:max-w-full 2xl:left-36">
            <Image
              src="/images/flowers-4.png"
              alt="flowers"
              width="885"
              height="882"
            />
          </div>
        </div>
      </section>
      <section className="mt-10 sm:mt-24 md:mt-36">
        <div className="container">
          <div className="grid min-h-[531px] gap-2.5 lg:grid-cols-3">
            <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col ">
              <div className="group relative h-full text-background">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/culture/national-wear.jpg"
                    alt="naitonal wear"
                    height="260"
                    width="410"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-50 flex h-full items-center justify-center bg-black/60 p-4 font-namu-body text-base opacity-0 transition-opacity group-hover:opacity-100 md:p-9">
                  <p>
                    Традиційний національний одяг українців має форми і стилі,
                    залежно від регіону та історичного періоду. Однак, основним
                    елементом національного вбрання є сорочка - вишиванка, яка
                    може мати різні візерунки та кольори.
                  </p>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center transition-opacity group-hover:opacity-0 ">
                  <h4>[&nbsp;Національний одяг&nbsp;]</h4>
                  <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-black to-transparent"></span>
                </div>
              </div>
              <div className="group relative h-full text-background">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/culture/ukrainian-cusine.jpg"
                    alt="ukrainian-cusine"
                    height="260"
                    width="410"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-50 flex h-full items-center justify-center bg-black/60 p-4 font-namu-body text-base opacity-0 transition-opacity group-hover:opacity-100 md:p-9">
                  <p>
                    Одна з найбільш різноманітних і смачних кухонь у світі. Вона
                    має багату культурну спадщину, що відображається в
                    традиційних національних стравах та кулінарних методах
                    приготування їжі.
                  </p>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center transition-opacity group-hover:opacity-0 ">
                  <h4>[&nbsp;Українські страви&nbsp;]</h4>
                  <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-black to-transparent"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
              <div className="group relative text-background lg:h-[59%]">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/culture/national-music.jpg"
                    alt="national-music"
                    height="260"
                    width="410"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-50 flex h-full items-center justify-center bg-black/60 p-4 font-namu-body text-base opacity-0 transition-opacity group-hover:opacity-100 md:p-9">
                  <p>
                    Українська народна музика має дуже глибокі історичні корені,
                    які зводяться до давніх часів козацтва та інших народних
                    традицій.
                  </p>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center transition-opacity group-hover:opacity-0 ">
                  <h4>[&nbsp;Народна музика&nbsp;]</h4>
                  <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-black to-transparent"></span>
                </div>
              </div>
              <div className="group relative text-background lg:h-[41%]">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/culture/traditional-poems.jpg"
                    alt="traditional-poems"
                    height="260"
                    width="410"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-50 flex h-full items-center justify-center bg-black/60 p-4 font-namu-body text-base opacity-0 transition-opacity group-hover:opacity-100 md:p-9">
                  <p>
                    Українська література має багату історію та спадщину,
                    включаючи багато видатних віршів.
                  </p>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center transition-opacity group-hover:opacity-0 ">
                  <h4>[&nbsp;Видатні вірші&nbsp;]</h4>
                  <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-black to-transparent"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
              <div className="group relative h-full text-background">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/culture/pictures.jpg"
                    alt="pictures"
                    height="260"
                    width="410"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-50 flex h-full items-center justify-center bg-black/60 p-4 font-namu-body text-base opacity-0 transition-opacity group-hover:opacity-100 md:p-9">
                  <p>
                    Це унікальна форма народного мистецтва, яка передає традиції
                    та культуру українського народу.
                  </p>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center transition-opacity group-hover:opacity-0 ">
                  <h4>[&nbsp;Малювання&nbsp;]</h4>
                  <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-black to-transparent"></span>
                </div>
              </div>
              <div className="group relative h-full text-background">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/culture/traditions.jpg"
                    alt="traditions"
                    height="260"
                    width="410"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-50 flex h-full items-center justify-center bg-black/60 p-4 font-namu-body text-base opacity-0 transition-opacity group-hover:opacity-100 md:p-9">
                  <p>
                    Українські традиції - це важлива складова культури та
                    історії України, яка передається з покоління в покоління.
                  </p>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center transition-opacity group-hover:opacity-0 ">
                  <h4>[&nbsp;Традиції&nbsp;]</h4>
                  <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-black to-transparent"></span>
                </div>
              </div>
            </div>
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
