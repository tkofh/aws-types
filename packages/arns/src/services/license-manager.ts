export interface LicenseConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  licenseConfigurationId: string
}
export type LicenseConfigurationArn = `arn:${string}:license-manager:${string}:${string}:license-configuration:${string}`
export function licenseConfigurationArn(parameters: LicenseConfigurationArnParameters): LicenseConfigurationArn {
  return `arn:${parameters.partition ?? ''}:license-manager:${parameters.region}:${parameters.account}:license-configuration:${parameters.licenseConfigurationId}`
}

export interface LicenseArnParameters {
  partition?: string | undefined
  account: string
  licenseId: string
}
export type LicenseArn = `arn:${string}:license-manager::${string}:license:${string}`
export function licenseArn(parameters: LicenseArnParameters): LicenseArn {
  return `arn:${parameters.partition ?? ''}:license-manager::${parameters.account}:license:${parameters.licenseId}`
}

export interface GrantArnParameters {
  partition?: string | undefined
  account: string
  grantId: string
}
export type GrantArn = `arn:${string}:license-manager::${string}:grant:${string}`
export function grantArn(parameters: GrantArnParameters): GrantArn {
  return `arn:${parameters.partition ?? ''}:license-manager::${parameters.account}:grant:${parameters.grantId}`
}

export interface ReportGeneratorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reportGeneratorId: string
}
export type ReportGeneratorArn = `arn:${string}:license-manager:${string}:${string}:report-generator:${string}`
export function reportGeneratorArn(parameters: ReportGeneratorArnParameters): ReportGeneratorArn {
  return `arn:${parameters.partition ?? ''}:license-manager:${parameters.region}:${parameters.account}:report-generator:${parameters.reportGeneratorId}`
}