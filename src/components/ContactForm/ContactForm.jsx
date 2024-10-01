import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';  // Импорт Yup для валидации
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  // Определение схемы валидации с помощью Yup
  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Минимум 3 символа')
      .max(50, 'Максимум 50 символов')
      .required('Обязательное поле'),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Некорректный номер телефона')
      .min(3, 'Минимум 3 цифры')
      .max(50, 'Максимум 50 цифр')
      .required('Обязательное поле'),
  });

  const handleForm = (value, actions) => {
    addContact(value);  
    actions.resetForm(); 
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleForm}
        validationSchema={orderSchema}
      >
        {({ isSubmitting }) => (
          <Form className={s.contactForm}>
            <label>
              Имя
              <Field className={s.formInput} name="name" />
              <ErrorMessage className={s.inputErr} name="name" component="p" />
            </label>
            <label>
              Номер телефона
              <Field className={s.formInput} name="number" />
              <ErrorMessage className={s.inputErr} name="number" component="p" />
            </label>
            <button className={s.formBtn} type="submit" disabled={isSubmitting}>
              Добавить контакт
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
