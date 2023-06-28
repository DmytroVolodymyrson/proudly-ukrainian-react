import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Simonenko() {
  const { t } = useTranslation();

  return (
    <section className="relative mt-16 pb-32 pt-14 sm:mt-20 sm:pb-20 sm:pt-20  md:mt-24 md:pt-28 lg:mt-32 lg:pb-44 lg:pt-48 xl:mt-44 xl:pt-[246px]">
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
            <div className="absolute -right-10 bottom-2.5 w-[180px]  max-w-xs xs:-right-16  sm:w-auto md:-right-32 md:max-w-sm lg:-right-44 lg:max-w-xl xl:max-w-fit 2xl:right-0">
              <Image
                alt="simonenko"
                className="relative z-10"
                src="/images/simonenko.webp"
                width="690"
                height="505"
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 384px, 690px"
              />
              <div className="absolute -left-[48.69%] -top-[17.42%] w-[116%] max-w-fit">
                <Image
                  src="/images/ukraine-map.webp"
                  alt="ukraine-map"
                  width="801"
                  height="534"
                  sizes="(max-width: 640px) 241px, (max-width: 1024px) 445px, (max-width: 1280px) 668px, 801px"
                />
              </div>

              <span className="red-square -left-[27.9%] -top-[12.87%] aspect-[757/485] w-[109.7%] xs:-left-[33.9%]"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container pl-8 pr-2 sm:px-16">
        <div className="relative max-w-xs  sm:max-w-sm lg:max-w-md xl:max-w-xl">
          <div className="gap quote-text flex flex-col gap-3 max-sm:text-[20px] max-sm:leading-[25px] sm:gap-5 md:gap-10 xl:gap-12">
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
  );
}