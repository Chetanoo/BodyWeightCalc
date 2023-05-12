import React, { useState } from 'react'
import 'App.css'
import { Formik, Form } from 'formik'
import { formulas, gendersConst } from './constants'
import calculateIdealBodyWeight from 'services/calculateIdealBodyWeight'
import CustomSelect from 'components/CustomSelect'
import CustomCheckbox from 'components/CustomCheckbox'
import CustomNumberInput from 'components/CustomNumberInput'
import { heightValidationSchema } from 'validationSchema'

function App(): JSX.Element {
    const [gender, setGender] = useState(gendersConst.male)
    const [units, setUnits] = useState(true)
    const [formula, setFormula] = useState(formulas.devine)
    const [height, setHeight] = useState(1)
    const [idealBodyWeight, setIdealBodyWeight] = useState(0)
    return (
        <div className="App">
            <Formik
                initialValues={{ gender, height, units, formula }}
                validationSchema={heightValidationSchema}
                onSubmit={() => {
                    console.log({ gender, height, units, formula })
                    setIdealBodyWeight(
                        calculateIdealBodyWeight(height, gender, units, formula)
                    )
                }}
            >
                {() => (
                    <Form>
                        <CustomSelect
                            label="Choose gender:"
                            id="gender"
                            name="gender"
                            options={[gendersConst.male, gendersConst.female]}
                            onChangeCb={setGender}
                        />

                        <CustomSelect
                            label="Choose formula:"
                            id="formula"
                            name="formula"
                            options={[formulas.devine, formulas.robinson]}
                            onChangeCb={setFormula}
                        />

                        <CustomCheckbox
                            label="Choose formula:"
                            name="units"
                            onChangeCb={setUnits}
                            value={units}
                        />

                        <CustomNumberInput
                            id="height"
                            name="height"
                            onChangeCb={setHeight}
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <div>{idealBodyWeight}</div>
            {/* {!!idealBodyWeight && ( */}
            {/*    <span> */}
            {/*        Note that these formulas are only estimations and may not be */}
            {/*        accurate for all individuals. Factors like muscle mass, body */}
            {/*        fat percentage, and overall health should also be considered */}
            {/*        when determining an individual's ideal body weight. It's */}
            {/*        always a good idea to consult with a healthcare professional */}
            {/*        for personalized advice. */}
            {/*    </span> */}
            {/* )} */}
        </div>
    )
}

export default App
