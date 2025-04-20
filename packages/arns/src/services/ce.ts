import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SubscriptionAnomalyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly identifier: string
}
class SubscriptionAnomalyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'anomalysubscription',
  `arn:${string}:ce::${string}:anomalysubscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'anomalysubscription' as const
  readonly partition: string
  readonly account: string
  readonly identifier: string
  constructor(parameters: SubscriptionAnomalyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:anomalysubscription/${this.identifier}` as const
  }
}
export type { SubscriptionAnomalyArn }
export function subscriptionAnomalyArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriptionAnomalyArnParameters<Partition>,
) {
  return new SubscriptionAnomalyArn<Partition>(parameters)
}

export interface MonitorAnomalyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly identifier: string
}
class MonitorAnomalyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'anomalymonitor',
  `arn:${string}:ce::${string}:anomalymonitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'anomalymonitor' as const
  readonly partition: string
  readonly account: string
  readonly identifier: string
  constructor(parameters: MonitorAnomalyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:anomalymonitor/${this.identifier}` as const
  }
}
export type { MonitorAnomalyArn }
export function monitorAnomalyArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitorAnomalyArnParameters<Partition>,
) {
  return new MonitorAnomalyArn<Partition>(parameters)
}

export interface CategoryCostArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly identifier: string
}
class CategoryCostArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'costcategory',
  `arn:${string}:ce::${string}:costcategory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'costcategory' as const
  readonly partition: string
  readonly account: string
  readonly identifier: string
  constructor(parameters: CategoryCostArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ce::${this.account}:costcategory/${this.identifier}` as const
  }
}
export type { CategoryCostArn }
export function categoryCostArn<Partition extends ArnPartition = 'aws'>(
  parameters: CategoryCostArnParameters<Partition>,
) {
  return new CategoryCostArn<Partition>(parameters)
}
