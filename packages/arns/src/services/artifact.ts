export interface ReportPackageArnParameters {
  partition?: string | undefined
}
export type ReportPackageArn = `arn:${string}:artifact:::report-package/*`
export function reportPackageArn(parameters: ReportPackageArnParameters): ReportPackageArn {
  return `arn:${parameters.partition ?? ''}:artifact:::report-package/*`
}

export interface CustomerAgreementArnParameters {
  partition?: string | undefined
  account: string
}
export type CustomerAgreementArn = `arn:${string}:artifact::${string}:customer-agreement/*`
export function customerAgreementArn(parameters: CustomerAgreementArnParameters): CustomerAgreementArn {
  return `arn:${parameters.partition ?? ''}:artifact::${parameters.account}:customer-agreement/*`
}

export interface AgreementArnParameters {
  partition?: string | undefined
}
export type AgreementArn = `arn:${string}:artifact:::agreement/*`
export function agreementArn(parameters: AgreementArnParameters): AgreementArn {
  return `arn:${parameters.partition ?? ''}:artifact:::agreement/*`
}

export interface ReportArnParameters {
  partition?: string | undefined
  region: string
  reportId: string
  version: string
}
export type ReportArn = `arn:${string}:artifact:${string}::report/${string}:${string}`
export function reportArn(parameters: ReportArnParameters): ReportArn {
  return `arn:${parameters.partition ?? ''}:artifact:${parameters.region}::report/${parameters.reportId}:${parameters.version}`
}