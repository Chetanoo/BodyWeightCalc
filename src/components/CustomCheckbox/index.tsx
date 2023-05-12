import React from 'react'
import { ErrorMessage } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { type CustomCheckboxInterface } from 'interfaces'

const CustomCheckbox = ({
    name,
    onChangeCb,
    value,
}: CustomCheckboxInterface): JSX.Element => {
    return (
        <div className="flex flex-column m-auto">
            <label htmlFor={name}>Choose units:</label>
            <BootstrapSwitchButton
                checked={value}
                onlabel="Metric"
                onstyle="primary"
                offlabel="Imperial"
                offstyle="success"
                style="m-auto"
                width={200}
                onChange={() => {
                    onChangeCb(!value)
                }}
            />
            <ErrorMessage name={name} component="div" />
        </div>
    )
}

export default CustomCheckbox
