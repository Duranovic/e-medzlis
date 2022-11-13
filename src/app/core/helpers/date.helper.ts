export const getCurrentDateToString = (): string => {
    let currentDate = new Date();
    return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}.`;
}

export const convertToLocalDateString = (date: Date): string => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;
}