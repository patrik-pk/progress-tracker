// Make a deep copy of an object
export const deepCopy = input => {
    if (typeof input !== 'object' || input === null) return input

    let output, value, key
    // Create an array or object to hold the values
    output = Array.isArray(input) ? [] : {}

    for (key in input) {
        value = input[key]

        // Recursively (deep) copy for nested objects, including arrays
        output[key] = deepCopy(value)
    }

    return output
}