import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AnomalySubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly identifier: string
}
class AnomalySubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'anomalysubscription',
  `arn:${string}:ce::${string}:anomalysubscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'anomalysubscription' as const
  readonly partition: Partition
  readonly account: string
  readonly identifier: string
  constructor(parameters: AnomalySubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:anomalysubscription/${this.identifier}` as const
  }
}
export type { AnomalySubscriptionArn }
export function anomalySubscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnomalySubscriptionArnParameters<Partition>,
) {
  return new AnomalySubscriptionArn<Partition>(parameters)
}

export interface AnomalyMonitorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly identifier: string
}
class AnomalyMonitorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'anomalymonitor',
  `arn:${string}:ce::${string}:anomalymonitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'anomalymonitor' as const
  readonly partition: Partition
  readonly account: string
  readonly identifier: string
  constructor(parameters: AnomalyMonitorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:anomalymonitor/${this.identifier}` as const
  }
}
export type { AnomalyMonitorArn }
export function anomalyMonitorArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnomalyMonitorArnParameters<Partition>,
) {
  return new AnomalyMonitorArn<Partition>(parameters)
}

export interface CostCategoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly identifier: string
}
class CostCategoryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'costcategory',
  `arn:${string}:ce::${string}:costcategory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'costcategory' as const
  readonly partition: Partition
  readonly account: string
  readonly identifier: string
  constructor(parameters: CostCategoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:costcategory/${this.identifier}` as const
  }
}
export type { CostCategoryArn }
export function costCategoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: CostCategoryArnParameters<Partition>,
) {
  return new CostCategoryArn<Partition>(parameters)
}
