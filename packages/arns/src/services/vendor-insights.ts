import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DatasourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idResource: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'DataSource',
  `arn:${string}:vendor-insights:::data-source:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DataSource' as const
  readonly partition: string
  readonly idResource: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vendor-insights:::data-source:${this.idResource}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface ProfileSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idResource: string
}
class ProfileSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SecurityProfile',
  `arn:${string}:vendor-insights:::security-profile:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SecurityProfile' as const
  readonly partition: string
  readonly idResource: string
  constructor(parameters: ProfileSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vendor-insights:::security-profile:${this.idResource}` as const
  }
}
export type { ProfileSecurityArn }
export function profileSecurityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileSecurityArnParameters<Partition>,
) {
  return new ProfileSecurityArn<Partition>(parameters)
}
