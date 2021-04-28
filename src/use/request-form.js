import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(fn) {
  const {handleSubmit, isSubmitting} = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField('name', yup.string().trim().required())
  const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField('phone', yup.string().trim().required())
  const {value: sum, errorMessage: sError, handleBlur: sBlur} = useField('sum', yup.number().required().min(0, 'Sum can\'t be lower than zero.'))
  const {value: status} = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
    onSubmit,
    isSubmitting,
    status,
    name,
    phone,
    sum,
    nError,
    pError,
    sError,
    nBlur,
    pBlur,
    sBlur
  }
}
