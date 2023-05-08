import { formulas, gendersConst } from '../constants'

function calculateIdealBodyWeight(
    height: number,
    gender: string,
    units: boolean,
    formula: string
): number {
    if (units) {
        if (gender === gendersConst.male) {
            if (formula === formulas.devine) {
                return 50 + 0.9 * (height - 152)
            }
            if (formula === formulas.robinson) {
                return 52 + (1.9 * (height - 152)) / 2.54
            }
        }
        if (gender === gendersConst.female) {
            if (formula === formulas.devine) {
                return 45.5 + 0.9 * (height - 152)
            }
            if (formula === formulas.robinson) {
                return 49 + (1.7 * (height - 152)) / 2.54
            }
        }
    } else {
        if (gender === gendersConst.male) {
            if (formula === formulas.devine) {
                return 110 + 5 * (height - 60)
            }
            if (formula === formulas.robinson) {
                return 114 + 6 * (height - 60)
            }
        }
        if (gender === gendersConst.female) {
            if (formula === formulas.devine) {
                return 100 + 5 * (height - 60)
            }
            if (formula === formulas.robinson) {
                return 108 + 5 * (height - 60)
            }
        }
    }
    return 0
}

export default calculateIdealBodyWeight
