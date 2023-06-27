import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  resume: yup.string().required(),
  organization_id: yup.string().nullable(),
});
