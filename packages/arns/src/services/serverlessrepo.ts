import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ApplicationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'applications',
  `arn:${string}:serverlessrepo:${string}:${string}:applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'applications' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ApplicationsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:serverlessrepo:${this.region}:${this.account}:applications/${this.idResource}` as const
  }
}
export type { ApplicationsArn }
export function applicationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationsArnParameters<Partition>,
) {
  return new ApplicationsArn<Partition>(parameters)
}
