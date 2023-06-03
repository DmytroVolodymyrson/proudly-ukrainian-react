import classNames from "classnames";
import React from "react";
import Loading from "../components/Loading";

interface Properties {
  disabled?: boolean;
  loading?: boolean;
  loadingClass?: string;
  loadingWrapperClass?: string;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  type,
  loading,
  disabled,
  loadingClass,
  loadingWrapperClass,
  children,
  className,
  onClick,
}: React.PropsWithChildren<Properties>) {
  return (
    <button
      type={type}
      className={classNames(
        className,
        "before:hidden disabled:bg-gray-200 disabled:text-gray-300",
        { loading }
      )}
      aria-disabled={disabled}
      disabled={disabled ?? loading}
      onClick={onClick}
    >
      {loading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-inherit ${loadingWrapperClass}`}
        >
          <Loading
            className={`object-fit-contain h-full max-h-[75%] w-full max-w-[75%] ${loadingClass}`}
          />
        </div>
      )}

      {children}
    </button>
  );
}
