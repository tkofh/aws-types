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
  readonly applicationName: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:elasticbeanstalk:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:application/${this.applicationName}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface ApplicationversionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly versionLabel: string
}
class ApplicationversionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'applicationversion',
  `arn:${string}:elasticbeanstalk:${string}:${string}:applicationversion/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'applicationversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly versionLabel: string
  constructor(parameters: ApplicationversionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
    this.versionLabel = parameters.versionLabel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:applicationversion/${this.applicationName}/${this.versionLabel}` as const
  }
}
export type { ApplicationversionArn }
export function applicationversionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationversionArnParameters<Partition>,
) {
  return new ApplicationversionArn<Partition>(parameters)
}

export interface ConfigurationtemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly templateName: string
}
class ConfigurationtemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configurationtemplate',
  `arn:${string}:elasticbeanstalk:${string}:${string}:configurationtemplate/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configurationtemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly templateName: string
  constructor(parameters: ConfigurationtemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
    this.templateName = parameters.templateName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:configurationtemplate/${this.applicationName}/${this.templateName}` as const
  }
}
export type { ConfigurationtemplateArn }
export function configurationtemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationtemplateArnParameters<Partition>) {
  return new ConfigurationtemplateArn<Partition>(parameters)
}

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly environmentName: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:elasticbeanstalk:${string}:${string}:environment/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly environmentName: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
    this.environmentName = parameters.environmentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:environment/${this.applicationName}/${this.environmentName}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface SolutionstackArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly solutionStackName: string
}
class SolutionstackArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'solutionstack',
  `arn:${string}:elasticbeanstalk:${string}::solutionstack/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'solutionstack' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly solutionStackName: string
  constructor(parameters: SolutionstackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.solutionStackName = parameters.solutionStackName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}::solutionstack/${this.solutionStackName}` as const
  }
}
export type { SolutionstackArn }
export function solutionstackArn<Partition extends ArnPartition = 'aws'>(
  parameters: SolutionstackArnParameters<Partition>,
) {
  return new SolutionstackArn<Partition>(parameters)
}

export interface PlatformArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly platformNameWithVersion: string
}
class PlatformArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'platform',
  `arn:${string}:elasticbeanstalk:${string}::platform/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'platform' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly platformNameWithVersion: string
  constructor(parameters: PlatformArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.platformNameWithVersion = parameters.platformNameWithVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}::platform/${this.platformNameWithVersion}` as const
  }
}
export type { PlatformArn }
export function platformArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlatformArnParameters<Partition>,
) {
  return new PlatformArn<Partition>(parameters)
}
