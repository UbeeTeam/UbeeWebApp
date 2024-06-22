export interface Props {
    review: {
        Id: number,
        MasterId: string,
        CustomerId: string,
        CustomerName: string,
        Comment: string,
        Rate: number,
        PublishDate: string,
        MasterActivityIds: number[]
    }
}