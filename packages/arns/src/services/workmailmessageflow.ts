import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface RawMessageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly organizationId: string
  readonly context: string
  readonly messageId: string
}
class RawMessageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'RawMessage', `arn:${string}:workmailmessageflow:${string}:${string}:message/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'RawMessage' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly organizationId: string
  readonly context: string
  readonly messageId: string
  constructor(parameters: RawMessageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.organizationId = parameters.organizationId
    this.context = parameters.context
    this.messageId = parameters.messageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workmailmessageflow:${this.region}:${this.account}:message/${this.organizationId}/${this.context}/${this.messageId}` as const
  }
}
export type { RawMessageArn }
export function rawMessageArn<Partition extends ArnPartition = 'aws'>(parameters: RawMessageArnParameters<Partition>) {
  return new RawMessageArn<Partition>(parameters)
}