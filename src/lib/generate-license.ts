function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export const generateLicense = async (
    chars_count: number,
    segments_count: number
) => {
    const tokens = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const chars = chars_count
    const segments = segments_count
    let keyString = ''

    for (let i = 0; i < segments; i++) {
        let segment = ''

        for (let j = 0; j < chars; j++) {
            const k = getRandomInt(0, 35)
            segment += tokens[k]
        }

        keyString += segment

        if (i < segments - 1) {
            keyString += '-'
        }
    }

    return keyString
}
