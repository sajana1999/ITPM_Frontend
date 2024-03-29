import React from "react";
import { useFormik } from "formik";
import Navbar from "../components/TeacherNavBar";
import "../styles/student.css";
import { Button, Select, Form } from "semantic-ui-react";
import * as Yup from "yup";
import teacherService from "../adapters/TeacherService";
import axios, { Axios } from "axios";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];
const gradeOptions = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
  { key: 4, text: "4", value: 4 },
  { key: 5, text: "5", value: 5 },
  { key: 6, text: "6", value: 6 },
  { key: 7, text: "7", value: 7 },
  { key: 8, text: "8", value: 8 },
  { key: 9, text: "9", value: 9 },
  { key: 10, text: "10", value: 10 },
  { key: 11, text: "11", value: 11 },
];

function AddStudent() {
  const formik = useFormik({
    initialValues: {
      teacherName: "",
      teacherNic: "",
      teacherGender: "",
      teacherEmail: "",
      teacherMobile: "",
      teacherSubject: "",
      teacherGrade: "",
      //   stuName: "",
      //   nic: "",
      //   gender: "male",
      //   address: "",
      //   email: "",
      //   mobile: "",
    },

    validationSchema: Yup.object({
      teacherName: Yup.string()
        .min(3, "Too Small")
        .max(30, "Input 30 characters or below")
        .matches(/^[A-Za-z ]*$/, "Please Enter Valid name")
        .required("*Required"),
      teacherNic: Yup.string().min(9).max(12).required("*Required"),

      teacherGender: Yup.string(),

      //   address: Yup.string()
      //     .min(10, "Input must be at least 10 characters")
      //     .max(30, "Input 15 characters or below")
      //     .required("*Required"),
      //     teacherEmail: Yup.string()
      //     .matches(
      //       /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
      //       "Please Enter Valid email address"
      //     )
      //     .required("*Required"),
      teacherMobile: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .min(10)
        .max(10)
        .required("*Required"),

      teacherEmail: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
          "Please Enter Valid email address"
        )
        .required("*Required"),

      teacherSubject: Yup.string()
        .min(10, "Input must be at least 10 characters")
        .max(30, "Input 15 characters or below")
        .required("*Required"),

      teacherGrade: Yup.string(),
    }),
    onSubmit: (values) => {
      teacherService.insertTeachers(values);
      //  axios.post("http://localhost:8070/student/add",values);
      console.log(values);
    },
  });

  return (
    <>
      <Navbar />
      <div>
        <Form id="teacher-form" onSubmit={formik.handleSubmit}>
          <label id="teacher-form-label">Add Teacher</label>
          <Form.Field>
            <label>Teacher Name</label>
            <input
              placeholder="Teacher Name"
              id="teacherName"
              name="teacherName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherName}
            />
            {formik.touched.teacherName && formik.errors.teacherName ? (
              <div style={{ color: "red" }}>{formik.errors.teacherName}</div>
            ) : null}
          </Form.Field>

          <Form.Field>
            <label>NIC</label>
            <input
              placeholder="NIC"
              id="teacherNic"
              name="teacherNic"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherNic}
            />
            {formik.touched.teacherNic && formik.errors.teacherNic ? (
              <div style={{ color: "red" }}>{formik.errors.teacherNic}</div>
            ) : null}
          </Form.Field>
          <Form.Field
            control={Select}
            label="Gender"
            options={genderOptions}
            placeholder="Gender"
            id="teacherGender"
            name="teacherGender"
            onChange={formik.handleChange}
          />

          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              id="teacherEmail"
              name="teacherEmail"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherEmail}
            />
            {formik.touched.teacherEmail && formik.errors.teacherEmail ? (
              <div style={{ color: "red" }}>{formik.errors.teacherEmail}</div>
            ) : null}
          </Form.Field>
          <Form.Field>
            <label>Mobile</label>
            <input
              placeholder="Mobile"
              id="teacherMobile"
              name="teacherMobile"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherMobile}
            />
            {formik.touched.teacherMobile && formik.errors.teacherMobile ? (
              <div style={{ color: "red" }}>{formik.errors.teacherMobile}</div>
            ) : null}
          </Form.Field>
          <Form.Field>
            <label>Subject</label>
            <input
              placeholder="Subject"
              id="teacherSubject"
              name="teacherSubject"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherSubject}
            />
            {formik.touched.teacherSubject && formik.errors.teacherSubject ? (
              <div style={{ color: "red" }}>{formik.errors.teacherSubject}</div>
            ) : null}
          </Form.Field>
          <Form.Field>
            <label>Grade</label>
            <input
              placeholder="Grade"
              id="teacherGrade"
              name="teacherGrade"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherGrade}
            />
            {formik.touched.teacherGrade && formik.errors.teacherGrade ? (
              <div style={{ color: "red" }}>{formik.errors.teacherGrade}</div>
            ) : null}
          </Form.Field>
          <Form.Field
            control={Select}
            label="Gender"
            options={gradeOptions}
            placeholder="Gender"
            id="teacherGender"
            name="teacherGender"
            onChange={formik.handleChange}
          />
          {/* <Form.Field>
            <label>Grade</label>
            <input placeholder='Grade'
            type="text"
           />
          </Form.Field> */}

          <Button primary type="submit" size="small">
            Submit
          </Button>
          <Button secondary type="clear" size="small">
            Reset
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddStudent;
