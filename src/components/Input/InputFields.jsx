import React from "react";
import Input from "./Input";

const InputFields = (props) => {
  const { Field, touched, errors } = props;
  return (
    <div className="grid grid-cols-3 gap-5 md:pr-24">
      <Field
        name="day"
        type="number"
        component={Input}
        borderRadius={"rounded-md"}
        borderSize={"border-[1px]"}
        borderType={"border-solid"}
        borderColor={"border-smokey-grey"}
        // width={"w-[160px]"}
        height={"h-[70px]"}
        label={"DAY"}
        labelFontStyle={"font-[Poppins-Bold]"}
        labelFontSize={"text-[16px]"}
        labelColor={"text-smokey-grey"}
        padding={"p-4"}
        fontStyle={"font-[Poppins-Bold]"}
        fontSize={"text-[32px]"}
        errorMessage={touched.day && errors.day && errors.day}
      />

      <Field
        type="number"

        name="month"
        component={Input}
        borderRadius={"rounded-md"}
        borderSize={"border-[1px]"}
        borderType={"border-solid"}
        borderColor={"border-smokey-grey"}
        // width={"w-[160px]"}
        height={"h-[70px]"}
        label={"MONTH"}
        labelFontStyle={"font-[Poppins-Bold]"}
        labelFontSize={"text-[16px]"}
        labelColor={"text-smokey-grey"}
        padding={"p-4"}
        fontStyle={"font-[Poppins-Bold]"}
        fontSize={"text-[32px]"}
        errorMessage={touched.month && errors.month && errors.month}
      />
      <Field
        type="number"
        name="year"
        component={Input}
        borderRadius={"rounded-md"}
        borderSize={"border-[1px]"}
        borderType={"border-solid"}
        borderColor={"border-smokey-grey"}
        // width={"w-[160px]"}
        height={"h-[70px]"}
        label={"YEAR"}
        labelFontStyle={"font-[Poppins-Bold]"}
        labelFontSize={"text-[16px]"}
        labelColor={"text-smokey-grey"}
        padding={"p-4"}
        fontStyle={"font-[Poppins-Bold]"}
        fontSize={"text-[32px]"}
        errorMessage={touched.year && errors.year && errors.year}
      />
    </div>
  );
};

export default InputFields;
