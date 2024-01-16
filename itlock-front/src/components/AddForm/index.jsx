import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const AddForm = ({getfetch}) => {
  async function handleSubmit(data) {
    await fetch("http://localhost:3100/brands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(()=>
    {getfetch()})
  }
  return (
    <Formik
      initialValues={{ img: "", title: "", category: "" }}
      validationSchema={Yup.object({
        img: Yup.string().required("Required"),
        title: Yup.string().required("Required"),
        category: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        handleSubmit(values)
        resetForm()
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="img">Img Url</label>
        <Field name="img" type="text" />
        <ErrorMessage name="img" />

        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="category">Category</label>
        <Field name="category" type="text" />
        <ErrorMessage name="category" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
