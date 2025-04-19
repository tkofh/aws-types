import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EnvironmentTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class EnvironmentTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment-template', `arn:${string}:proton:${string}:${string}:environment-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: EnvironmentTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.name}` as const
  }
}
export type { EnvironmentTemplateArn }
export function environmentTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentTemplateArnParameters<Partition>) {
  return new EnvironmentTemplateArn<Partition>(parameters)
}

export interface EnvironmentTemplateVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersion: string
  readonly minorVersion: string
}
class EnvironmentTemplateVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment-template-version', `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}.${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment-template-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersion: string
  readonly minorVersion: string
  constructor(parameters: EnvironmentTemplateVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
    this.majorVersion = parameters.majorVersion
    this.minorVersion = parameters.minorVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.templateName}:${this.majorVersion}.${this.minorVersion}` as const
  }
}
export type { EnvironmentTemplateVersionArn }
export function environmentTemplateVersionArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentTemplateVersionArnParameters<Partition>) {
  return new EnvironmentTemplateVersionArn<Partition>(parameters)
}

export interface EnvironmentTemplateMajorVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
}
class EnvironmentTemplateMajorVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment-template-major-version', `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment-template-major-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
  constructor(parameters: EnvironmentTemplateMajorVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
    this.majorVersionId = parameters.majorVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.templateName}:${this.majorVersionId}` as const
  }
}
export type { EnvironmentTemplateMajorVersionArn }
export function environmentTemplateMajorVersionArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentTemplateMajorVersionArnParameters<Partition>) {
  return new EnvironmentTemplateMajorVersionArn<Partition>(parameters)
}

export interface EnvironmentTemplateMinorVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
  readonly minorVersionId: string
}
class EnvironmentTemplateMinorVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment-template-minor-version', `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}.${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment-template-minor-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
  readonly minorVersionId: string
  constructor(parameters: EnvironmentTemplateMinorVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
    this.majorVersionId = parameters.majorVersionId
    this.minorVersionId = parameters.minorVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-template/${this.templateName}:${this.majorVersionId}.${this.minorVersionId}` as const
  }
}
export type { EnvironmentTemplateMinorVersionArn }
export function environmentTemplateMinorVersionArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentTemplateMinorVersionArnParameters<Partition>) {
  return new EnvironmentTemplateMinorVersionArn<Partition>(parameters)
}

export interface ServiceTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class ServiceTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service-template', `arn:${string}:proton:${string}:${string}:service-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'service-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: ServiceTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.name}` as const
  }
}
export type { ServiceTemplateArn }
export function serviceTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceTemplateArnParameters<Partition>) {
  return new ServiceTemplateArn<Partition>(parameters)
}

export interface ServiceTemplateVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersion: string
  readonly minorVersion: string
}
class ServiceTemplateVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service-template-version', `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}.${string}`> {
  readonly [ArnResourceTypeBrand] = 'service-template-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersion: string
  readonly minorVersion: string
  constructor(parameters: ServiceTemplateVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
    this.majorVersion = parameters.majorVersion
    this.minorVersion = parameters.minorVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.templateName}:${this.majorVersion}.${this.minorVersion}` as const
  }
}
export type { ServiceTemplateVersionArn }
export function serviceTemplateVersionArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceTemplateVersionArnParameters<Partition>) {
  return new ServiceTemplateVersionArn<Partition>(parameters)
}

export interface ServiceTemplateMajorVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
}
class ServiceTemplateMajorVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service-template-major-version', `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'service-template-major-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
  constructor(parameters: ServiceTemplateMajorVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
    this.majorVersionId = parameters.majorVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.templateName}:${this.majorVersionId}` as const
  }
}
export type { ServiceTemplateMajorVersionArn }
export function serviceTemplateMajorVersionArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceTemplateMajorVersionArnParameters<Partition>) {
  return new ServiceTemplateMajorVersionArn<Partition>(parameters)
}

export interface ServiceTemplateMinorVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
  readonly minorVersionId: string
}
class ServiceTemplateMinorVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service-template-minor-version', `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}.${string}`> {
  readonly [ArnResourceTypeBrand] = 'service-template-minor-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly majorVersionId: string
  readonly minorVersionId: string
  constructor(parameters: ServiceTemplateMinorVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
    this.majorVersionId = parameters.majorVersionId
    this.minorVersionId = parameters.minorVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service-template/${this.templateName}:${this.majorVersionId}.${this.minorVersionId}` as const
  }
}
export type { ServiceTemplateMinorVersionArn }
export function serviceTemplateMinorVersionArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceTemplateMinorVersionArnParameters<Partition>) {
  return new ServiceTemplateMinorVersionArn<Partition>(parameters)
}

export interface EnvironmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class EnvironmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment', `arn:${string}:proton:${string}:${string}:environment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment/${this.name}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentArnParameters<Partition>) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service', `arn:${string}:proton:${string}:${string}:service/${string}`> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service/${this.name}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceArnParameters<Partition>) {
  return new ServiceArn<Partition>(parameters)
}

export interface ServiceInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly name: string
}
class ServiceInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service-instance', `arn:${string}:proton:${string}:${string}:service/${string}/service-instance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'service-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly name: string
  constructor(parameters: ServiceInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceName = parameters.serviceName
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:service/${this.serviceName}/service-instance/${this.name}` as const
  }
}
export type { ServiceInstanceArn }
export function serviceInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceInstanceArnParameters<Partition>) {
  return new ServiceInstanceArn<Partition>(parameters)
}

export interface EnvironmentAccountConnectionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class EnvironmentAccountConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment-account-connection', `arn:${string}:proton:${string}:${string}:environment-account-connection/${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment-account-connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: EnvironmentAccountConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:environment-account-connection/${this.id}` as const
  }
}
export type { EnvironmentAccountConnectionArn }
export function environmentAccountConnectionArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentAccountConnectionArnParameters<Partition>) {
  return new EnvironmentAccountConnectionArn<Partition>(parameters)
}

export interface RepositoryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly provider: string
  readonly name: string
}
class RepositoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'repository', `arn:${string}:proton:${string}:${string}:repository/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'repository' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly provider: string
  readonly name: string
  constructor(parameters: RepositoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
export function repositoryArn<Partition extends ArnPartition = 'aws'>(parameters: RepositoryArnParameters<Partition>) {
  return new RepositoryArn<Partition>(parameters)
}

export interface ComponentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'component', `arn:${string}:proton:${string}:${string}:component/${string}`> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:component/${this.id}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(parameters: ComponentArnParameters<Partition>) {
  return new ComponentArn<Partition>(parameters)
}

export interface DeploymentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'deployment', `arn:${string}:proton:${string}:${string}:deployment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:proton:${this.region}:${this.account}:deployment/${this.id}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(parameters: DeploymentArnParameters<Partition>) {
  return new DeploymentArn<Partition>(parameters)
}