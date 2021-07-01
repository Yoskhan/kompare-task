import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Container, Box, TextField, Button } from '@material-ui/core';

import { createUser } from '../../store/user/user-actions';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
});

const InputForm = () => {
  const dispatch = useDispatch();

  // const [formValues, setFormValues] = useState({
  //   name: '',
  //   lastname: '',
  //   email: '',
  // });

  // const onInput = (e) => {
  //   setFormValues({ ...formValues, [e.target.id]: e.target.value });
  // };

  // const submitHandler = async (e) => dispatch(createUser(formValues));

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    onSubmit: async (values, { resetForm }) => {
      dispatch(createUser(values));
    },
    validationSchema: validationSchema,
  });

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          style={{ minHeight: '100px' }}
        >
          <Box m={2}>
            <TextField
              id="name"
              name="name"
              value={formik.values.name}
              label="Name"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
            ></TextField>
          </Box>
          <Box m={2}>
            <TextField
              id="lastname"
              name="lastname"
              value={formik.values.lastname}
              label="Last Name"
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
              onBlur={formik.handleBlur}
            ></TextField>
          </Box>
          <Box m={2}>
            <TextField
              id="email"
              name="email"
              value={formik.values.email}
              label="Email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
            ></TextField>
          </Box>
          <Box m={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default InputForm;
