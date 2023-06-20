import { Formik, Form, Field } from "formik";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import classNames from "classnames";
import Button from "../../components/Button";

interface FormData {
  email: string;
  name: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [isSent, setIsSent] = useState(false);

  const initialValues: FormData = { email: "", name: "", message: "" };

  async function handleSubmit(data: FormData) {
    await fetch(
      "https://6048ac5lla.execute-api.us-east-2.amazonaws.com/sendEmail",
      {
        mode: "no-cors",
        method: "post",
        body: JSON.stringify({
          senderEmail: data.email,
          senderName: data.name,
          message: data.message,
        }),
      }
    );
    setIsSent(true);
  }

  function handleValidation(values: FormData) {
    const errors: Partial<FormData> = {};

    if (!values.email) {
      errors.email = `${t("email")} ${t("isRequired")}`;
    }

    if (!values.name) {
      errors.name = `${t("name")} ${t("isRequired")}`;
    }

    if (!values.message) {
      errors.message = `${t("yourMessage")} ${t("isRequired")}`;
    }

    return errors;
  }

  return (
    <>
      {isSent ? (
        <div className="font-namu-title text-h3 text-primary">
          {t("thankYouForYourMessage")}
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={handleValidation}
        >
          {({ errors, touched, isSubmitting }) => {
            return (
              <Form className="flex flex-col gap-5 lg:gap-10">
                <div className="flex flex-col gap-3">
                  <Field
                    type="email"
                    name="email"
                    className={classNames("input", {
                      "placeholder-red-500 placeholder:opacity-100":
                        errors.email && touched.email,
                    })}
                    placeholder={
                      errors.email && touched.email ? errors.email : t("email")
                    }
                  />
                  <Field
                    type="name"
                    name="name"
                    className={classNames("input", {
                      "placeholder-red-500 placeholder:opacity-100":
                        errors.name && touched.name,
                    })}
                    placeholder={
                      errors.name && touched.name ? errors.name : t("name")
                    }
                  />
                  <Field
                    as="textarea"
                    name="message"
                    className={classNames("input h-32", {
                      "placeholder-red-500 placeholder:opacity-100":
                        errors.message && touched.message,
                    })}
                    placeholder={
                      errors.message && touched.message
                        ? errors.message
                        : t("yourMessage")
                    }
                  />
                </div>
                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="btn relative w-full xs:w-fit"
                >
                  {t("submit")}
                </Button>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
}
