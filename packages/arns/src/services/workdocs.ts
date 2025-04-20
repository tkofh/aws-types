import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface OrganizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class OrganizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'organization',
  `arn:${string}:workdocs:${string}:${string}:organization/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'organization' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: OrganizationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workdocs:${this.region}:${this.account}:organization/${this.idResource}` as const
  }
}
export type { OrganizationArn }
export function organizationArn<Partition extends ArnPartition = 'aws'>(
  parameters: OrganizationArnParameters<Partition>,
) {
  return new OrganizationArn<Partition>(parameters)
}
