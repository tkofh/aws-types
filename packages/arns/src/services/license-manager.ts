import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface LicenseConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseConfigurationId: string
}
class LicenseConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'license-configuration', `arn:${string}:license-manager:${string}:${string}:license-configuration:${string}`> {
  readonly [ArnResourceTypeBrand] = 'license-configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseConfigurationId: string
  constructor(parameters: LicenseConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.licenseConfigurationId = parameters.licenseConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager:${this.region}:${this.account}:license-configuration:${this.licenseConfigurationId}` as const
  }
}
export type { LicenseConfigurationArn }
export function licenseConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: LicenseConfigurationArnParameters<Partition>) {
  return new LicenseConfigurationArn<Partition>(parameters)
}

export interface LicenseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly licenseId: string
}
class LicenseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'license', `arn:${string}:license-manager::${string}:license:${string}`> {
  readonly [ArnResourceTypeBrand] = 'license' as const
  readonly partition: Partition
  readonly account: string
  readonly licenseId: string
  constructor(parameters: LicenseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.licenseId = parameters.licenseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager::${this.account}:license:${this.licenseId}` as const
  }
}
export type { LicenseArn }
export function licenseArn<Partition extends ArnPartition = 'aws'>(parameters: LicenseArnParameters<Partition>) {
  return new LicenseArn<Partition>(parameters)
}

export interface GrantArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly grantId: string
}
class GrantArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'grant', `arn:${string}:license-manager::${string}:grant:${string}`> {
  readonly [ArnResourceTypeBrand] = 'grant' as const
  readonly partition: Partition
  readonly account: string
  readonly grantId: string
  constructor(parameters: GrantArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.grantId = parameters.grantId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager::${this.account}:grant:${this.grantId}` as const
  }
}
export type { GrantArn }
export function grantArn<Partition extends ArnPartition = 'aws'>(parameters: GrantArnParameters<Partition>) {
  return new GrantArn<Partition>(parameters)
}

export interface ReportGeneratorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportGeneratorId: string
}
class ReportGeneratorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'report-generator', `arn:${string}:license-manager:${string}:${string}:report-generator:${string}`> {
  readonly [ArnResourceTypeBrand] = 'report-generator' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportGeneratorId: string
  constructor(parameters: ReportGeneratorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reportGeneratorId = parameters.reportGeneratorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager:${this.region}:${this.account}:report-generator:${this.reportGeneratorId}` as const
  }
}
export type { ReportGeneratorArn }
export function reportGeneratorArn<Partition extends ArnPartition = 'aws'>(parameters: ReportGeneratorArnParameters<Partition>) {
  return new ReportGeneratorArn<Partition>(parameters)
}