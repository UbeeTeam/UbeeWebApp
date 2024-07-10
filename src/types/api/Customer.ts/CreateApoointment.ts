export interface CreateAppontment {
    masterId?: string,
    started?: string,
    timeSlot?: string,
    isAllergic: boolean,
    description: string,
    masterServiceIds: number[],
    customerFirstName?: string,
    customerLastName?: string,
    customerGenderId?: number
}

export interface CreateAppontmentHeaders {
    Authorization: string,
}