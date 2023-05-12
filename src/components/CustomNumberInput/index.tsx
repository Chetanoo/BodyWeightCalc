import React from 'react'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import {
    type CustomNumberInputInterface,
    type FormValuesInterface,
} from 'interfaces'
const CustomNumberInput = ({
    id,
    name,
    onChangeCb,
}: CustomNumberInputInterface): JSX.Element => {
    const { handleChange, values } = useFormikContext<FormValuesInterface>()

    const handleChangeCb = (e: React.ChangeEvent<HTMLInputElement>): void => {
        handleChange(e)
        onChangeCb(parseInt(e.target.value))
    }
    return (
        <div>
            <label htmlFor={name} className="block mb-2">
                Number Input (1 - 300):
            </label>
            <Field
                id={id}
                type="number"
                name={name}
                min="1"
                max="300"
                value={values[name]}
                onChange={handleChangeCb}
            />
            <ErrorMessage name={name} component="div" />
        </div>
    )
}

export default CustomNumberInput
