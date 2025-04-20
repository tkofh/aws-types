import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ReadinessCheckArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class ReadinessCheckArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'readinesscheck',
  `arn:${string}:route53-recovery-readiness::${string}:readiness-check/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'readinesscheck' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ReadinessCheckArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:readiness-check/${this.resourceId}` as const
  }
}
export type { ReadinessCheckArn }
export function readinessCheckArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReadinessCheckArnParameters<Partition>,
) {
  return new ReadinessCheckArn<Partition>(parameters)
}

export interface ResourceSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class ResourceSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourceset',
  `arn:${string}:route53-recovery-readiness::${string}:resource-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourceset' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ResourceSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:resource-set/${this.resourceId}` as const
  }
}
export type { ResourceSetArn }
export function resourceSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceSetArnParameters<Partition>,
) {
  return new ResourceSetArn<Partition>(parameters)
}

export interface CellArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class CellArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cell',
  `arn:${string}:route53-recovery-readiness::${string}:cell/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cell' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CellArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:cell/${this.resourceId}` as const
  }
}
export type { CellArn }
export function cellArn<Partition extends ArnPartition = 'aws'>(
  parameters: CellArnParameters<Partition>,
) {
  return new CellArn<Partition>(parameters)
}

export interface RecoveryGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class RecoveryGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recoverygroup',
  `arn:${string}:route53-recovery-readiness::${string}:recovery-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recoverygroup' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RecoveryGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:recovery-group/${this.resourceId}` as const
  }
}
export type { RecoveryGroupArn }
export function recoveryGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecoveryGroupArnParameters<Partition>,
) {
  return new RecoveryGroupArn<Partition>(parameters)
}
