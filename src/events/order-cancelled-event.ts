import { Subjects } from './subject'

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled
    data: {
        id: string,
        ticket: {
            id: string
        },
    }
}