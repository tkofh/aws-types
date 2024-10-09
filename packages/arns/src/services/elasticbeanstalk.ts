export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
}
export type ApplicationArn = `arn:${string}:elasticbeanstalk:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:elasticbeanstalk:${parameters.region}:${parameters.account}:application/${parameters.applicationName}`
}

export interface ApplicationversionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
  versionLabel: string
}
export type ApplicationversionArn = `arn:${string}:elasticbeanstalk:${string}:${string}:applicationversion/${string}/${string}`
export function applicationversionArn(parameters: ApplicationversionArnParameters): ApplicationversionArn {
  return `arn:${parameters.partition ?? ''}:elasticbeanstalk:${parameters.region}:${parameters.account}:applicationversion/${parameters.applicationName}/${parameters.versionLabel}`
}

export interface ConfigurationtemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
  templateName: string
}
export type ConfigurationtemplateArn = `arn:${string}:elasticbeanstalk:${string}:${string}:configurationtemplate/${string}/${string}`
export function configurationtemplateArn(parameters: ConfigurationtemplateArnParameters): ConfigurationtemplateArn {
  return `arn:${parameters.partition ?? ''}:elasticbeanstalk:${parameters.region}:${parameters.account}:configurationtemplate/${parameters.applicationName}/${parameters.templateName}`
}

export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
  environmentName: string
}
export type EnvironmentArn = `arn:${string}:elasticbeanstalk:${string}:${string}:environment/${string}/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:elasticbeanstalk:${parameters.region}:${parameters.account}:environment/${parameters.applicationName}/${parameters.environmentName}`
}

export interface SolutionstackArnParameters {
  partition?: string | undefined
  region: string
  solutionStackName: string
}
export type SolutionstackArn = `arn:${string}:elasticbeanstalk:${string}::solutionstack/${string}`
export function solutionstackArn(parameters: SolutionstackArnParameters): SolutionstackArn {
  return `arn:${parameters.partition ?? ''}:elasticbeanstalk:${parameters.region}::solutionstack/${parameters.solutionStackName}`
}

export interface PlatformArnParameters {
  partition?: string | undefined
  region: string
  platformNameWithVersion: string
}
export type PlatformArn = `arn:${string}:elasticbeanstalk:${string}::platform/${string}`
export function platformArn(parameters: PlatformArnParameters): PlatformArn {
  return `arn:${parameters.partition ?? ''}:elasticbeanstalk:${parameters.region}::platform/${parameters.platformNameWithVersion}`
}