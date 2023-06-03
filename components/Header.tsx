"use client";

import IconMail from "~icons/pu/mail";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";
import LocaleSwitcher from "../components/LocaleSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const [isMenuShown, setIsMenuShown] = React.useState(false);

  function handleToggleMobileMenu() {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <header className="absolute left-0 top-0 z-50 w-full py-3">
      <div className="container flex items-end justify-between gap-4">
        <div className="flex grow">
          <Link href="/" className="max-w-28 mr-auto flex md:w-16 lg:w-auto">
            <Image
              src="/images/logo.svg"
              alt="logo"
              height="62"
              width="103"
              className="h-full w-full"
            />
          </Link>
        </div>
        <div
          className={classNames(
            "fixed top-0 flex h-screen w-full grow flex-col items-center gap-4 overflow-auto bg-background p-4 text-secondary transition-all duration-300 md:static md:h-auto md:w-auto md:flex-row md:items-end md:justify-between md:bg-transparent md:p-0 md:text-background",
            {
              "left-0": isMenuShown,
              "left-full": !isMenuShown,
            }
          )}
        >
          <nav className="flex grow flex-col justify-center md:block">
            <ul className="flex flex-col gap-8 text-center font-namu-body text-sm md:flex-row lg:gap-14 lg:text-base">
              <li>
                <Link href="/help-ukraine" className="link-animate">
                  {t("helpUkraine")}
                </Link>
              </li>
              <li>
                <Link href="/culture" className="link-animate">
                  {t("culture")}
                </Link>
              </li>
              <li>
                <Link href="/history" className="link-animate">
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
          <div className="mt-auto flex items-center gap-4">
            <a href="mailto:proudly.ukrainian.info@gmail.com">
              <IconMail height="13" width="18" />
            </a>
            <LocaleSwitcher />
          </div>
        </div>
        <Button
          className="relative mb-3 h-6 w-9 md:hidden"
          onClick={handleToggleMobileMenu}
        >
          <span
            className={classNames(
              "absolute flex h-1 w-full rounded bg-primary transition-all duration-300",
              {
                "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45":
                  isMenuShown,
                "left-0 top-0": !isMenuShown,
              }
            )}
          ></span>
          <span
            className={classNames(
              "absolute left-0 top-1/2 flex h-1 -translate-y-1/2 rounded bg-primary transition-all duration-100",
              {
                "w-0": isMenuShown,
                "w-full": !isMenuShown,
              }
            )}
          ></span>
          <span
            className={classNames(
              "absolute flex h-1 w-full rounded bg-primary transition-all duration-300",
              {
                "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45":
                  isMenuShown,
                "bottom-0 left-0": !isMenuShown,
              }
            )}
          ></span>
        </Button>
      </div>
    </header>
  );
}
