import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface VaultBackupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVaultBackup: string
}
class VaultBackupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'backupVault',
  `arn:${string}:backup:${string}:${string}:backup-vault:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backupVault' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVaultBackup: string
  constructor(parameters: VaultBackupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameVaultBackup = parameters.nameVaultBackup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:backup-vault:${this.nameVaultBackup}` as const
  }
}
export type { VaultBackupArn }
export function vaultBackupArn<Partition extends ArnPartition = 'aws'>(
  parameters: VaultBackupArnParameters<Partition>,
) {
  return new VaultBackupArn<Partition>(parameters)
}

export interface PlanBackupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPlanBackup: string
}
class PlanBackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backupPlan',
  `arn:${string}:backup:${string}:${string}:backup-plan:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backupPlan' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPlanBackup: string
  constructor(parameters: PlanBackupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPlanBackup = parameters.idPlanBackup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:backup-plan:${this.idPlanBackup}` as const
  }
}
export type { PlanBackupArn }
export function planBackupArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanBackupArnParameters<Partition>,
) {
  return new PlanBackupArn<Partition>(parameters)
}

export interface PointRecoveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly vendor: string
  readonly region: string
  readonly typeResource: string
  readonly idPointRecovery: string
}
class PointRecoveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recoveryPoint',
  `arn:${string}:${string}:${string}:*:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recoveryPoint' as const
  readonly partition: string
  readonly vendor: string
  readonly region: string
  readonly typeResource: string
  readonly idPointRecovery: string
  constructor(parameters: PointRecoveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.vendor = parameters.vendor
    this.region = parameters.region
    this.typeResource = parameters.typeResource
    this.idPointRecovery = parameters.idPointRecovery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:${this.vendor}:${this.region}:*:${this.typeResource}:${this.idPointRecovery}` as const
  }
}
export type { PointRecoveryArn }
export function pointRecoveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: PointRecoveryArnParameters<Partition>,
) {
  return new PointRecoveryArn<Partition>(parameters)
}

export interface FrameworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFramework: string
  readonly idFramework: string
}
class FrameworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'framework',
  `arn:${string}:backup:${string}:${string}:framework:${string}-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'framework' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFramework: string
  readonly idFramework: string
  constructor(parameters: FrameworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFramework = parameters.nameFramework
    this.idFramework = parameters.idFramework
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:framework:${this.nameFramework}-${this.idFramework}` as const
  }
}
export type { FrameworkArn }
export function frameworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: FrameworkArnParameters<Partition>,
) {
  return new FrameworkArn<Partition>(parameters)
}

export interface PlanReportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePlanReport: string
  readonly idPlanReport: string
}
class PlanReportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'reportPlan',
  `arn:${string}:backup:${string}:${string}:report-plan:${string}-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reportPlan' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePlanReport: string
  readonly idPlanReport: string
  constructor(parameters: PlanReportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePlanReport = parameters.namePlanReport
    this.idPlanReport = parameters.idPlanReport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:report-plan:${this.namePlanReport}-${this.idPlanReport}` as const
  }
}
export type { PlanReportArn }
export function planReportArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanReportArnParameters<Partition>,
) {
  return new PlanReportArn<Partition>(parameters)
}

export interface HoldLegalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idHoldLegal: string
}
class HoldLegalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'legalHold',
  `arn:${string}:backup:${string}:${string}:legal-hold:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'legalHold' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idHoldLegal: string
  constructor(parameters: HoldLegalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idHoldLegal = parameters.idHoldLegal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:legal-hold:${this.idHoldLegal}` as const
  }
}
export type { HoldLegalArn }
export function holdLegalArn<Partition extends ArnPartition = 'aws'>(
  parameters: HoldLegalArnParameters<Partition>,
) {
  return new HoldLegalArn<Partition>(parameters)
}

export interface PlanTestingRestoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePlanTestingRestore: string
  readonly idPlanTestingRestore: string
}
class PlanTestingRestoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'restoreTestingPlan',
  `arn:${string}:backup:${string}:${string}:restore-testing-plan:${string}-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'restoreTestingPlan' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePlanTestingRestore: string
  readonly idPlanTestingRestore: string
  constructor(parameters: PlanTestingRestoreArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePlanTestingRestore = parameters.namePlanTestingRestore
    this.idPlanTestingRestore = parameters.idPlanTestingRestore
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup:${this.region}:${this.account}:restore-testing-plan:${this.namePlanTestingRestore}-${this.idPlanTestingRestore}` as const
  }
}
export type { PlanTestingRestoreArn }
export function planTestingRestoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanTestingRestoreArnParameters<Partition>,
) {
  return new PlanTestingRestoreArn<Partition>(parameters)
}
