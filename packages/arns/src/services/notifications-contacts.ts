import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EmailContactResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly emailContactId: string
}
class EmailContactResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'EmailContactResource', `arn:${string}:notifications-contacts::${string}:emailcontact/${string}`> {
  readonly [ArnResourceTypeBrand] = 'EmailContactResource' as const
  readonly partition: Partition
  readonly account: string
  readonly emailContactId: string
  constructor(parameters: EmailContactResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.emailContactId = parameters.emailContactId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications-contacts::${this.account}:emailcontact/${this.emailContactId}` as const
  }
}
export type { EmailContactResourceArn }
export function emailContactResourceArn<Partition extends ArnPartition = 'aws'>(parameters: EmailContactResourceArnParameters<Partition>) {
  return new EmailContactResourceArn<Partition>(parameters)
}