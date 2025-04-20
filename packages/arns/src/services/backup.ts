import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BackupVaultArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly backupVaultName: string
}
class BackupVaultArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'backupVault',
  `arn:${string}:backup:${string}:${string}:backup-vault:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backupVault' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly backupVaultName: string
  constructor(parameters: BackupVaultArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.backupVaultName = parameters.backupVaultName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:backup-vault:${this.backupVaultName}` as const
  }
}
export type { BackupVaultArn }
export function backupVaultArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupVaultArnParameters<Partition>,
) {
  return new BackupVaultArn<Partition>(parameters)
}

export interface BackupPlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly backupPlanId: string
}
class BackupPlanArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backupPlan',
  `arn:${string}:backup:${string}:${string}:backup-plan:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backupPlan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly backupPlanId: string
  constructor(parameters: BackupPlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.backupPlanId = parameters.backupPlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:backup-plan:${this.backupPlanId}` as const
  }
}
export type { BackupPlanArn }
export function backupPlanArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupPlanArnParameters<Partition>,
) {
  return new BackupPlanArn<Partition>(parameters)
}

export interface RecoveryPointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly vendor: string
  readonly region: ArnRegion<Partition>
  readonly resourceType: string
  readonly recoveryPointId: string
}
class RecoveryPointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recoveryPoint',
  `arn:${string}:${string}:${string}:*:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recoveryPoint' as const
  readonly partition: Partition
  readonly vendor: string
  readonly region: ArnRegion<Partition>
  readonly resourceType: string
  readonly recoveryPointId: string
  constructor(parameters: RecoveryPointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.vendor = parameters.vendor
    this.region = parameters.region
    this.resourceType = parameters.resourceType
    this.recoveryPointId = parameters.recoveryPointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:${this.vendor}:${this.region}:*:${this.resourceType}:${this.recoveryPointId}` as const
  }
}
export type { RecoveryPointArn }
export function recoveryPointArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecoveryPointArnParameters<Partition>,
) {
  return new RecoveryPointArn<Partition>(parameters)
}

export interface FrameworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly frameworkName: string
  readonly frameworkId: string
}
class FrameworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'framework',
  `arn:${string}:backup:${string}:${string}:framework:${string}-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'framework' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly frameworkName: string
  readonly frameworkId: string
  constructor(parameters: FrameworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.frameworkName = parameters.frameworkName
    this.frameworkId = parameters.frameworkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:framework:${this.frameworkName}-${this.frameworkId}` as const
  }
}
export type { FrameworkArn }
export function frameworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: FrameworkArnParameters<Partition>,
) {
  return new FrameworkArn<Partition>(parameters)
}

export interface ReportPlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportPlanName: string
  readonly reportPlanId: string
}
class ReportPlanArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'reportPlan',
  `arn:${string}:backup:${string}:${string}:report-plan:${string}-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reportPlan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportPlanName: string
  readonly reportPlanId: string
  constructor(parameters: ReportPlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reportPlanName = parameters.reportPlanName
    this.reportPlanId = parameters.reportPlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:report-plan:${this.reportPlanName}-${this.reportPlanId}` as const
  }
}
export type { ReportPlanArn }
export function reportPlanArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReportPlanArnParameters<Partition>,
) {
  return new ReportPlanArn<Partition>(parameters)
}

export interface LegalHoldArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly legalHoldId: string
}
class LegalHoldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'legalHold',
  `arn:${string}:backup:${string}:${string}:legal-hold:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'legalHold' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly legalHoldId: string
  constructor(parameters: LegalHoldArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.legalHoldId = parameters.legalHoldId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:legal-hold:${this.legalHoldId}` as const
  }
}
export type { LegalHoldArn }
export function legalHoldArn<Partition extends ArnPartition = 'aws'>(
  parameters: LegalHoldArnParameters<Partition>,
) {
  return new LegalHoldArn<Partition>(parameters)
}

export interface RestoreTestingPlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly restoreTestingPlanName: string
  readonly restoreTestingPlanId: string
}
class RestoreTestingPlanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'restoreTestingPlan',
  `arn:${string}:backup:${string}:${string}:restore-testing-plan:${string}-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'restoreTestingPlan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly restoreTestingPlanName: string
  readonly restoreTestingPlanId: string
  constructor(parameters: RestoreTestingPlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.restoreTestingPlanName = parameters.restoreTestingPlanName
    this.restoreTestingPlanId = parameters.restoreTestingPlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:restore-testing-plan:${this.restoreTestingPlanName}-${this.restoreTestingPlanId}` as const
  }
}
export type { RestoreTestingPlanArn }
export function restoreTestingPlanArn<Partition extends ArnPartition = 'aws'>(
  parameters: RestoreTestingPlanArnParameters<Partition>,
) {
  return new RestoreTestingPlanArn<Partition>(parameters)
}
