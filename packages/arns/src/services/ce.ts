import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AnomalysubscriptionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly identifier: string
}
class AnomalysubscriptionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'anomalysubscription', `arn:${string}:ce::${string}:anomalysubscription/${string}`> {
  readonly [ArnResourceTypeBrand] = 'anomalysubscription' as const
  readonly partition: Partition
  readonly account: string
  readonly identifier: string
  constructor(parameters: AnomalysubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:anomalysubscription/${this.identifier}` as const
  }
}
export type { AnomalysubscriptionArn }
export function anomalysubscriptionArn<Partition extends ArnPartition = 'aws'>(parameters: AnomalysubscriptionArnParameters<Partition>) {
  return new AnomalysubscriptionArn<Partition>(parameters)
}

export interface AnomalymonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly identifier: string
}
class AnomalymonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'anomalymonitor', `arn:${string}:ce::${string}:anomalymonitor/${string}`> {
  readonly [ArnResourceTypeBrand] = 'anomalymonitor' as const
  readonly partition: Partition
  readonly account: string
  readonly identifier: string
  constructor(parameters: AnomalymonitorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:anomalymonitor/${this.identifier}` as const
  }
}
export type { AnomalymonitorArn }
export function anomalymonitorArn<Partition extends ArnPartition = 'aws'>(parameters: AnomalymonitorArnParameters<Partition>) {
  return new AnomalymonitorArn<Partition>(parameters)
}

export interface CostcategoryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly identifier: string
}
class CostcategoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'costcategory', `arn:${string}:ce::${string}:costcategory/${string}`> {
  readonly [ArnResourceTypeBrand] = 'costcategory' as const
  readonly partition: Partition
  readonly account: string
  readonly identifier: string
  constructor(parameters: CostcategoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:costcategory/${this.identifier}` as const
  }
}
export type { CostcategoryArn }
export function costcategoryArn<Partition extends ArnPartition = 'aws'>(parameters: CostcategoryArnParameters<Partition>) {
  return new CostcategoryArn<Partition>(parameters)
}