import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResourceContactEmailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idContactEmail: string
}
class ResourceContactEmailArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EmailContactResource',
  `arn:${string}:notifications-contacts::${string}:emailcontact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EmailContactResource' as const
  readonly partition: string
  readonly account: string
  readonly idContactEmail: string
  constructor(parameters: ResourceContactEmailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idContactEmail = parameters.idContactEmail
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications-contacts::${this.account}:emailcontact/${this.idContactEmail}` as const
  }
}
export type { ResourceContactEmailArn }
export function resourceContactEmailArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceContactEmailArnParameters<Partition>,
) {
  return new ResourceContactEmailArn<Partition>(parameters)
}
