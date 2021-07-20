const ROMAN_DIGITS = ['I', 'II', 'III', 'IV', 'V', 'VI']

export const transformToRoman = number => {
    return ROMAN_DIGITS[number - 1].padEnd(3, ' ')
}