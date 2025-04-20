import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CheckReadinessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class CheckReadinessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'readinesscheck',
  `arn:${string}:route53-recovery-readiness::${string}:readiness-check/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'readinesscheck' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CheckReadinessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:readiness-check/${this.idResource}` as const
  }
}
export type { CheckReadinessArn }
export function checkReadinessArn<Partition extends ArnPartition = 'aws'>(
  parameters: CheckReadinessArnParameters<Partition>,
) {
  return new CheckReadinessArn<Partition>(parameters)
}

export interface SetResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class SetResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourceset',
  `arn:${string}:route53-recovery-readiness::${string}:resource-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourceset' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SetResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:resource-set/${this.idResource}` as const
  }
}
export type { SetResourceArn }
export function setResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetResourceArnParameters<Partition>,
) {
  return new SetResourceArn<Partition>(parameters)
}

export interface CellArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class CellArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cell',
  `arn:${string}:route53-recovery-readiness::${string}:cell/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cell' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CellArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:cell/${this.idResource}` as const
  }
}
export type { CellArn }
export function cellArn<Partition extends ArnPartition = 'aws'>(
  parameters: CellArnParameters<Partition>,
) {
  return new CellArn<Partition>(parameters)
}

export interface GroupRecoveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class GroupRecoveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recoverygroup',
  `arn:${string}:route53-recovery-readiness::${string}:recovery-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recoverygroup' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GroupRecoveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:recovery-group/${this.idResource}` as const
  }
}
export type { GroupRecoveryArn }
export function groupRecoveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupRecoveryArnParameters<Partition>,
) {
  return new GroupRecoveryArn<Partition>(parameters)
}
