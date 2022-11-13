export const getCurrentDateToString = (): string => {
    let currentDate = new Date();
    return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}.`;
}