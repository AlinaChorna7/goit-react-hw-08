import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css'

const RegistrationForm=()=>{
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string()
          .min(2, 'Name must be at least 2 characters')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Required'),
      });

    return(
        <Formik
        initialValues={{name:'', email:'',password:''}}
        validationSchema={validationSchema}
        onSubmit={(values)=>{dispatch(register(values))}} >
        <Form>
            <div>
                <Field name="name" placeholder="Name"/>
                <ErrorMessage name="name" component="div" className={styles.error} />
            </div>
            <div>
                <Field name="email" placeholder="Email"/>
                <ErrorMessage name="email" component="div" className={styles.error}/>
            </div>
            <div>
                <Field name="password" type="password" placeholder="Password"/>
                <ErrorMessage name="password" component="div" className={styles.error}/>
            </div>
            <button type="submit">Submit</button>
        </Form>
        </Formik>
    )
}
export default RegistrationForm;