export interface Props {
    reviews: {
        Id: number,
        MasterId: string,
        CustomerId: string,
        CustomerName: string,
        Comment: string,
        Rate: number,
        PublishDate: string,
        MasterActivityIds: number[]
    }[]
}