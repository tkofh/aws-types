export interface EnvironmentTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type EnvironmentTemplateArn = `arn:${string}:proton:${string}:${string}:environment-template/${string}`
export function environmentTemplateArn(parameters: EnvironmentTemplateArnParameters): EnvironmentTemplateArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:environment-template/${parameters.name}`
}

export interface EnvironmentTemplateVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
  majorVersion: string
  minorVersion: string
}
export type EnvironmentTemplateVersionArn = `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}.${string}`
export function environmentTemplateVersionArn(parameters: EnvironmentTemplateVersionArnParameters): EnvironmentTemplateVersionArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:environment-template/${parameters.templateName}:${parameters.majorVersion}.${parameters.minorVersion}`
}

export interface EnvironmentTemplateMajorVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
  majorVersionId: string
}
export type EnvironmentTemplateMajorVersionArn = `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}`
export function environmentTemplateMajorVersionArn(parameters: EnvironmentTemplateMajorVersionArnParameters): EnvironmentTemplateMajorVersionArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:environment-template/${parameters.templateName}:${parameters.majorVersionId}`
}

export interface EnvironmentTemplateMinorVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
  majorVersionId: string
  minorVersionId: string
}
export type EnvironmentTemplateMinorVersionArn = `arn:${string}:proton:${string}:${string}:environment-template/${string}:${string}.${string}`
export function environmentTemplateMinorVersionArn(parameters: EnvironmentTemplateMinorVersionArnParameters): EnvironmentTemplateMinorVersionArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:environment-template/${parameters.templateName}:${parameters.majorVersionId}.${parameters.minorVersionId}`
}

export interface ServiceTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type ServiceTemplateArn = `arn:${string}:proton:${string}:${string}:service-template/${string}`
export function serviceTemplateArn(parameters: ServiceTemplateArnParameters): ServiceTemplateArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:service-template/${parameters.name}`
}

export interface ServiceTemplateVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
  majorVersion: string
  minorVersion: string
}
export type ServiceTemplateVersionArn = `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}.${string}`
export function serviceTemplateVersionArn(parameters: ServiceTemplateVersionArnParameters): ServiceTemplateVersionArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:service-template/${parameters.templateName}:${parameters.majorVersion}.${parameters.minorVersion}`
}

export interface ServiceTemplateMajorVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
  majorVersionId: string
}
export type ServiceTemplateMajorVersionArn = `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}`
export function serviceTemplateMajorVersionArn(parameters: ServiceTemplateMajorVersionArnParameters): ServiceTemplateMajorVersionArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:service-template/${parameters.templateName}:${parameters.majorVersionId}`
}

export interface ServiceTemplateMinorVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
  majorVersionId: string
  minorVersionId: string
}
export type ServiceTemplateMinorVersionArn = `arn:${string}:proton:${string}:${string}:service-template/${string}:${string}.${string}`
export function serviceTemplateMinorVersionArn(parameters: ServiceTemplateMinorVersionArnParameters): ServiceTemplateMinorVersionArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:service-template/${parameters.templateName}:${parameters.majorVersionId}.${parameters.minorVersionId}`
}

export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type EnvironmentArn = `arn:${string}:proton:${string}:${string}:environment/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:environment/${parameters.name}`
}

export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type ServiceArn = `arn:${string}:proton:${string}:${string}:service/${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:service/${parameters.name}`
}

export interface ServiceInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceName: string
  name: string
}
export type ServiceInstanceArn = `arn:${string}:proton:${string}:${string}:service/${string}/service-instance/${string}`
export function serviceInstanceArn(parameters: ServiceInstanceArnParameters): ServiceInstanceArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:service/${parameters.serviceName}/service-instance/${parameters.name}`
}

export interface EnvironmentAccountConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type EnvironmentAccountConnectionArn = `arn:${string}:proton:${string}:${string}:environment-account-connection/${string}`
export function environmentAccountConnectionArn(parameters: EnvironmentAccountConnectionArnParameters): EnvironmentAccountConnectionArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:environment-account-connection/${parameters.id}`
}

export interface RepositoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  provider: string
  name: string
}
export type RepositoryArn = `arn:${string}:proton:${string}:${string}:repository/${string}:${string}`
export function repositoryArn(parameters: RepositoryArnParameters): RepositoryArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:repository/${parameters.provider}:${parameters.name}`
}

export interface ComponentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ComponentArn = `arn:${string}:proton:${string}:${string}:component/${string}`
export function componentArn(parameters: ComponentArnParameters): ComponentArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:component/${parameters.id}`
}

export interface DeploymentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type DeploymentArn = `arn:${string}:proton:${string}:${string}:deployment/${string}`
export function deploymentArn(parameters: DeploymentArnParameters): DeploymentArn {
  return `arn:${parameters.partition ?? ''}:proton:${parameters.region}:${parameters.account}:deployment/${parameters.id}`
}