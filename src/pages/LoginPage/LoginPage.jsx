import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  Label,
  Input,
  Button,
  StyledErrorMessage,
} from './LoginPage.styled';

const schema = yup.object().shape({
  email: yup.string().required('It is required field'),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    console.log('dcwew');
    resetForm();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmitForm}
        validationSchema={schema}
      >
        <StyledForm>

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
          <Button type="submit">Log In</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
