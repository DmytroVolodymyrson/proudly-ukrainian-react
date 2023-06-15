import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();
  const initialValues = { locale: router.locale };
  const localeOptions = [
    { value: "uk", label: "UA" },
    { value: "en", label: "EN" },
  ];

  async function handleSelectChange(event: Record<string, any>) {
    await router.push(router.pathname, router.pathname, {
      locale: event.target.value,
    });
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {() => {
        return (
          <Form onChange={handleSelectChange} className="flex">
            <Field
              as="select"
              name="locale"
              className="cursor-pointer bg-transparent outline-0"
            >
              {localeOptions.map((localeOption) => (
                <option
                  className="text-secondary"
                  key={localeOption.value}
                  value={localeOption.value}
                >
                  {localeOption.label}
                </option>
              ))}
            </Field>
          </Form>
        );
      }}
    </Formik>
  );
}
