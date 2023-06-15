import IconMail from "~icons/pu/mail";
import classNames from "classnames";

interface Properties {
  className?: string;
}

export default function ContactEmail({ className }: Properties) {
  return (
    <a
      href="mailto:proudly.ukrainian.info@gmail.com"
      className={classNames(
        " flex items-center gap-3 transition-colors hover:text-primary",
        className
      )}
    >
      <IconMail width="24" height="24" />
      <span className="text-sm xs:text-base">
        proudly.ukrainian.info@gmail.com
      </span>
    </a>
  );
}
