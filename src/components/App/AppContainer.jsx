import React from "react";
import InputFields from "../Input/InputFields";
import Divider from "../Divider/Divider";
import Displays from "../Display/Displays";
import { Field, Form, Formik } from "formik";
import Input from "../Input/Input";
import { dateOfBirthSchema } from "../../utils/validations/formValidation";
import { useState } from "react";
import { currentMonth } from "../../utils/functions/currentMonth";
import { currentYear } from "../../utils/functions/currentYear";
import { calculateAge } from "../../utils/functions/calculateAge";
const AppContainer = () => {
  const [days, setDays] = useState()
  const [months, setMonths] = useState()
  const [year, setYear] = useState()
  return (
    <Formik
      initialValues={{
        day: "",
        month: "",
        year: "",
      }}
      validationSchema={dateOfBirthSchema}
      onSubmit={async (values, { resetForm }) => {
        const dobEntered = values.day + "-" + values.month + "-" + values.year;
        const ageDiff = calculateAge(dobEntered)
        setYear(ageDiff.years)
        setMonths(ageDiff.months)
        setDays(ageDiff.days)
        console.log(ageDiff)

        // console.log(values, dobEntered, "Values");
      }}
    >
      {({ touched, errors, isValid, dirty, setFieldValue }) => {
        return (
          <Form
            id="form"
            className="px-5 sm:px-28 md:px-48 pt-16 md:pt-0 sm:flex sm:justify-center sm:items-center h-full bg-off-white"
          >
            <div className="bg-white md:max-w-2xl rounded-t-3xl px-8 md:px-16 pt-12 pb-14 rounded-br-[130px] rounded-bl-3xl md:rounded-br-[200px] transition-all duration-300">
              <InputFields errors={errors} touched={touched} Field={Field} />
              <div className="mt-24 md:mt-14">
                <Divider />
              </div>
              <div className="mt-[-25px]">
                <Displays days={days} months={months} year={year} />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AppContainer;
