import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operation'; 

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
       const newContact = {
      name: values.name,
      number: values.number,
    };

    
    dispatch(addContact(newContact));
    resetForm(); 
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.formContainer}>
          <div className={styles.formField}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className={styles.inputField} />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>

          <div className={styles.formField}>
            <label htmlFor="number">Number</label>
            <Field name="number" type="text" className={styles.inputField} />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </div>

          <button type="submit" className={styles.submitButton}>Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;