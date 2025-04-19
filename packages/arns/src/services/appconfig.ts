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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:appconfig:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.applicationId}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly environmentId: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly environmentId: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.environmentId = parameters.environmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.applicationId}/environment/${this.environmentId}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface ConfigurationprofileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly configurationProfileId: string
}
class ConfigurationprofileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configurationprofile',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/configurationprofile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configurationprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly configurationProfileId: string
  constructor(parameters: ConfigurationprofileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.configurationProfileId = parameters.configurationProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.applicationId}/configurationprofile/${this.configurationProfileId}` as const
  }
}
export type { ConfigurationprofileArn }
export function configurationprofileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationprofileArnParameters<Partition>,
) {
  return new ConfigurationprofileArn<Partition>(parameters)
}

export interface DeploymentstrategyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentStrategyId: string
}
class DeploymentstrategyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentstrategy',
  `arn:${string}:appconfig:${string}:${string}:deploymentstrategy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentstrategy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentStrategyId: string
  constructor(parameters: DeploymentstrategyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deploymentStrategyId = parameters.deploymentStrategyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:deploymentstrategy/${this.deploymentStrategyId}` as const
  }
}
export type { DeploymentstrategyArn }
export function deploymentstrategyArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentstrategyArnParameters<Partition>,
) {
  return new DeploymentstrategyArn<Partition>(parameters)
}

export interface DeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly environmentId: string
  readonly deploymentNumber: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}/deployment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly environmentId: string
  readonly deploymentNumber: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.environmentId = parameters.environmentId
    this.deploymentNumber = parameters.deploymentNumber
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.applicationId}/environment/${this.environmentId}/deployment/${this.deploymentNumber}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}

export interface HostedconfigurationversionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly configurationProfileId: string
  readonly versionNumber: string
}
class HostedconfigurationversionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hostedconfigurationversion',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/configurationprofile/${string}/hostedconfigurationversion/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hostedconfigurationversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly configurationProfileId: string
  readonly versionNumber: string
  constructor(parameters: HostedconfigurationversionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.configurationProfileId = parameters.configurationProfileId
    this.versionNumber = parameters.versionNumber
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.applicationId}/configurationprofile/${this.configurationProfileId}/hostedconfigurationversion/${this.versionNumber}` as const
  }
}
export type { HostedconfigurationversionArn }
export function hostedconfigurationversionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: HostedconfigurationversionArnParameters<Partition>) {
  return new HostedconfigurationversionArn<Partition>(parameters)
}

export interface ConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly environmentId: string
  readonly configurationProfileId: string
}
class ConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration',
  `arn:${string}:appconfig:${string}:${string}:application/${string}/environment/${string}/configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly environmentId: string
  readonly configurationProfileId: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.environmentId = parameters.environmentId
    this.configurationProfileId = parameters.configurationProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:application/${this.applicationId}/environment/${this.environmentId}/configuration/${this.configurationProfileId}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly extensionId: string
  readonly extensionVersionNumber: string
}
class ExtensionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'extension',
  `arn:${string}:appconfig:${string}:${string}:extension/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'extension' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly extensionId: string
  readonly extensionVersionNumber: string
  constructor(parameters: ExtensionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.extensionId = parameters.extensionId
    this.extensionVersionNumber = parameters.extensionVersionNumber
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:extension/${this.extensionId}/${this.extensionVersionNumber}` as const
  }
}
export type { ExtensionArn }
export function extensionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExtensionArnParameters<Partition>,
) {
  return new ExtensionArn<Partition>(parameters)
}

export interface ExtensionassociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly extensionAssociationId: string
}
class ExtensionassociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'extensionassociation',
  `arn:${string}:appconfig:${string}:${string}:extensionassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'extensionassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly extensionAssociationId: string
  constructor(parameters: ExtensionassociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.extensionAssociationId = parameters.extensionAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appconfig:${this.region}:${this.account}:extensionassociation/${this.extensionAssociationId}` as const
  }
}
export type { ExtensionassociationArn }
export function extensionassociationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExtensionassociationArnParameters<Partition>,
) {
  return new ExtensionassociationArn<Partition>(parameters)
}
