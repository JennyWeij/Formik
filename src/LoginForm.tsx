import { useFormik } from "formik";
import * as Yup from 'yup';

// interface FormValues {
//   email: string;
//   password: string;
// }

const LoginSchema = Yup.object().shape ({
  email: Yup.string()
    .email("Var god ange en giltig email")
    .required('Var god ange en email'),
  password: Yup.string().required('Var god ange ett lösenord'),
})

type LoginValues = Yup.InferType<typeof LoginSchema> /*Samma sak som rad 5-8 */

function LoginForm() {
  const formik = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
    },
   validationSchema: LoginSchema,

    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        value={formik.values.email} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
      {formik.touched.email && formik.errors.email && 
        <span>{formik.errors.email}</span>}
      
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        name="password" 
        id="password"
        value={formik.values.password} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
      />

      {formik.touched.password && formik.errors.password && 
      <span>{formik.errors.password}</span>}
      <button>Login</button>
    </form>
  )
}


export default LoginForm