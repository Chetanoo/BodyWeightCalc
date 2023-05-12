import { formulas, gendersConst } from '../constants'

function calculateIdealBodyWeight(
    height: number,
    gender: string,
    units: boolean,
    formula: string
): number {
    let idealBodyWeight = 0
    if (units) {
        if (gender === gendersConst.male) {
            if (formula === formulas.devine) {
                idealBodyWeight = 50 + 0.9 * (height - 152)
            }
            if (formula === formulas.robinson) {
                idealBodyWeight = 52 + (1.9 * (height - 152)) / 2.54
            }
        }
        if (gender === gendersConst.female) {
            if (formula === formulas.devine) {
                idealBodyWeight = 45.5 + 0.9 * (height - 152)
            }
            if (formula === formulas.robinson) {
                idealBodyWeight = 49 + (1.7 * (height - 152)) / 2.54
            }
        }
    } else {
        if (gender === gendersConst.male) {
            if (formula === formulas.devine) {
                idealBodyWeight = 110 + 5 * (height - 60)
            }
            if (formula === formulas.robinson) {
                idealBodyWeight = 114 + 6 * (height - 60)
            }
        }
        if (gender === gendersConst.female) {
            if (formula === formulas.devine) {
                idealBodyWeight = 100 + 5 * (height - 60)
            }
            if (formula === formulas.robinson) {
                idealBodyWeight = 108 + 5 * (height - 60)
            }
        }
    }
    return parseFloat(idealBodyWeight.toFixed(1))
}

export default calculateIdealBodyWeight
