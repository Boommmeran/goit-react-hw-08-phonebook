import { register } from 'redux/auth/operations';
import { useDispatch } from "react-redux";
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  Label,
  Input,
  Button,
  StyledErrorMessage,
} from './RegisterPage.styled';

const schema = yup.object().shape({
  name: yup.string().required('It is required field'),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    console.log('dcwew');
    resetForm();
  };
  
  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmitForm}
        validationSchema={schema}
      >
        <StyledForm>
          <Label>
            Name
            <Input type="text" name="name" />
          </Label>

          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="Example: example@mail.com"
            />
            <ErrorMessage name="email">
              {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
            <ErrorMessage name="password">
              {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </Label>
          <Button type="submit">Create account</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
