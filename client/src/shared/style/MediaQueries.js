const size = {
    small: '500px',
    medium: '768px',
    large: '992px',
    extraLarge: '1200px',
}

const device = {
    small: `(min-width: ${size.small})`,
    medium: `(min-width: ${size.medium})`,
    large: `(min-width: ${size.large})`,
    extraLarge: `(min-width: ${size.extraLarge})`,
}

export default device