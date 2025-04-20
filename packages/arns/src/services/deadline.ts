import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BudgetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly budgetId: string
}
class BudgetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'budget',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/budget/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'budget' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly budgetId: string
  constructor(parameters: BudgetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.farmId = parameters.farmId
    this.budgetId = parameters.budgetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.farmId}/budget/${this.budgetId}` as const
  }
}
export type { BudgetArn }
export function budgetArn<Partition extends ArnPartition = 'aws'>(
  parameters: BudgetArnParameters<Partition>,
) {
  return new BudgetArn<Partition>(parameters)
}

export interface FarmArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
}
class FarmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'farm',
  `arn:${string}:deadline:${string}:${string}:farm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'farm' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  constructor(parameters: FarmArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.farmId = parameters.farmId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.farmId}` as const
  }
}
export type { FarmArn }
export function farmArn<Partition extends ArnPartition = 'aws'>(
  parameters: FarmArnParameters<Partition>,
) {
  return new FarmArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly fleetId: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly fleetId: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.farmId = parameters.farmId
    this.fleetId = parameters.fleetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.farmId}/fleet/${this.fleetId}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly queueId: string
  readonly jobId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/queue/${string}/job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly queueId: string
  readonly jobId: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.farmId = parameters.farmId
    this.queueId = parameters.queueId
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.farmId}/queue/${this.queueId}/job/${this.jobId}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface LicenseEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseEndpointId: string
}
class LicenseEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'license-endpoint',
  `arn:${string}:deadline:${string}:${string}:license-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'license-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseEndpointId: string
  constructor(parameters: LicenseEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.licenseEndpointId = parameters.licenseEndpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:license-endpoint/${this.licenseEndpointId}` as const
  }
}
export type { LicenseEndpointArn }
export function licenseEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: LicenseEndpointArnParameters<Partition>,
) {
  return new LicenseEndpointArn<Partition>(parameters)
}

export interface MeteredProductArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseEndpointId: string
  readonly productId: string
}
class MeteredProductArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'metered-product',
  `arn:${string}:deadline:${string}:${string}:license-endpoint/${string}/metered-product/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'metered-product' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseEndpointId: string
  readonly productId: string
  constructor(parameters: MeteredProductArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.licenseEndpointId = parameters.licenseEndpointId
    this.productId = parameters.productId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:license-endpoint/${this.licenseEndpointId}/metered-product/${this.productId}` as const
  }
}
export type { MeteredProductArn }
export function meteredProductArn<Partition extends ArnPartition = 'aws'>(
  parameters: MeteredProductArnParameters<Partition>,
) {
  return new MeteredProductArn<Partition>(parameters)
}

export interface MonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitorId: string
}
class MonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'monitor',
  `arn:${string}:deadline:${string}:${string}:monitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitorId: string
  constructor(parameters: MonitorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.monitorId = parameters.monitorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:monitor/${this.monitorId}` as const
  }
}
export type { MonitorArn }
export function monitorArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitorArnParameters<Partition>,
) {
  return new MonitorArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly queueId: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'queue',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queue' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly queueId: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.farmId = parameters.farmId
    this.queueId = parameters.queueId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.farmId}/queue/${this.queueId}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}

export interface WorkerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly fleetId: string
  readonly workerId: string
}
class WorkerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'worker',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/fleet/${string}/worker/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'worker' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly farmId: string
  readonly fleetId: string
  readonly workerId: string
  constructor(parameters: WorkerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.farmId = parameters.farmId
    this.fleetId = parameters.fleetId
    this.workerId = parameters.workerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.farmId}/fleet/${this.fleetId}/worker/${this.workerId}` as const
  }
}
export type { WorkerArn }
export function workerArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkerArnParameters<Partition>,
) {
  return new WorkerArn<Partition>(parameters)
}
