import Link from "next/link";
import Image from "next/image";
import React from "react";
import classNames from "classnames";
import dynamic from "next/dynamic";

const Menu = dynamic(async () => import("../components/Menu"));

interface Properties {
  isWhite?: boolean;
  positionAbsolute?: boolean;
}

export default function Header({ isWhite, positionAbsolute }: Properties) {
  const logoPath = `/images/logo${isWhite ? "" : "-dark"}.svg`;

  return (
    <header
      className={classNames("z-50 w-full py-3", {
        "absolute left-0 top-0": positionAbsolute,
        relative: !positionAbsolute,
      })}
    >
      <div className="container flex items-end justify-between gap-4">
        <div className="flex grow">
          <Link
            href="/"
            className="max-w-28 mr-auto flex h-16 md:h-10 md:w-16 lg:h-16 lg:w-auto"
          >
            <Image
              src={logoPath}
              alt="logo"
              height="62"
              width="103"
              className="h-full w-full"
            />
          </Link>
        </div>
        <Menu isWhite={isWhite} />
      </div>
    </header>
  );
}
