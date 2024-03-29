export interface Clan {
    id: string,
    first_name: string,
    last_name: string,
    birth_year: number,
    sex: string,
    payer: boolean,
    father_name: string,
    mother_name: string,
    married: boolean,
    spouseId?: string,
    phone_number: string,
    email: string,
    jmbg: string,
    address: string,
    dzemat_id: string,
    status: boolean,
    obligations: boolean,
    role: number,
    year_registrered: number;
    year_of_birth: number;
}
