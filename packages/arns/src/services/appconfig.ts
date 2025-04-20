import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:appconfig:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idEnvironment: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idEnvironment: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idEnvironment = parameters.idEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.idApplication}/environment/${this.idEnvironment}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface ProfileConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idProfileConfiguration: string
}
class ProfileConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configurationprofile',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/configurationprofile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configurationprofile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idProfileConfiguration: string
  constructor(parameters: ProfileConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idProfileConfiguration = parameters.idProfileConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.idApplication}/configurationprofile/${this.idProfileConfiguration}` as const
  }
}
export type { ProfileConfigurationArn }
export function profileConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileConfigurationArnParameters<Partition>,
) {
  return new ProfileConfigurationArn<Partition>(parameters)
}

export interface StrategyDeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStrategyDeployment: string
}
class StrategyDeploymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentstrategy',
  `arn:${string}:appconfig:${string}:${string}:deploymentstrategy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentstrategy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStrategyDeployment: string
  constructor(parameters: StrategyDeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStrategyDeployment = parameters.idStrategyDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:deploymentstrategy/${this.idStrategyDeployment}` as const
  }
}
export type { StrategyDeploymentArn }
export function strategyDeploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: StrategyDeploymentArnParameters<Partition>,
) {
  return new StrategyDeploymentArn<Partition>(parameters)
}

export interface DeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idEnvironment: string
  readonly numberDeployment: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}/deployment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idEnvironment: string
  readonly numberDeployment: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idEnvironment = parameters.idEnvironment
    this.numberDeployment = parameters.numberDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.idApplication}/environment/${this.idEnvironment}/deployment/${this.numberDeployment}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}

export interface VersionConfigurationHostedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idProfileConfiguration: string
  readonly numberVersion: string
}
class VersionConfigurationHostedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hostedconfigurationversion',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/configurationprofile/${string}/hostedconfigurationversion/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hostedconfigurationversion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idProfileConfiguration: string
  readonly numberVersion: string
  constructor(parameters: VersionConfigurationHostedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idProfileConfiguration = parameters.idProfileConfiguration
    this.numberVersion = parameters.numberVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.idApplication}/configurationprofile/${this.idProfileConfiguration}/hostedconfigurationversion/${this.numberVersion}` as const
  }
}
export type { VersionConfigurationHostedArn }
export function versionConfigurationHostedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionConfigurationHostedArnParameters<Partition>) {
  return new VersionConfigurationHostedArn<Partition>(parameters)
}

export interface ConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idEnvironment: string
  readonly idProfileConfiguration: string
}
class ConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}/configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idEnvironment: string
  readonly idProfileConfiguration: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idEnvironment = parameters.idEnvironment
    this.idProfileConfiguration = parameters.idProfileConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.idApplication}/environment/${this.idEnvironment}/configuration/${this.idProfileConfiguration}` as const
  }
}
export type { ConfigurationArn }
export function configurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationArnParameters<Partition>,
) {
  return new ConfigurationArn<Partition>(parameters)
}

export interface ExtensionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExtension: string
  readonly numberVersionExtension: string
}
class ExtensionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'extension',
  `arn:${string}:appconfig:${string}:${string}:extension/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'extension' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExtension: string
  readonly numberVersionExtension: string
  constructor(parameters: ExtensionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idExtension = parameters.idExtension
    this.numberVersionExtension = parameters.numberVersionExtension
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:extension/${this.idExtension}/${this.numberVersionExtension}` as const
  }
}
export type { ExtensionArn }
export function extensionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExtensionArnParameters<Partition>,
) {
  return new ExtensionArn<Partition>(parameters)
}

export interface AssociationExtensionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationExtension: string
}
class AssociationExtensionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'extensionassociation',
  `arn:${string}:appconfig:${string}:${string}:extensionassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'extensionassociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationExtension: string
  constructor(parameters: AssociationExtensionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssociationExtension = parameters.idAssociationExtension
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:extensionassociation/${this.idAssociationExtension}` as const
  }
}
export type { AssociationExtensionArn }
export function associationExtensionArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationExtensionArnParameters<Partition>,
) {
  return new AssociationExtensionArn<Partition>(parameters)
}
