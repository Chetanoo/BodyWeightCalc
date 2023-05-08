import React, { useState } from 'react'
import './App.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { formulas, gendersConst } from './constants'
import calculateIdealBodyWeight from './services/calculateIdealBodyWeight'

function App(): JSX.Element {
    const [gender, setGender] = useState(gendersConst.male)
    const [units, setUnits] = useState(true)
    const [formula, setFormula] = useState(formulas.devine)
    const [height, setHeight] = useState(0)
    const [idealBodyWeight, setIdealBodyWeight] = useState(0)
    return (
        <div className="App">
            <Formik
                initialValues={{ gender, height, units }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log({ height, gender, units })
                    setIdealBodyWeight(
                        calculateIdealBodyWeight(height, gender, units, formula)
                    )
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            id="gender"
                            as="select"
                            className="block w-52 pl-3 pr-10 py-2 mx-auto border border-gray-300 rounded-md bg-none
                                 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            name="gender"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setGender(e.target.value)
                            }}
                            value={gender}
                        >
                            <option value={gendersConst.male}>
                                {gendersConst.male}
                            </option>
                            <option value={gendersConst.female}>
                                {gendersConst.female}
                            </option>
                        </Field>
                        <ErrorMessage name="gender" component="div" />

                        <Field
                            id="formula"
                            as="select"
                            className="block w-52 pl-3 pr-10 py-2 mx-auto border border-gray-300 rounded-md bg-none
                                 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            name="formula"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setFormula(e.target.value)
                            }}
                            value={formula}
                        >
                            <option value={formulas.devine}>
                                {formulas.devine}
                            </option>
                            <option value={formulas.robinson}>
                                {formulas.robinson}
                            </option>
                        </Field>
                        <ErrorMessage name="formula" component="div" />

                        <Field
                            id="units"
                            type="checkbox"
                            // className="block w-52 pl-3 pr-10 py-2 mx-auto border border-gray-300 rounded-md bg-none
                            //      focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            name="units"
                            onChange={(): void => {
                                setUnits(!units)
                            }}
                            checked={units}
                        />
                        <ErrorMessage name="units" component="div" />
                        <br />

                        <Field
                            type="number"
                            name="height"
                            min="1"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setHeight(parseInt(e.target.value))
                            }}
                            value={height}
                        />
                        <ErrorMessage name="height" component="div" />
                        <br />

                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                            disabled={isSubmitting}
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
