import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BudgetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idBudget: string
}
class BudgetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'budget',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/budget/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'budget' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idBudget: string
  constructor(parameters: BudgetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFarm = parameters.idFarm
    this.idBudget = parameters.idBudget
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.idFarm}/budget/${this.idBudget}` as const
  }
}
export type { BudgetArn }
export function budgetArn<Partition extends ArnPartition = 'aws'>(
  parameters: BudgetArnParameters<Partition>,
) {
  return new BudgetArn<Partition>(parameters)
}

export interface FarmArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
}
class FarmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'farm',
  `arn:${string}:deadline:${string}:${string}:farm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'farm' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  constructor(parameters: FarmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFarm = parameters.idFarm
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.idFarm}` as const
  }
}
export type { FarmArn }
export function farmArn<Partition extends ArnPartition = 'aws'>(
  parameters: FarmArnParameters<Partition>,
) {
  return new FarmArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idFleet: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idFleet: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFarm = parameters.idFarm
    this.idFleet = parameters.idFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.idFarm}/fleet/${this.idFleet}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idQueue: string
  readonly idJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/queue/${string}/job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idQueue: string
  readonly idJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFarm = parameters.idFarm
    this.idQueue = parameters.idQueue
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.idFarm}/queue/${this.idQueue}/job/${this.idJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface EndpointLicenseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointLicense: string
}
class EndpointLicenseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'license-endpoint',
  `arn:${string}:deadline:${string}:${string}:license-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'license-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointLicense: string
  constructor(parameters: EndpointLicenseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointLicense = parameters.idEndpointLicense
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:license-endpoint/${this.idEndpointLicense}` as const
  }
}
export type { EndpointLicenseArn }
export function endpointLicenseArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointLicenseArnParameters<Partition>,
) {
  return new EndpointLicenseArn<Partition>(parameters)
}

export interface ProductMeteredArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointLicense: string
  readonly idProduct: string
}
class ProductMeteredArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'metered-product',
  `arn:${string}:deadline:${string}:${string}:license-endpoint/${string}/metered-product/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'metered-product' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointLicense: string
  readonly idProduct: string
  constructor(parameters: ProductMeteredArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointLicense = parameters.idEndpointLicense
    this.idProduct = parameters.idProduct
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:license-endpoint/${this.idEndpointLicense}/metered-product/${this.idProduct}` as const
  }
}
export type { ProductMeteredArn }
export function productMeteredArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProductMeteredArnParameters<Partition>,
) {
  return new ProductMeteredArn<Partition>(parameters)
}

export interface MonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMonitor: string
}
class MonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'monitor',
  `arn:${string}:deadline:${string}:${string}:monitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMonitor: string
  constructor(parameters: MonitorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMonitor = parameters.idMonitor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:monitor/${this.idMonitor}` as const
  }
}
export type { MonitorArn }
export function monitorArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitorArnParameters<Partition>,
) {
  return new MonitorArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idQueue: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'queue',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idQueue: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFarm = parameters.idFarm
    this.idQueue = parameters.idQueue
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.idFarm}/queue/${this.idQueue}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}

export interface WorkerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idFleet: string
  readonly idWorker: string
}
class WorkerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'worker',
  `arn:${string}:deadline:${string}:${string}:farm/${string}/fleet/${string}/worker/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'worker' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFarm: string
  readonly idFleet: string
  readonly idWorker: string
  constructor(parameters: WorkerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFarm = parameters.idFarm
    this.idFleet = parameters.idFleet
    this.idWorker = parameters.idWorker
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deadline:${this.region}:${this.account}:farm/${this.idFarm}/fleet/${this.idFleet}/worker/${this.idWorker}` as const
  }
}
export type { WorkerArn }
export function workerArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkerArnParameters<Partition>,
) {
  return new WorkerArn<Partition>(parameters)
}
