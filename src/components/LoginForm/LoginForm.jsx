import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operation";

import styles from './LoginForm.module.css'

export default function LoginForm(){
    const dispatch = useDispatch();
    function handleSubmit(values, actions){
        if(values.email === "" || values.password === "") return;
        dispatch(login(values));
        actions.resetForm();
        
    }
    return (
        <>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            <Form className={styles.form} autoComplete="off">
              <label className={styles.label}>
                Email <Field type="email" name="email"></Field>
              </label>
    
              <label className={styles.label}>
                Password <Field type="password" name="password"></Field>
              </label>
    
              <button type="submit">Login</button>
            </Form>
          </Formik>
        </>
      );
    
}