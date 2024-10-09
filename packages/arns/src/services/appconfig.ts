export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:appconfig:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:application/${parameters.applicationId}`
}

export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  environmentId: string
}
export type EnvironmentArn = `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/environment/${parameters.environmentId}`
}

export interface ConfigurationprofileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  configurationProfileId: string
}
export type ConfigurationprofileArn = `arn:${string}:appconfig:${string}:${string}:application/${string}/configurationprofile/${string}`
export function configurationprofileArn(parameters: ConfigurationprofileArnParameters): ConfigurationprofileArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/configurationprofile/${parameters.configurationProfileId}`
}

export interface DeploymentstrategyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deploymentStrategyId: string
}
export type DeploymentstrategyArn = `arn:${string}:appconfig:${string}:${string}:deploymentstrategy/${string}`
export function deploymentstrategyArn(parameters: DeploymentstrategyArnParameters): DeploymentstrategyArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:deploymentstrategy/${parameters.deploymentStrategyId}`
}

export interface DeploymentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  environmentId: string
  deploymentNumber: string
}
export type DeploymentArn = `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}/deployment/${string}`
export function deploymentArn(parameters: DeploymentArnParameters): DeploymentArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/environment/${parameters.environmentId}/deployment/${parameters.deploymentNumber}`
}

export interface HostedconfigurationversionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  configurationProfileId: string
  versionNumber: string
}
export type HostedconfigurationversionArn = `arn:${string}:appconfig:${string}:${string}:application/${string}/configurationprofile/${string}/hostedconfigurationversion/${string}`
export function hostedconfigurationversionArn(parameters: HostedconfigurationversionArnParameters): HostedconfigurationversionArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/configurationprofile/${parameters.configurationProfileId}/hostedconfigurationversion/${parameters.versionNumber}`
}

export interface ConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  environmentId: string
  configurationProfileId: string
}
export type ConfigurationArn = `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}/configuration/${string}`
export function configurationArn(parameters: ConfigurationArnParameters): ConfigurationArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/environment/${parameters.environmentId}/configuration/${parameters.configurationProfileId}`
}

export interface ExtensionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  extensionId: string
  extensionVersionNumber: string
}
export type ExtensionArn = `arn:${string}:appconfig:${string}:${string}:extension/${string}/${string}`
export function extensionArn(parameters: ExtensionArnParameters): ExtensionArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:extension/${parameters.extensionId}/${parameters.extensionVersionNumber}`
}

export interface ExtensionassociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  extensionAssociationId: string
}
export type ExtensionassociationArn = `arn:${string}:appconfig:${string}:${string}:extensionassociation/${string}`
export function extensionassociationArn(parameters: ExtensionassociationArnParameters): ExtensionassociationArn {
  return `arn:${parameters.partition ?? ''}:appconfig:${parameters.region}:${parameters.account}:extensionassociation/${parameters.extensionAssociationId}`
}