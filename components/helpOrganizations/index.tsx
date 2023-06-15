import "swiper/css";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import Image from "next/image";

import organizations from "./organiztions.json";

interface Properties {
  className: string;
}

export default function HelpOrganizations({ className }: Properties) {
  const { t } = useTranslation();

  return (
    <div className={classNames("relative", className)}>
      <ul className="flex flex-col gap-9">
        {organizations.map((organization) => {
          return (
            <li
              key={organization.name}
              className="relative flex flex-col gap-8 md:flex-row  md:gap-24 lg:items-center"
            >
              <div className="flex flex-col gap-3 md:w-2/5 md:gap-6 xl:w-[28.4%]">
                <div className="body-text-namu flex flex-col items-center md:items-start">
                  <h5 className="text-primary">{t(organization.name)}</h5>
                  <a
                    href={organization.link}
                    className="transition-colors hover:text-primary"
                  >
                    {organization.link}
                  </a>
                </div>
                <div className="h-32 lg:h-auto">
                  <Image
                    src={`/images/organizations/${organization.image}`}
                    alt="logo"
                    width="286"
                    height="194"
                    className="h-full w-full object-contain xl:h-auto xl:w-72 2xl:w-96"
                  />
                </div>
              </div>
              <div className="body-text relative mb-2.5 grow-0  md:w-3/5 lg:leading-9 xl:w-[71.6%]">
                <p>{t(organization.description)}</p>
                <span className="absolute -inset-y-4 left-1/2 -z-10 w-screen -translate-x-1/2 bg-background-light  md:hidden"></span>
              </div>
            </li>
          );
        })}
      </ul>
      <span className="red-square inset-0 -bottom-10 -top-14 left-[40%] -z-10 hidden border-r-0 bg-background-light md:block xl:left-[28.4%] 2xl:left-[30%]">
        <span className="absolute  -inset-y-px left-full w-screen border-y border-primary bg-background-light"></span>
      </span>
    </div>
  );
}
