import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { signIn } from "./../../slices/authSlice";
import { loadingStarted, loadingStopped } from '../../slices/statusSlice';

const validations = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function SignIn(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.status.loading);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div>
      -{user ? user.email : "..."}-
      -{`${loading}`}-
      <Formik
        initialValues={{
          email: "nicolle@gmail.com",
          password: "nicolle1234",
        }}
        validationSchema={validations}
        onSubmit={
          async (values, { setStatus }) => {
            try {
              dispatch(loadingStarted());
              const { error, payload } = await dispatch(signIn(values));
              if (error) {
                setErrorMessage(error.message);
              }
              else if (payload.data) {
                router.push(payload.data.role)
              }
              dispatch(loadingStopped());
            } catch (err) {
              console.error("Failed to login: ", err);
            }
          }}
      >
        {({ status }) => (
          <>
            <p>{errorMessage}</p>
            <Form>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
              <label>Password</label>
              <Field name="password" type="password" />

              <button type="submit">LOGIN</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
