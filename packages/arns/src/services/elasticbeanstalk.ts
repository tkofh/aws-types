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
  readonly nameApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:elasticbeanstalk:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:application/${this.nameApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface VersionApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly labelVersion: string
}
class VersionApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'applicationversion',
  `arn:${string}:elasticbeanstalk:${string}:${string}:applicationversion/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'applicationversion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly labelVersion: string
  constructor(parameters: VersionApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
    this.labelVersion = parameters.labelVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:applicationversion/${this.nameApplication}/${this.labelVersion}` as const
  }
}
export type { VersionApplicationArn }
export function versionApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionApplicationArnParameters<Partition>,
) {
  return new VersionApplicationArn<Partition>(parameters)
}

export interface TemplateConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly nameTemplate: string
}
class TemplateConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configurationtemplate',
  `arn:${string}:elasticbeanstalk:${string}:${string}:configurationtemplate/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configurationtemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly nameTemplate: string
  constructor(parameters: TemplateConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
    this.nameTemplate = parameters.nameTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:configurationtemplate/${this.nameApplication}/${this.nameTemplate}` as const
  }
}
export type { TemplateConfigurationArn }
export function templateConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateConfigurationArnParameters<Partition>) {
  return new TemplateConfigurationArn<Partition>(parameters)
}

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly nameEnvironment: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:elasticbeanstalk:${string}:${string}:environment/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly nameEnvironment: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
    this.nameEnvironment = parameters.nameEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}:${this.account}:environment/${this.nameApplication}/${this.nameEnvironment}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface StackSolutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly nameStackSolution: string
}
class StackSolutionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'solutionstack',
  `arn:${string}:elasticbeanstalk:${string}::solutionstack/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'solutionstack' as const
  readonly partition: string
  readonly region: string
  readonly nameStackSolution: string
  constructor(parameters: StackSolutionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameStackSolution = parameters.nameStackSolution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}::solutionstack/${this.nameStackSolution}` as const
  }
}
export type { StackSolutionArn }
export function stackSolutionArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackSolutionArnParameters<Partition>,
) {
  return new StackSolutionArn<Partition>(parameters)
}

export interface PlatformArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly versionWithNamePlatform: string
}
class PlatformArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'platform',
  `arn:${string}:elasticbeanstalk:${string}::platform/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'platform' as const
  readonly partition: string
  readonly region: string
  readonly versionWithNamePlatform: string
  constructor(parameters: PlatformArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.versionWithNamePlatform = parameters.versionWithNamePlatform
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticbeanstalk:${this.region}::platform/${this.versionWithNamePlatform}` as const
  }
}
export type { PlatformArn }
export function platformArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlatformArnParameters<Partition>,
) {
  return new PlatformArn<Partition>(parameters)
}
