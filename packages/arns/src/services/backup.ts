export interface BackupVaultArnParameters {
  partition?: string | undefined
  region: string
  account: string
  backupVaultName: string
}
export type BackupVaultArn = `arn:${string}:backup:${string}:${string}:backup-vault:${string}`
export function backupVaultArn(parameters: BackupVaultArnParameters): BackupVaultArn {
  return `arn:${parameters.partition ?? ''}:backup:${parameters.region}:${parameters.account}:backup-vault:${parameters.backupVaultName}`
}

export interface BackupPlanArnParameters {
  partition?: string | undefined
  region: string
  account: string
  backupPlanId: string
}
export type BackupPlanArn = `arn:${string}:backup:${string}:${string}:backup-plan:${string}`
export function backupPlanArn(parameters: BackupPlanArnParameters): BackupPlanArn {
  return `arn:${parameters.partition ?? ''}:backup:${parameters.region}:${parameters.account}:backup-plan:${parameters.backupPlanId}`
}

export interface RecoveryPointArnParameters {
  partition?: string | undefined
  vendor: string
  region: string
  resourceType: string
  recoveryPointId: string
}
export type RecoveryPointArn = `arn:${string}:${string}:${string}:*:${string}:${string}`
export function recoveryPointArn(parameters: RecoveryPointArnParameters): RecoveryPointArn {
  return `arn:${parameters.partition ?? ''}:${parameters.vendor}:${parameters.region}:*:${parameters.resourceType}:${parameters.recoveryPointId}`
}

export interface FrameworkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  frameworkName: string
  frameworkId: string
}
export type FrameworkArn = `arn:${string}:backup:${string}:${string}:framework:${string}-${string}`
export function frameworkArn(parameters: FrameworkArnParameters): FrameworkArn {
  return `arn:${parameters.partition ?? ''}:backup:${parameters.region}:${parameters.account}:framework:${parameters.frameworkName}-${parameters.frameworkId}`
}

export interface ReportPlanArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reportPlanName: string
  reportPlanId: string
}
export type ReportPlanArn = `arn:${string}:backup:${string}:${string}:report-plan:${string}-${string}`
export function reportPlanArn(parameters: ReportPlanArnParameters): ReportPlanArn {
  return `arn:${parameters.partition ?? ''}:backup:${parameters.region}:${parameters.account}:report-plan:${parameters.reportPlanName}-${parameters.reportPlanId}`
}

export interface LegalHoldArnParameters {
  partition?: string | undefined
  region: string
  account: string
  legalHoldId: string
}
export type LegalHoldArn = `arn:${string}:backup:${string}:${string}:legal-hold:${string}`
export function legalHoldArn(parameters: LegalHoldArnParameters): LegalHoldArn {
  return `arn:${parameters.partition ?? ''}:backup:${parameters.region}:${parameters.account}:legal-hold:${parameters.legalHoldId}`
}

export interface RestoreTestingPlanArnParameters {
  partition?: string | undefined
  region: string
  account: string
  restoreTestingPlanName: string
  restoreTestingPlanId: string
}
export type RestoreTestingPlanArn = `arn:${string}:backup:${string}:${string}:restore-testing-plan:${string}-${string}`
export function restoreTestingPlanArn(parameters: RestoreTestingPlanArnParameters): RestoreTestingPlanArn {
  return `arn:${parameters.partition ?? ''}:backup:${parameters.region}:${parameters.account}:restore-testing-plan:${parameters.restoreTestingPlanName}-${parameters.restoreTestingPlanId}`
}