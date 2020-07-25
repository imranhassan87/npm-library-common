import { Subjects } from './subject'

export interface PaymentCreatedEvent {
    subject: Subjects.PaymentCreated
    data: {
        id: string
        orderId: string
        stripeId: string
    }
}