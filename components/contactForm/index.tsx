import { Formik, Form, Field } from "formik";
import { useTranslation } from "next-i18next";
import Button from "../../components/Button";

export default function ContactForm() {
  const { t } = useTranslation();

  const initialValues = { email: "", name: "", message: "" };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {() => {
        return (
          <Form className="flex flex-col gap-5 lg:gap-10">
            <div className="flex flex-col gap-3">
              <Field
                type="text"
                name="email"
                className="input"
                placeholder={t("email")}
              />
              <Field
                type="text"
                name="name"
                className="input"
                placeholder={t("name")}
              />
              <Field
                as="textarea"
                name="message"
                className="input h-32"
                placeholder={t("yourMessage")}
              />
            </div>
            <Button type="submit" className="btn w-full xs:w-fit">
              {t("submit")}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
