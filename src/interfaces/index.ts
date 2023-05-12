export interface GendersInterface {
    male: string
    female: string
}

export interface UnitsInterface {
    metric: string
    imperial: string
}

export interface FormulasInterface {
    devine: string
    robinson: string
}

export interface CustomSelectInterface {
    label: string
    id: string
    name: string
    options: string[]
    onChangeCb: (val: string) => void
}

export interface CustomCheckboxInterface {
    label: string
    name: string
    value: boolean
    onChangeCb: (val: boolean) => void
}

export interface CustomNumberInputInterface {
    id: string
    name: string
    onChangeCb: (val: number) => void
}

export interface FormValuesInterface {
    height: number
    gender: string
    formula: string
    unit: boolean
    [key: string]: number | string | boolean // add index signature
}
