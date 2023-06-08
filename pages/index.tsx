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
        <title>Proudly Ukrainian</title>
        <meta
          name="description"
          content="Discover Ukraine’s rich history and diverse culture."
        />
      </Head>

      <section className="relative flex h-screen">
        <div className="container m-auto flex flex-col items-center gap-5">
          <h1 className="font-namu-title text-7xl text-primary xs:text-8xl md:text-[150px] md:leading-tight lg:text-[220px]">
            {t("ukraine")}
          </h1>
          <div className="font-namu-body text-sm text-background xs:text-base md:text-xl lg:text-2xl">
            {t("ukrainianHashtags")}
          </div>
        </div>
        <Image
          alt="wheat"
          fill={true}
          src="/images/wheat.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </section>
      <section className="relative pb-28 pt-24 sm:py-28 md:py-36 lg:pb-[213px] lg:pt-[237px]">
        <div className="absolute inset-0">
          <svg
            width="0"
            height="0"
            viewBox="0 0 1398 612"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="svgPath-1" clipPathUnits="objectBoundingBox">
              <path
                d="M1388.14 54.2941C1383.3 54.2941 1377.97 50.0547 1373.62 48.5709C1370.42 47.4686 1366.28 46.1967 1362.86 45.6456C1351.45 43.9498 1341.01 48.2741 1329.98 48.6981C1316.49 49.2068 1306.1 75.0004 1292.73 74.3645C1286.8 74.0677 1282.73 74.5341 1277.18 71.6936C1271.8 68.8955 1272.56 66.8182 1266.8 66.3095C1263.6 67.5389 1260.28 68.3868 1256.8 68.8531C1252.89 68.7684 1248.97 68.6836 1245.06 68.6836C1239.3 68.6836 1230.55 69.6586 1224.68 68.8531C1219.19 68.09 1215.33 66.0128 1209.57 65.7584C1203.91 65.504 1198.1 65.8856 1192.39 65.8432C1173.09 65.8432 1167.59 59.0977 1157.42 74.8687C1152.42 79.1375 1148.92 78.3687 1137.42 79.1375C1126.92 78.3687 1126.2 81.766 1118.26 81.978C1110.33 82.1899 1102.88 82.8259 1096.19 79.1375C1092.55 77.145 1090.49 74.2197 1086.35 72.5239C1081.73 70.6161 1078.2 71.464 1072.93 70.1074C1068.25 68.8779 1059.95 67.0549 1055.92 64.9352C1041.03 57.0497 1033.57 66.1223 1014.92 64.9352C998.925 60.3687 966.864 56.7953 966.864 56.7953C959.145 55.4811 951.101 56.5834 943.383 56.541C930.935 56.4986 921.967 54.6332 911.748 49.4186C903.703 45.2639 891.854 44.5856 885.222 39.6678C882.559 37.7176 881.689 33.0542 878.863 31.4856C874.46 29.0267 859.567 31.0192 855.218 31.6976C839.836 34.1141 830.704 33.4358 814.506 31.6976C804.45 30.5953 788.579 29.069 779.773 32.5031C765.858 37.8872 757.216 44.7552 740.529 45.1791C727.755 45.5183 720.091 47.9349 712.318 55.8203C705.741 62.4763 704.056 65.9103 694.435 69.5987C680.466 74.8981 685.304 73.1598 674.378 67.6484C665.844 63.3666 651.512 37.4633 642.109 35.9795C635.912 35.0044 633.249 32.715 626.183 33.6053C616.181 34.8772 609.985 37.0394 599.005 36.7003C594.602 36.5731 592.645 36.6154 589.167 35.1316C585.525 33.563 582.753 28.6028 578.676 26.8646C570.251 23.261 555.63 24.4057 546.933 28.0093C540.736 30.5954 540.845 32.7999 534.268 34.0293C528.669 35.0468 522.255 32.6727 516.657 33.563C510.949 34.4533 507.579 39.5406 502.307 40.6005C495.241 42.0419 490.349 39.2863 484.098 36.6578C465.998 29.0267 451.865 8.84668 429.688 10.6273C424.144 11.0936 419.252 11.8992 413.654 10.7969C405.772 9.27063 400.608 4.69202 392.672 3.08099C377.942 0.0709229 362.831 4.18323 348.318 5.32788C337.774 6.13336 326.957 4.64966 316.521 6.1759C311.846 6.89661 308.096 8.1684 303.312 8.42279C294.942 8.88916 286.027 7.06616 277.874 8.67719C274.287 24.1937 276.896 41.3212 270.808 56.1595C257.219 59.7631 248.577 52.8527 237.542 48.9948C219.388 42.5931 192.645 42.3812 174.001 47.7653C165.141 50.309 158.673 56.4563 149.65 51.92C146.986 50.6058 147.53 48.9948 144.812 48.0621C141.497 46.9174 136.605 48.1045 132.963 47.6805C125.571 46.7479 123.994 43.9921 118.341 41.4908C112.58 38.9471 105.079 38.3959 98.8278 36.7426C80.4014 31.8671 60.0724 27.8821 41.4829 33.6478C32.6774 36.4034 25.3392 39.3287 15.8815 39.4983C8.5979 39.6255 1.53174 38.4384 -4.66479 41.1093C-6.78467 41.9996 -8.14343 43.9073 -10.3176 44.84C-12.818 45.8999 -15.264 45.3487 -17.8187 46.663C-22.8195 49.2914 -24.7219 53.7854 -30.2661 56.4563C-35.9734 59.212 -38.0931 59 -44.6702 59.1696C-52.0082 59.3391 -59.5093 62.8156 -66.5754 62.0524C-65.1622 73.2871 -62.8248 87.2349 -61.4659 98.4696C-60.2158 108.814 -61.4661 119.413 -61.0856 129.799C-60.7051 139.423 -59.4548 148.962 -57.5524 158.459C-55.6499 167.701 -52.9865 176.731 -54.1279 186.185C-55.8673 200.43 -59.2917 214.42 -59.4548 228.749C-59.5092 235.109 -58.3678 240.832 -57.0632 247.106C-56.0305 252.279 -56.1392 257.324 -55.3239 262.496C-54.6172 267.159 -53.4758 271.102 -54.3455 275.85C-55.2151 280.81 -54.5627 284.88 -54.1279 289.459C-56.1935 300.948 -57.6611 312.479 -58.5852 324.053L-59.9984 339.231C-60.542 343.682 -61.5203 348.134 -61.3029 352.627C-60.7593 364.371 -55.1064 377.556 -57.7699 389.129C-58.5852 392.733 -61.1942 395.955 -61.4659 399.643C-61.8464 404.9 -58.9113 411.26 -57.9329 416.347C-55.2151 430.38 -57.0632 443.437 -58.5852 457.513C-59.5093 466.161 -59.4005 474.343 -56.6284 482.78C-55.2152 487.104 -53.6389 491.301 -53.6932 495.795C-53.6932 501.391 -55.7043 506.86 -55.8131 512.456C-55.8674 515.763 -55.3782 518.688 -56.0304 521.995C-57.8784 532.043 -59.4005 541.158 -59.3462 551.333C-59.3462 562.949 -59.7809 574.438 -57.9329 586.012C-57.1719 590.802 -57.5524 595.678 -57.5524 600.511C-48.9642 600.638 -40.6478 599.578 -32.0597 599.239C-18.1991 598.688 -6.56702 600.256 7.18481 601.91C32.4056 604.962 57.0828 606.192 82.4667 606.192C93.4464 606.192 104.698 605.683 115.678 606.276C127.255 606.87 138.561 608.863 150.248 609.329C171.609 610.219 192.645 613.229 214.007 611.152C229.715 609.626 245.804 610.516 261.622 610.516C291.409 610.516 321.087 604.581 350.928 604.75C376.855 604.877 403.435 603.648 429.253 605.513C436.048 606.022 442.897 607.04 449.582 605.598C459.421 603.478 469.042 603.563 479.097 602.207C478.119 595.72 476.108 589.022 476.76 582.45C477.14 578.338 481.598 573.378 480.674 569.435C480.402 575.031 480.293 580.712 480.565 586.308C480.674 589.615 480.402 593.304 482.848 596.186C485.511 599.324 489.262 600.341 493.773 600.553C503.992 601.104 514.048 602.715 524.321 603.139C533.67 603.521 543.073 603.436 552.423 603.436C565.685 603.436 580.579 601.698 593.624 603.775C601.831 605.089 609.876 604.962 618.301 604.877C626.128 601.062 638.521 603.266 647.544 602.249C660.263 600.807 672.874 600.426 685.702 600.596C693.366 600.68 701.084 600.638 708.748 600.638C718.152 600.638 727.555 600.638 736.904 600.638C748.808 600.596 760.331 601.825 772.127 602.122C778.921 602.291 786.748 601.571 793.108 599.578C797.782 598.094 802.131 595.72 806.751 593.897C821.318 588.216 836.864 584.061 851.54 578.508C856.649 576.558 861.65 574.565 866.487 572.276C870.455 570.368 875.13 567.231 879.859 566.298C880.783 570.749 868.227 577.787 864.367 580.458C860.291 583.256 855.562 585.418 850.942 587.707C844.473 590.929 830.069 591.396 827.134 597.585C830.558 601.359 835.831 600.638 841.103 600.638C849.365 600.638 857.301 599.366 865.509 599.196C884.914 598.815 904.373 602.037 923.832 602.122C936.497 602.164 949.651 601.274 962.261 600.384C974.491 599.493 986.232 599.281 998.516 599.281C1013.84 599.281 1029.23 599.281 1044.56 599.281C1054.67 599.281 1064.18 599.154 1074.07 600.638C1080.16 601.571 1085.43 603.266 1091.57 603.945C1100.49 604.92 1109.35 605.005 1118.32 604.962C1126.14 604.962 1133.32 603.775 1141.04 603.478C1151.96 603.012 1163.54 604.665 1174.3 603.224C1177.13 602.842 1178.6 602.079 1181.8 602.079C1190.12 602.122 1198.49 602.079 1206.81 602.079C1218.27 602.079 1230.34 603.054 1241.65 601.783C1253.61 600.426 1265.29 600.723 1277.36 600.68C1285.57 600.638 1292.74 602.164 1300.89 602.164C1313.61 602.164 1328.4 603.182 1341.06 601.062C1346.23 600.214 1350.96 599.578 1356.23 599.281C1360.69 598.985 1384.71 595.169 1384.6 599.281C1384.33 592.668 1386.88 587.326 1389.22 581.009C1390.47 577.702 1390.47 575.286 1389.6 571.979C1387.7 564.433 1387.92 556.886 1388.14 549.001C1388.52 533.696 1391.94 518.561 1391.83 503.257C1391.83 496.728 1391.83 490.199 1391.83 483.67C1391.83 477.141 1392.37 470.485 1391.94 463.999C1391.67 459.759 1391.45 459.039 1386.61 458.276C1383.08 457.725 1379.55 458.106 1376.01 457.682C1365.85 456.495 1356.28 453.358 1346.44 451.196C1340.3 449.839 1327.53 447.974 1323.94 443.946C1328.89 448.567 1335.46 445.684 1341.39 445.472C1344 445.388 1344.11 446.193 1346.55 446.363C1348.94 446.532 1349.76 445.26 1352.04 445.091C1354.11 444.921 1354.87 445.854 1356.77 446.278C1359.71 446.871 1363.19 447.338 1366.12 447.719C1373.3 448.61 1380.96 448.058 1388.19 448.058C1387.54 442.929 1385.31 436.061 1386.4 431.1C1387.65 425.038 1387.97 420.12 1388.14 414.058C1388.3 408.165 1391.4 402.187 1389.6 396.294C1389.17 394.768 1388.52 394.09 1388.3 392.267C1387.81 387.518 1386.07 383.915 1384.87 379.336C1382.86 371.536 1382.65 362.166 1382.65 354.281C1382.65 346.395 1384.82 338.001 1384.6 329.819C1384.44 323.078 1382.26 316.888 1382.92 310.063C1383.62 302.008 1384.49 293.868 1386.02 285.898C1386.67 282.379 1386.12 278.903 1386.78 275.341C1387.37 272.247 1389 269.109 1388.3 265.93C1383.84 265.039 1372.75 263.386 1370.03 260.418C1374.98 259.698 1374.49 259.231 1375.8 255.713C1377.97 249.777 1383.13 246.64 1382.86 239.984C1382.75 237.313 1382.21 234.176 1383.08 231.505C1383.68 229.767 1385.53 228.241 1386.07 226.46C1386.94 223.662 1387.05 220.694 1387.81 217.811C1388.68 214.462 1388.46 210.774 1387.81 207.425C1386.29 199.242 1384.17 191.187 1383.08 182.963C1382.37 177.579 1381.72 171.177 1383.19 165.793C1385.2 158.204 1381.83 150.064 1381.07 142.179C1380.69 138.278 1380.63 134.59 1381.94 130.817C1385.42 120.854 1386.45 112.248 1386.4 101.861C1386.29 86.0055 1386.23 70.277 1388.14 54.5485C1388.79 48.9524 1391.51 43.229 1392.81 37.6753C1393.57 34.4532 1393.24 31.528 1393.79 28.3484C1395.31 18.8519 1388.14 64.1722 1388.14 54.5485L1388.14 54.2941Z"
                fill="red"
                transform="scale(0.00071530758,0.00163398692)"
              />
            </clipPath>
          </svg>
          <svg width="0" height="0">
            <filter id="shadow-in">
              <feGaussianBlur
                stdDeviation="1"
                result="offset-blur"
              ></feGaussianBlur>
              <feComposite
                operator="out"
                in="SourceGraphic"
                in2="offset-blur"
                result="inverse"
              ></feComposite>
              <feFlood
                floodColor="black"
                floodOpacity="0.1"
                result="color"
              ></feFlood>
              <feComposite
                operator="in"
                in="color"
                in2="inverse"
                result="shadow"
              ></feComposite>
              <feComposite
                operator="over"
                in="shadow"
                in2="SourceGraphic"
              ></feComposite>
            </filter>
          </svg>
        </div>

        <div
          id="taras-section-bg-wrapper"
          className="absolute inset-0 -left-4 top-[17px] w-full sm:-left-10"
        >
          <div
            id="taras-section-bg"
            className="absolute inset-0 bg-background-dark"
          >
            <div className="absolute inset-0 -left-12  z-10 2xl:container 2xl:left-0">
              <div className="absolute bottom-0 w-52 sm:w-64 md:w-96 lg:w-auto">
                <Image
                  alt="shevchenko"
                  src="/images/taras-group.png"
                  width="594"
                  height="537"
                />
              </div>

              <Image
                src="/images/bg-pattern.svg"
                alt="bg-pattern"
                className="absolute -right-36 -top-20 h-[601px] w-[150%] max-w-max md:-right-[22rem] lg:-top-5 lg:w-[2200px]"
                width="2200"
                height="601"
              />
            </div>
            <Image
              alt="tree"
              src="/images/tree.png"
              className="absolute -right-24 -top-[22.34%] z-10 w-52 -rotate-[39.15deg] sm:w-64 lg:-right-36 lg:w-auto"
              width="425"
              height="627"
            />
          </div>
        </div>

        <div className="container px-8 sm:px-16">
          <div className="relative">
            <div className="gap quote-text relative z-10 ml-auto flex max-w-xl flex-col gap-4 text-right sm:gap-6 md:gap-12 lg:max-w-2xl xl:max-w-[800px]">
              <p>“{t("tarasQuote")}”</p>
              <p>{t("tarasName")}</p>
            </div>

            <span className="absolute -right-6 top-24 aspect-[120/110] max-h-[435px] w-5/6 min-w-[240px] max-w-[695px] -translate-y-1/2 border border-primary sm:top-20 sm:aspect-[139/87] sm:w-3/4 sm:min-w-[290px] md:-right-[10.5%] md:top-[61%] md:w-[60%]"></span>
          </div>
        </div>
      </section>
      <section className="mt-20 sm:mt-28 md:mt-20 xl:mt-36">
        <div className="container relative flex items-end gap-32">
          <div className="flex flex-col gap-6 md:w-3/4 lg:max-w-[700px] lg:gap-10 2xl:max-w-[950px]">
            <h2 className="relative flex w-5/6 flex-col items-start  leading-tight  sm:w-3/4 md:w-4/5 lg:w-auto">
              <div className="relative inline text-primary">
                {t("history")}
                <div className="absolute -right-[13%] top-[19%] aspect-square w-[30.61%] -rotate-90">
                  <Image
                    src="/images/kolosok.svg"
                    alt="kolosok"
                    width="139"
                    height="138"
                  />
                </div>
              </div>
              <span className="stroke-text relative ml-auto lg:w-auto xl:-right-48 2xl:right-14">
                {t("ofUkraine")}
              </span>

              <span className="red-square left-44 top-1/2 -z-10 aspect-[833/534] w-[460px] sm:top-20 md:w-[525px]  lg:left-72 lg:top-32 lg:w-[90%] xl:top-48 xl:w-[833px]"></span>
            </h2>
            <div className="flex flex-col gap-8 lg:gap-14">
              <div className="body-text-namu ">
                <p>{t("ukraineHistorySectionDescription")}</p>
              </div>
              <Link href="/ukrainian-history" className="btn">
                {t("seeMore")}
              </Link>
            </div>
          </div>
          <div className="absolute -right-36 bottom-20 top-0 w-40 sm:-right-8 sm:-top-10 md:bottom-20 md:top-auto md:w-52 lg:right-0 lg:w-64 xl:relative xl:-bottom-0.5 xl:-right-24 xl:ml-auto xl:w-auto 2xl:right-0 2xl:ml-0">
            <Image
              src="/images/fight-and-overcome.jpg"
              alt="fight-and-overcome"
              width="428"
              height="535"
            />
          </div>
        </div>
      </section>
      <section className="mt-40 sm:mt-52 md:mt-48 lg:mt-52 xl:mt-80">
        <div className="container relative flex items-start gap-10 lg:gap-16">
          <div className="absolute -left-44 -top-16 z-10 w-40 grow rounded sm:relative sm:inset-0 sm:min-w-[150px] md:min-w-[230px] lg:min-w-[300px] xl:min-w-fit ">
            <Image
              src="/images/black-ukraine.png"
              width="489"
              height="687"
              alt="black-ukraine"
            />
          </div>
          <div className="relative -mt-11 flex shrink flex-col gap-8 lg:gap-14">
            <div className="flex flex-col gap-6 md:relative lg:gap-10">
              <h2 className="stroke-text">{t("culture")}</h2>
              <div className="body-text-namu">
                <p>{t("cultureSectionDescription")}</p>
              </div>

              <div className="red-square  -bottom-8 -left-[16%] -top-[6%] -z-10 aspect-[901/938] xs:-bottom-12 xs:-top-[10%] sm:-top-[14%] sm:aspect-[901/760] md:w-[129.64%] xl:aspect-[901/938] 2xl:aspect-[901/473]">
                <Image
                  src="/images/poppy-flowers.png"
                  alt="poppy-flowers"
                  className="h-full w-full object-cover"
                  width="901"
                  height="938"
                />
              </div>
            </div>
            <Link href="/ukrainian-culture" className="btn">
              {t("seeMore")}
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-28 sm:mt-32 md:mt-48 lg:mt-72 xl:mt-[340px] 2xl:mt-40">
        <div className="container">
          <h3>{t("legendaryUkrainianMovies")}</h3>
          <MoviesTabs className="mt-6 lg:mt-11" />
        </div>
      </section>
      <section className="relative mt-16 pb-20 pt-20 sm:mt-20 sm:pt-20  md:mt-24 md:pt-28 lg:mt-32 lg:pb-44 lg:pt-48 xl:mt-44 xl:pt-[246px]">
        <svg
          width="0"
          height="0"
          viewBox="0 0 1401 689"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="svgPath-2" clipPathUnits="objectBoundingBox">
            <path
              d="M1473.2 75.2877C1468.36 75.2877 1463.04 70.554 1458.69 68.8972C1455.48 67.6664 1451.35 66.2463 1447.93 65.6309C1436.51 63.7374 1426.08 68.5659 1415.04 69.0392C1401.56 69.6072 1388.57 66.5303 1375.2 65.8203C1369.27 65.4889 1365.2 66.0096 1359.65 62.838C1354.27 59.7137 1355.03 57.3942 1349.27 56.8262C1346.07 58.1989 1342.75 59.1456 1339.27 59.6663C1335.36 59.5717 1331.44 59.4771 1327.53 59.4771C1321.77 59.4771 1313.02 60.5657 1307.15 59.6663C1301.66 58.8143 1297.8 56.4948 1292.04 56.2108C1286.38 55.9268 1280.57 56.3528 1274.86 56.3055C1255.57 56.3055 1188.48 78.0788 1188.48 78.0788C1188.48 78.0788 1161.04 82.6706 1156.91 80.7771C1152.29 78.6469 1148.76 79.5936 1143.49 78.0788C1138.81 76.706 1131.85 71.3569 1127.83 68.9901C1112.94 60.1853 1099.95 57.8658 1081.3 56.5403C1069.56 55.6883 1065.21 48.209 1058.31 40.6823C1049.51 38.9308 1042.71 33.2977 1033.74 31.5936C1026.03 30.1261 1017.98 31.3568 1010.26 31.3095C997.815 31.2621 988.847 29.1793 978.628 23.3568C970.584 18.7177 958.734 17.9603 952.102 12.4692C949.439 10.2916 948.569 5.08453 945.743 3.33307C941.34 0.587524 926.447 2.81232 922.099 3.56976C906.716 6.26801 897.585 5.51056 881.387 3.56976C871.332 2.33899 855.46 0.634827 846.655 4.46918C832.74 10.481 824.098 18.1496 807.411 18.623C794.638 19.0017 786.974 21.7 779.201 30.5048C772.624 37.9368 770.939 41.7711 761.318 45.8895C747.349 51.8066 752.187 49.8657 741.262 43.7119C732.728 38.9308 722.075 41.629 712.671 39.9722C706.475 38.8835 703.811 36.3273 696.745 37.3214C686.744 38.7415 680.548 41.1557 669.568 40.777C665.165 40.6349 663.209 40.6823 659.73 39.0255C656.088 37.274 653.316 31.7355 649.24 29.7946C640.815 25.7709 626.193 27.0491 617.497 31.0728C611.3 33.9604 611.409 36.4219 604.832 37.7947C599.234 38.9308 592.82 36.2799 587.221 37.274C581.514 38.2681 578.144 43.9486 572.872 45.132C565.806 46.7415 560.914 43.6645 554.663 40.7296C536.563 32.2088 522.431 9.67621 500.254 11.6644C494.71 12.1851 489.818 13.0845 484.22 11.8538C476.338 10.1496 471.928 9.14758 463.992 7.34875C449.262 3.98779 435.006 9.07355 420.493 10.3517C409.948 11.2511 392.994 18.8599 392.994 18.8599C383.382 19.2126 337.731 54.5048 308.113 54.5048C278.495 54.5048 263.216 47.1202 244.573 53.1321C235.713 55.9724 229.245 62.8362 220.222 57.7711C217.559 56.3036 218.102 54.5049 215.384 53.4634C212.069 52.1853 207.177 53.5108 203.535 53.0374C196.143 51.996 194.567 48.919 188.914 46.1261C183.152 43.2858 175.651 42.6705 169.401 40.8243C150.974 35.3805 130.646 30.9308 112.057 37.3687C103.251 40.4456 95.9133 43.7119 86.4557 43.9013C79.1722 44.0433 72.1061 42.7178 65.9097 45.7001C63.7898 46.6942 62.4312 48.8243 60.257 49.8658C57.7567 51.0492 55.3107 50.4338 52.756 51.9012C47.7554 54.8362 45.853 59.8541 40.3088 62.8363C34.6016 65.9133 32.4818 65.6765 25.9049 65.8658C18.567 66.0552 11.066 69.9369 4 69.0848C5.41321 81.6293 7.75061 97.2032 9.1095 109.748C10.3596 121.298 9.10938 133.132 9.48987 144.73C9.87036 155.476 11.1205 166.127 13.0229 176.73C14.9254 187.05 17.5889 197.133 16.4474 207.689C14.708 223.594 11.2836 239.216 11.1205 255.216C11.0662 262.316 12.2075 268.707 13.5121 275.713C14.5448 281.488 14.4362 287.121 15.2515 292.896C15.9581 298.103 17.0995 302.506 16.2299 307.808C15.3602 313.346 16.0126 317.89 16.4474 323.003C14.382 335.831 12.9142 348.707 11.9901 361.63L10.5769 378.577C10.0333 383.548 9.05518 388.518 9.27258 393.536C9.81616 406.648 15.4688 421.37 12.8054 434.293C11.9901 438.317 9.38123 441.915 9.1095 446.033C8.729 451.903 11.6641 459.003 12.6425 464.684C15.3602 480.353 13.5121 494.933 11.9901 510.649C11.066 520.305 11.1748 529.442 13.9469 538.862C15.3601 543.69 16.9364 548.377 16.8821 553.394C16.8821 559.643 14.871 565.749 14.7622 571.998C14.7079 575.69 15.1971 578.957 14.5449 582.649C12.6969 593.868 11.1748 604.045 11.2291 615.406C11.2291 628.377 10.7944 641.205 12.6425 654.129C13.4034 659.478 13.0229 664.921 13.0229 670.318C21.611 670.46 29.9272 669.277 38.5153 668.898C52.3756 668.282 64.0074 670.034 77.7592 671.88C102.98 675.288 127.656 676.661 153.04 676.661C164.019 676.661 175.271 676.093 186.25 676.756C197.828 677.419 209.134 679.643 220.82 680.164C242.181 681.158 263.216 684.519 284.578 682.2C300.286 680.495 316.375 681.49 332.192 681.49C361.978 681.49 391.656 674.862 421.496 675.052C447.423 675.194 474.001 673.821 499.819 675.904C506.614 676.472 513.462 677.608 520.148 675.998C529.986 673.632 539.607 673.726 549.662 672.211C548.684 664.969 546.673 657.489 547.325 650.152C547.706 645.56 552.163 640.022 551.239 635.62C550.967 641.868 550.858 648.211 551.13 654.46C551.239 658.152 550.967 662.271 553.413 665.49C556.076 668.992 559.827 670.129 564.338 670.365C574.557 670.981 584.612 672.779 594.885 673.253C604.234 673.679 613.638 673.584 622.986 673.584C636.249 673.584 651.142 671.643 664.187 673.963C672.395 675.43 680.439 675.288 688.864 675.194C696.691 670.933 709.084 673.395 718.107 672.259C730.826 670.649 743.436 670.223 756.263 670.413C763.927 670.507 771.646 670.46 779.31 670.46C788.713 670.46 798.116 670.46 807.465 670.46C819.369 670.413 830.892 671.785 842.687 672.117C849.481 672.306 858.641 672.698 865 670.473C869.674 668.816 910.348 670.473 910.348 670.473L910.379 670.46C918.641 670.46 927.86 669.04 936.068 668.85C955.472 668.424 974.932 672.022 994.391 672.117C1007.06 672.164 1020.21 671.17 1032.82 670.176C1045.05 669.182 1056.79 668.945 1069.07 668.945C1084.4 668.945 1099.78 668.945 1115.11 668.945C1125.22 668.945 1134.73 668.803 1144.63 670.46C1150.71 671.501 1155.99 673.395 1162.13 674.152C1171.04 675.241 1179.9 675.336 1188.87 675.288C1196.7 675.288 1203.87 673.963 1211.59 673.632C1222.52 673.111 1234.09 674.957 1244.86 673.348C1247.68 672.921 1249.15 672.069 1252.36 672.069C1260.67 672.117 1269.04 672.069 1277.36 672.069C1288.83 672.069 1300.9 673.158 1312.2 671.738C1324.16 670.223 1335.85 670.555 1347.91 670.507C1356.12 670.46 1363.29 672.164 1371.45 672.164C1384.17 672.164 1398.95 673.3 1411.62 670.933C1416.78 669.987 1421.51 669.277 1426.78 668.945C1431.24 668.614 1455.26 664.353 1455.15 668.945C1454.88 661.561 1457.44 655.596 1459.77 648.543C1461.02 644.85 1461.02 642.152 1460.15 638.46C1458.25 630.034 1458.47 621.608 1458.69 612.803C1459.07 595.714 1462.49 578.815 1462.38 561.726C1462.38 554.436 1462.38 547.146 1462.38 539.856C1462.38 532.566 1462.93 525.134 1462.49 517.891C1462.22 513.158 1462 512.353 1457.16 511.501C1453.63 510.885 1450.1 511.311 1446.57 510.838C1436.4 509.513 1426.83 506.01 1417 503.595C1410.85 502.081 1398.08 499.998 1394.49 495.501C1399.44 500.66 1406.02 497.442 1411.94 497.205C1414.55 497.11 1414.66 498.01 1417.11 498.199C1419.5 498.388 1420.31 496.968 1422.59 496.779C1424.66 496.589 1425.42 497.631 1427.32 498.104C1430.26 498.767 1433.74 499.288 1436.67 499.714C1443.85 500.708 1451.51 500.092 1458.74 500.092C1458.09 494.365 1455.86 486.696 1456.95 481.157C1458.2 474.388 1458.52 468.897 1458.69 462.128C1458.85 455.548 1461.95 448.873 1460.15 442.293C1459.72 440.589 1459.07 439.832 1458.85 437.796C1458.36 432.494 1456.62 428.471 1455.42 423.358C1453.41 414.648 1453.2 404.187 1453.2 395.382C1453.2 386.577 1455.37 377.204 1455.15 368.068C1454.99 360.542 1452.82 353.63 1453.47 346.009C1454.17 337.015 1455.04 327.926 1456.57 319.027C1457.22 315.098 1456.68 311.216 1457.33 307.24C1457.93 303.784 1459.56 300.281 1458.85 296.731C1454.39 295.737 1443.3 293.89 1440.59 290.577C1445.53 289.772 1445.04 289.251 1446.35 285.322C1448.52 278.695 1453.69 275.192 1453.41 267.76C1453.31 264.778 1452.76 261.275 1453.63 258.293C1454.23 256.352 1456.08 254.648 1456.62 252.659C1457.49 249.535 1457.6 246.222 1458.36 243.003C1459.23 239.263 1459.01 235.145 1458.36 231.405C1456.84 222.269 1454.72 213.275 1453.63 204.091C1452.92 198.079 1452.27 190.931 1453.74 184.92C1455.75 176.446 1452.38 167.357 1451.62 158.552C1451.24 154.197 1451.19 150.079 1452.49 145.866C1455.97 134.742 1457 125.132 1456.95 113.535C1456.84 95.8304 1465.81 157.04 1467.71 139.477C1468.36 133.229 1471.08 126.838 1472.38 120.637C1473.15 117.039 1472.82 113.773 1473.36 110.223C1474.89 99.6192 1473.2 86.3174 1473.2 75.5718V75.2877Z"
              fill="#F4E6C6"
              transform="scale(0.00071377587,0.0014513788)"
            />
          </clipPath>
        </svg>

        <div
          id="simonenko-section-bg-wrapper"
          className="absolute inset-0 -right-3 left-2 w-full sm:left-5 xl:left-10"
        >
          <div
            id="simonenko-section-bg"
            className="absolute inset-0 bg-background-dark"
          >
            <div className="absolute inset-0 2xl:container">
              <Image
                src="/images/bg-pattern.svg"
                alt="bg-pattern"
                width="2200"
                height="483"
                className="absolute -left-[509px] -top-12 max-w-fit md:-top-8 lg:top-8 xl:top-16"
              />
              <div className="absolute -right-10 bottom-2.5 w-[130px] max-w-xs xs:-right-16 xs:w-52 sm:w-auto md:-right-32 md:max-w-sm lg:-right-44 lg:max-w-xl xl:max-w-fit 2xl:right-0">
                <Image
                  alt="simonenko"
                  className="relative z-10"
                  src="/images/simonenko.png"
                  width="690"
                  height="505"
                />
                <div className="absolute -left-[48.69%] -top-[17.42%] w-[116%] max-w-fit">
                  <Image
                    src="/images/ukraine-map.png"
                    alt="ukraine-map"
                    width="801"
                    height="534"
                  />
                </div>

                <span className="red-square -left-[33.9%] -top-[12.87%] aspect-[757/485] w-[109.7%]"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="container pl-8 pr-2 sm:px-16">
          <div className="relative max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-xl">
            <div className="gap quote-text flex flex-col gap-3 sm:gap-5 md:gap-10 xl:gap-12">
              <div>
                <p>“{t("simonenkoQuotePart1")}</p>
                <p>{t("simonenkoQuotePart2")}</p>
                <p>{t("simonenkoQuotePart3")}</p>
                <p>{t("simonenkoQuotePart4")}”</p>
              </div>
              <p className="ml-auto mr-16 sm:mr-0 xl:mr-12">
                {t("simonenkoName")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 sm:mt-20 md:mt-28 lg:mt-36">
        <div className="container flex flex-col justify-between gap-10 sm:flex-row">
          <div className="font-namu-body">
            <span className="text-base opacity-50">{t("haveQuestions")}</span>
            <div className="mt-1 max-w-sm text-xl md:text-2xl">
              {t("youCanWriteUs")}
            </div>
            <div className="mt-5 max-w-xs lg:max-w-fit">
              <Image
                src="/images/flowers.svg"
                alt="flowers"
                width="472"
                height="180"
              />
            </div>
            <ContactEmail className="mt-5" />
          </div>
          <div className="md:w-[44%] ">
            <ContactForm />
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
