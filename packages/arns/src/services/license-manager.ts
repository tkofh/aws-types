import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigurationLicenseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationLicense: string
}
class ConfigurationLicenseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'license-configuration',
  `arn:${string}:license-manager:${string}:${string}:license-configuration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'license-configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationLicense: string
  constructor(parameters: ConfigurationLicenseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationLicense = parameters.idConfigurationLicense
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager:${this.region}:${this.account}:license-configuration:${this.idConfigurationLicense}` as const
  }
}
export type { ConfigurationLicenseArn }
export function configurationLicenseArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationLicenseArnParameters<Partition>,
) {
  return new ConfigurationLicenseArn<Partition>(parameters)
}

export interface LicenseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idLicense: string
}
class LicenseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'license',
  `arn:${string}:license-manager::${string}:license:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'license' as const
  readonly partition: string
  readonly account: string
  readonly idLicense: string
  constructor(parameters: LicenseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idLicense = parameters.idLicense
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager::${this.account}:license:${this.idLicense}` as const
  }
}
export type { LicenseArn }
export function licenseArn<Partition extends ArnPartition = 'aws'>(
  parameters: LicenseArnParameters<Partition>,
) {
  return new LicenseArn<Partition>(parameters)
}

export interface GrantArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idGrant: string
}
class GrantArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'grant',
  `arn:${string}:license-manager::${string}:grant:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'grant' as const
  readonly partition: string
  readonly account: string
  readonly idGrant: string
  constructor(parameters: GrantArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idGrant = parameters.idGrant
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager::${this.account}:grant:${this.idGrant}` as const
  }
}
export type { GrantArn }
export function grantArn<Partition extends ArnPartition = 'aws'>(
  parameters: GrantArnParameters<Partition>,
) {
  return new GrantArn<Partition>(parameters)
}

export interface GeneratorReportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGeneratorReport: string
}
class GeneratorReportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'report-generator',
  `arn:${string}:license-manager:${string}:${string}:report-generator:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'report-generator' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGeneratorReport: string
  constructor(parameters: GeneratorReportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGeneratorReport = parameters.idGeneratorReport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager:${this.region}:${this.account}:report-generator:${this.idGeneratorReport}` as const
  }
}
export type { GeneratorReportArn }
export function generatorReportArn<Partition extends ArnPartition = 'aws'>(
  parameters: GeneratorReportArnParameters<Partition>,
) {
  return new GeneratorReportArn<Partition>(parameters)
}
