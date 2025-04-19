import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface TerminologyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
}
class TerminologyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'terminology', `arn:${string}:translate:${string}:${string}:terminology/${string}`> {
  readonly [ArnResourceTypeBrand] = 'terminology' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
  constructor(parameters: TerminologyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceName = parameters.resourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:translate:${this.region}:${this.account}:terminology/${this.resourceName}` as const
  }
}
export type { TerminologyArn }
export function terminologyArn<Partition extends ArnPartition = 'aws'>(parameters: TerminologyArnParameters<Partition>) {
  return new TerminologyArn<Partition>(parameters)
}

export interface ParallelDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
}
class ParallelDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'parallel-data', `arn:${string}:translate:${string}:${string}:parallel-data/${string}`> {
  readonly [ArnResourceTypeBrand] = 'parallel-data' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
  constructor(parameters: ParallelDataArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceName = parameters.resourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:translate:${this.region}:${this.account}:parallel-data/${this.resourceName}` as const
  }
}
export type { ParallelDataArn }
export function parallelDataArn<Partition extends ArnPartition = 'aws'>(parameters: ParallelDataArnParameters<Partition>) {
  return new ParallelDataArn<Partition>(parameters)
}