export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
}
export type ApplicationArn = `arn:${string}:codedeploy:${string}:${string}:application:${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:codedeploy:${parameters.region}:${parameters.account}:application:${parameters.applicationName}`
}

export interface DeploymentconfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deploymentConfigurationName: string
}
export type DeploymentconfigArn = `arn:${string}:codedeploy:${string}:${string}:deploymentconfig:${string}`
export function deploymentconfigArn(parameters: DeploymentconfigArnParameters): DeploymentconfigArn {
  return `arn:${parameters.partition ?? ''}:codedeploy:${parameters.region}:${parameters.account}:deploymentconfig:${parameters.deploymentConfigurationName}`
}

export interface DeploymentgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
  deploymentGroupName: string
}
export type DeploymentgroupArn = `arn:${string}:codedeploy:${string}:${string}:deploymentgroup:${string}/${string}`
export function deploymentgroupArn(parameters: DeploymentgroupArnParameters): DeploymentgroupArn {
  return `arn:${parameters.partition ?? ''}:codedeploy:${parameters.region}:${parameters.account}:deploymentgroup:${parameters.applicationName}/${parameters.deploymentGroupName}`
}

export interface InstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceName: string
}
export type InstanceArn = `arn:${string}:codedeploy:${string}:${string}:instance:${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:codedeploy:${parameters.region}:${parameters.account}:instance:${parameters.instanceName}`
}