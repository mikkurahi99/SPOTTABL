export const getFirstNameLastNameCharacter = (name) => {
    const breakedName = name.split(" ");
    const firstNameCharacter = breakedName[0][0].toUpperCase();
    if (breakedName.length === 1) {
        return `${firstNameCharacter}`;
    }
    const lastNameCharacter =
        breakedName[breakedName.length - 1][0].toUpperCase();
    return `${firstNameCharacter}${lastNameCharacter}`;
};
