import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface MessageRawArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOrganization: string
  readonly context: string
  readonly idMessage: string
}
class MessageRawArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'RawMessage',
  `arn:${string}:workmailmessageflow:${string}:${string}:message/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RawMessage' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOrganization: string
  readonly context: string
  readonly idMessage: string
  constructor(parameters: MessageRawArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
    this.context = parameters.context
    this.idMessage = parameters.idMessage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workmailmessageflow:${this.region}:${this.account}:message/${this.idOrganization}/${this.context}/${this.idMessage}` as const
  }
}
export type { MessageRawArn }
export function messageRawArn<Partition extends ArnPartition = 'aws'>(
  parameters: MessageRawArnParameters<Partition>,
) {
  return new MessageRawArn<Partition>(parameters)
}
