import * as Yup from 'yup'
export const heightValidationSchema = Yup.object({
    height: Yup.number()
        .min(1, 'Must be more than 1')
        .max(300, 'Must be less than 300')
        .required('Required'),
})
