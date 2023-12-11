"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  letter: yup
    .string()
    .matches(/^[а-яА-Я]+$/u, "Только буквы кириллицы")
    .max(1, "Максимум 1 символ")
    .required("Требуется буква"),
});

const LetterInput = ({ onSubmit }: { onSubmit: (letter: string) => void }) => {
  const initialValues = {
    letter: "",
  };

  const handleFormSubmit = (
    { letter }: { letter: string },
    { resetForm }: { resetForm: any }
  ) => {
    onSubmit(letter);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={schema}
      >
        <Form className="flex justify-center items-center mb-12">
          <p className="text-3xl mr-6">Введите букву:</p>
          <div className="relative">
            <Field
              type="text"
              name="letter"
              autoComplete="off"
              className="p-3 outline outline-1 outline-gray-300 w-14 h-20 mr-10 text-3xl"
            />
            <div className="absolute top-20 text-red-600">
              <ErrorMessage name="letter" />
            </div>
          </div>
          <button
            type="submit"
            className="p-3 bg-blue-700 rounded-2xl text-white"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LetterInput;
