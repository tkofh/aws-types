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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ApplicationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'applications',
  `arn:${string}:serverlessrepo:${string}:${string}:applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'applications' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ApplicationsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:serverlessrepo:${this.region}:${this.account}:applications/${this.resourceId}` as const
  }
}
export type { ApplicationsArn }
export function applicationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationsArnParameters<Partition>,
) {
  return new ApplicationsArn<Partition>(parameters)
}
