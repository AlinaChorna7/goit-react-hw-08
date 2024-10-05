import { useDispatch } from "react-redux"
import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operation";
import Button from "../Button/Button";

const LoginForm=()=>{
    const dispatch = useDispatch();


    return(
        <Formik 
        initialValues={{email:'', password:''}}
        onSubmit={(values)=>{
            dispatch(login(values));
        }}
        >
            <Form>
                <Field name="email" placeholder="Email"/>
                <Field name="password" placeholder="Password" type="password"/>
                <Button type="submit">Login</Button>
            </Form>
        </Formik>
    )
}
export default LoginForm;