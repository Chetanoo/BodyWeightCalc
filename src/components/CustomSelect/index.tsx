import React from 'react'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import {
    type CustomSelectInterface,
    type FormValuesInterface,
} from 'interfaces'

const CustomSelect = ({
    id,
    name,
    onChangeCb,
    options,
    label,
}: CustomSelectInterface): JSX.Element => {
    const { handleChange, values } = useFormikContext<FormValuesInterface>()

    const handleChangeCb = (e: React.ChangeEvent<HTMLInputElement>): void => {
        handleChange(e)
        onChangeCb(e.target.value)
    }
    return (
        <div>
            <label htmlFor={name} className="block mb-2">
                {label}
            </label>
            <Field
                id={id}
                as="select"
                className="block w-52 pl-3 pr-10 py-2 mx-auto border border-gray-300 rounded-md bg-none
                                 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name={name}
                value={values[name]}
                onChange={handleChangeCb}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </Field>
            <ErrorMessage name={name} component="div" />
        </div>
    )
}

export default CustomSelect
