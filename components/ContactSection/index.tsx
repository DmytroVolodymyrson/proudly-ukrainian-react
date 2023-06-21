import { useTranslation } from "next-i18next";
import Image from "next/image";
import ContactEmail from "../ContactEmail";
import ContactForm from "../ContactForm";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between gap-10 sm:flex-row">
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
  );
}
