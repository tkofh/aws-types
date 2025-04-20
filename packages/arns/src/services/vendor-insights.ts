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
  readonly partition?: Partition | undefined
  readonly resourceId: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'DataSource',
  `arn:${string}:vendor-insights:::data-source:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DataSource' as const
  readonly partition: Partition
  readonly resourceId: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vendor-insights:::data-source:${this.resourceId}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface SecurityProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly resourceId: string
}
class SecurityProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SecurityProfile',
  `arn:${string}:vendor-insights:::security-profile:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SecurityProfile' as const
  readonly partition: Partition
  readonly resourceId: string
  constructor(parameters: SecurityProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vendor-insights:::security-profile:${this.resourceId}` as const
  }
}
export type { SecurityProfileArn }
export function securityProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecurityProfileArnParameters<Partition>,
) {
  return new SecurityProfileArn<Partition>(parameters)
}
