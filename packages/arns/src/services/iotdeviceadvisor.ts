import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface SuitedefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
}
class SuitedefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Suitedefinition', `arn:${string}:iotdeviceadvisor:${string}:${string}:suitedefinition/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Suitedefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
  constructor(parameters: SuitedefinitionArnParameters<Partition>) {
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
export type { SuitedefinitionArn }
export function suitedefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: SuitedefinitionArnParameters<Partition>) {
  return new SuitedefinitionArn<Partition>(parameters)
}

export interface SuiterunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
  readonly suiteRunId: string
}
class SuiterunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Suiterun', `arn:${string}:iotdeviceadvisor:${string}:${string}:suiterun/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Suiterun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly suiteDefinitionId: string
  readonly suiteRunId: string
  constructor(parameters: SuiterunArnParameters<Partition>) {
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
export type { SuiterunArn }
export function suiterunArn<Partition extends ArnPartition = 'aws'>(parameters: SuiterunArnParameters<Partition>) {
  return new SuiterunArn<Partition>(parameters)
}