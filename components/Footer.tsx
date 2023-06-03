import IconFacebook from "~icons/pu/facebook";
import IconTelegram from "~icons/pu/telegram";
import IconInstagram from "~icons/pu/instagram";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import ContactEmail from "../components/contactEmail";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-14 bg-secondary-darker py-6 text-background sm:mt-20 sm:py-12 lg:mt-32 lg:py-16">
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
                <Link href="/help-ukraine">{t("helpUkraine")}</Link>
              </li>
              <li>
                <Link href="/culture">{t("culture")}</Link>
              </li>
              <li>
                <Link href="/history">{t("history")}</Link>
              </li>
              <li>
                <Link href="/contacts">{t("contacts")}</Link>
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
