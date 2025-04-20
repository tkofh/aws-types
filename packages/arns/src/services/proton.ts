import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TemplateEnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class TemplateEnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment-template',
  `arn:${string}:proton:${string}:${string}:environment-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: TemplateEnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.name}` as const
  }
}
export type { TemplateEnvironmentArn }
export function templateEnvironmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateEnvironmentArnParameters<Partition>,
) {
  return new TemplateEnvironmentArn<Partition>(parameters)
}

export interface VersionTemplateEnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly versionMajor: string
  readonly versionMinor: string
}
class VersionTemplateEnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment-template-version',
  `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}.${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment-template-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly versionMajor: string
  readonly versionMinor: string
  constructor(parameters: VersionTemplateEnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
    this.versionMajor = parameters.versionMajor
    this.versionMinor = parameters.versionMinor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.nameTemplate}:${this.versionMajor}.${this.versionMinor}` as const
  }
}
export type { VersionTemplateEnvironmentArn }
export function versionTemplateEnvironmentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionTemplateEnvironmentArnParameters<Partition>) {
  return new VersionTemplateEnvironmentArn<Partition>(parameters)
}

export interface VersionMajorTemplateEnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
}
class VersionMajorTemplateEnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment-template-major-version',
  `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'environment-template-major-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
  constructor(
    parameters: VersionMajorTemplateEnvironmentArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
    this.idVersionMajor = parameters.idVersionMajor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.nameTemplate}:${this.idVersionMajor}` as const
  }
}
export type { VersionMajorTemplateEnvironmentArn }
export function versionMajorTemplateEnvironmentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionMajorTemplateEnvironmentArnParameters<Partition>) {
  return new VersionMajorTemplateEnvironmentArn<Partition>(parameters)
}

export interface VersionMinorTemplateEnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
  readonly idVersionMinor: string
}
class VersionMinorTemplateEnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment-template-minor-version',
  `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}.${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'environment-template-minor-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
  readonly idVersionMinor: string
  constructor(
    parameters: VersionMinorTemplateEnvironmentArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
    this.idVersionMajor = parameters.idVersionMajor
    this.idVersionMinor = parameters.idVersionMinor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.nameTemplate}:${this.idVersionMajor}.${this.idVersionMinor}` as const
  }
}
export type { VersionMinorTemplateEnvironmentArn }
export function versionMinorTemplateEnvironmentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionMinorTemplateEnvironmentArnParameters<Partition>) {
  return new VersionMinorTemplateEnvironmentArn<Partition>(parameters)
}

export interface TemplateServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class TemplateServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'service-template',
  `arn:${string}:proton:${string}:${string}:service-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: TemplateServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.name}` as const
  }
}
export type { TemplateServiceArn }
export function templateServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateServiceArnParameters<Partition>,
) {
  return new TemplateServiceArn<Partition>(parameters)
}

export interface VersionTemplateServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly versionMajor: string
  readonly versionMinor: string
}
class VersionTemplateServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'service-template-version',
  `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}.${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service-template-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly versionMajor: string
  readonly versionMinor: string
  constructor(parameters: VersionTemplateServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
    this.versionMajor = parameters.versionMajor
    this.versionMinor = parameters.versionMinor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.nameTemplate}:${this.versionMajor}.${this.versionMinor}` as const
  }
}
export type { VersionTemplateServiceArn }
export function versionTemplateServiceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionTemplateServiceArnParameters<Partition>) {
  return new VersionTemplateServiceArn<Partition>(parameters)
}

export interface VersionMajorTemplateServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
}
class VersionMajorTemplateServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'service-template-major-version',
  `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service-template-major-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
  constructor(parameters: VersionMajorTemplateServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
    this.idVersionMajor = parameters.idVersionMajor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.nameTemplate}:${this.idVersionMajor}` as const
  }
}
export type { VersionMajorTemplateServiceArn }
export function versionMajorTemplateServiceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionMajorTemplateServiceArnParameters<Partition>) {
  return new VersionMajorTemplateServiceArn<Partition>(parameters)
}

export interface VersionMinorTemplateServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
  readonly idVersionMinor: string
}
class VersionMinorTemplateServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'service-template-minor-version',
  `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}.${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service-template-minor-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly idVersionMajor: string
  readonly idVersionMinor: string
  constructor(parameters: VersionMinorTemplateServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
    this.idVersionMajor = parameters.idVersionMajor
    this.idVersionMinor = parameters.idVersionMinor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.nameTemplate}:${this.idVersionMajor}.${this.idVersionMinor}` as const
  }
}
export type { VersionMinorTemplateServiceArn }
export function versionMinorTemplateServiceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionMinorTemplateServiceArnParameters<Partition>) {
  return new VersionMinorTemplateServiceArn<Partition>(parameters)
}

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:proton:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment/${this.name}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:proton:${string}:${string}:service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service/${this.name}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface InstanceServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly name: string
}
class InstanceServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'service-instance',
  `arn:${string}:proton:${string}:${string}:service/${string}/service-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly name: string
  constructor(parameters: InstanceServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameService = parameters.nameService
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service/${this.nameService}/service-instance/${this.name}` as const
  }
}
export type { InstanceServiceArn }
export function instanceServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceServiceArnParameters<Partition>,
) {
  return new InstanceServiceArn<Partition>(parameters)
}

export interface ConnectionAccountEnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class ConnectionAccountEnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment-account-connection',
  `arn:${string}:proton:${string}:${string}:environment-account-connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment-account-connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(
    parameters: ConnectionAccountEnvironmentArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-account-connection/${this.id}` as const
  }
}
export type { ConnectionAccountEnvironmentArn }
export function connectionAccountEnvironmentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConnectionAccountEnvironmentArnParameters<Partition>) {
  return new ConnectionAccountEnvironmentArn<Partition>(parameters)
}

export interface RepositoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly provider: string
  readonly name: string
}
class RepositoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'repository',
  `arn:${string}:proton:${string}:${string}:repository/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'repository' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly provider: string
  readonly name: string
  constructor(parameters: RepositoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.provider = parameters.provider
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:repository/${this.provider}:${this.name}` as const
  }
}
export type { RepositoryArn }
export function repositoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RepositoryArnParameters<Partition>,
) {
  return new RepositoryArn<Partition>(parameters)
}

export interface ComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'component',
  `arn:${string}:proton:${string}:${string}:component/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:component/${this.id}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentArnParameters<Partition>,
) {
  return new ComponentArn<Partition>(parameters)
}

export interface DeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:proton:${string}:${string}:deployment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:deployment/${this.id}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}
