import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.environmentId}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly applicationId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.environmentId}/application/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly applicationId: string
  readonly serviceId: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}/service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly applicationId: string
  readonly serviceId: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.applicationId = parameters.applicationId
    this.serviceId = parameters.serviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.environmentId}/application/${this.applicationId}/service/${this.serviceId}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface RouteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly applicationId: string
  readonly routeId: string
}
class RouteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'route',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}/route/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly applicationId: string
  readonly routeId: string
  constructor(parameters: RouteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.applicationId = parameters.applicationId
    this.routeId = parameters.routeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.environmentId}/application/${this.applicationId}/route/${this.routeId}` as const
  }
}
export type { RouteArn }
export function routeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteArnParameters<Partition>,
) {
  return new RouteArn<Partition>(parameters)
}
