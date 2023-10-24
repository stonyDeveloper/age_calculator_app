import * as Yup from "yup";

export const dateOfBirthSchema = Yup.object().shape({
  day: Yup.number()
    .required("*required")
    .min(1, "Invalid day")
    .max(31, "Invalid day"),
  month: Yup.number()
    .required("*required")
    .min(1, "Invalid month")
    .max(12, "Invalid month"),
  year: Yup.number()
    .required("*required")
    .min(1900, "Invalid year")
    .max(2023, "Invalid year"),
});
