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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.idEnvironment}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.idEnvironment}/application/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly idApplication: string
  readonly idService: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}/service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly idApplication: string
  readonly idService: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.idApplication = parameters.idApplication
    this.idService = parameters.idService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.idEnvironment}/application/${this.idApplication}/service/${this.idService}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface RouteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly idApplication: string
  readonly idRoute: string
}
class RouteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'route',
  `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}/route/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly idApplication: string
  readonly idRoute: string
  constructor(parameters: RouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.idApplication = parameters.idApplication
    this.idRoute = parameters.idRoute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:refactor-spaces:${this.region}:${this.account}:environment/${this.idEnvironment}/application/${this.idApplication}/route/${this.idRoute}` as const
  }
}
export type { RouteArn }
export function routeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteArnParameters<Partition>,
) {
  return new RouteArn<Partition>(parameters)
}
