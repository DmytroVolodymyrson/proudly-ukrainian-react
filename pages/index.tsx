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
      <section className="relative pb-28 pt-24 sm:py-28 md:py-36 lg:pb-[217px] lg:pt-[237px]">
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
          className="absolute inset-0 -left-4 top-[17px] w-[101%] sm:-left-10"
        >
          <div
            id="taras-section-bg"
            className="absolute inset-0 bg-background-dark"
          >
            <div className="absolute inset-0 -left-12  z-10 2xl:container 2xl:left-0">
              <img
                alt="shevchenko"
                className="absolute bottom-0 w-52 sm:w-64 md:w-96 lg:w-auto"
                src="/images/taras-group.png"
                width="594"
                height="538"
              />
            </div>
            <img
              alt="tree"
              src="/images/tree.png"
              className="absolute -right-24 -top-[22.34%] z-10 w-52 -rotate-[39.15deg] sm:w-64 lg:-right-36 lg:w-auto"
              width="425"
              height="627"
            />
            <img
              src="/images/bg-pattern.svg"
              alt="bg-pattern"
              className="absolute -right-36 -top-20 h-[601px] w-[150%] max-w-max md:-right-[22rem] lg:-top-5 lg:w-[2200px]"
              width="2200"
              height="601"
            />
          </div>
        </div>

        <div className="container px-8 sm:px-16">
          <div className="relative">
            <div className="gap relative z-10 ml-auto flex max-w-xl flex-col gap-4 text-right font-cassandra text-2xl leading-tight sm:gap-6 sm:text-3xl md:gap-11 lg:max-w-2xl xl:max-w-[800px] xl:text-[34px]">
              <p>“{t("tarasQuote")}”</p>
              <p>{t("tarasName")}</p>
            </div>

            <span className="absolute -right-6 top-24 aspect-[120/110] max-h-[435px] w-5/6 min-w-[240px] max-w-[695px] -translate-y-1/2 border border-primary sm:top-20 sm:aspect-[139/87] sm:w-3/4 sm:min-w-[290px] md:-right-[10.5%] md:top-[56%] md:w-[60%]"></span>
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
