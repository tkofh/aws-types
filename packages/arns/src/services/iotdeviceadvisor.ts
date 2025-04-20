import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SuiteDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
}
class SuiteDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Suitedefinition',
  `arn:${string}:iotdeviceadvisor:${string}:${string}:suitedefinition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Suitedefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
  constructor(parameters: SuiteDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.suiteDefinitionId = parameters.suiteDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotdeviceadvisor:${this.region}:${this.account}:suitedefinition/${this.suiteDefinitionId}` as const
  }
}
export type { SuiteDefinitionArn }
export function suiteDefinitionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SuiteDefinitionArnParameters<Partition>,
) {
  return new SuiteDefinitionArn<Partition>(parameters)
}

export interface SuiteRunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
  readonly suiteRunId: string
}
class SuiteRunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Suiterun',
  `arn:${string}:iotdeviceadvisor:${string}:${string}:suiterun/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Suiterun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
  readonly suiteRunId: string
  constructor(parameters: SuiteRunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.suiteDefinitionId = parameters.suiteDefinitionId
    this.suiteRunId = parameters.suiteRunId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotdeviceadvisor:${this.region}:${this.account}:suiterun/${this.suiteDefinitionId}/${this.suiteRunId}` as const
  }
}
export type { SuiteRunArn }
export function suiteRunArn<Partition extends ArnPartition = 'aws'>(
  parameters: SuiteRunArnParameters<Partition>,
) {
  return new SuiteRunArn<Partition>(parameters)
}
