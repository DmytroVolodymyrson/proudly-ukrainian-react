import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import ContactEmail from "./ContactEmail";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-14 self-end bg-secondary-darker py-6 text-background sm:mt-20 sm:py-12 lg:mt-32 lg:py-16">
      <div className="container flex flex-col items-center justify-between gap-7 sm:flex-row sm:items-start sm:gap-10">
        <div>
          <Link href="/" className="flex w-28 lg:w-auto">
            <Image src="/images/logo.svg" alt="logo" height="85" width="142" />
          </Link>
        </div>
        <div className="flex flex-col gap-7 font-namu-body text-base sm:w-5/6 sm:gap-8 md:w-2/3 lg:w-[47.8%]">
          <nav className="w-full">
            <ul className=" flex flex-col justify-between gap-5 text-center sm:flex-row sm:text-left">
              <li>
                <Link href="/help-ukraine" className="link-animate">
                  {t("helpUkraine")}
                </Link>
              </li>
              <li>
                <Link href="/ukrainian-culture" className="link-animate">
                  {t("culture")}
                </Link>
              </li>
              <li>
                <Link href="/ukrainian-history" className="link-animate">
                  {t("history")}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="link-animate">
                  {t("contacts")}
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <ContactEmail className="justify-center sm:justify-start" />
          </div>
        </div>
      </div>
    </footer>
  );
}
