import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ReadinesscheckArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class ReadinesscheckArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'readinesscheck', `arn:${string}:route53-recovery-readiness::${string}:readiness-check/${string}`> {
  readonly [ArnResourceTypeBrand] = 'readinesscheck' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ReadinesscheckArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:readiness-check/${this.resourceId}` as const
  }
}
export type { ReadinesscheckArn }
export function readinesscheckArn<Partition extends ArnPartition = 'aws'>(parameters: ReadinesscheckArnParameters<Partition>) {
  return new ReadinesscheckArn<Partition>(parameters)
}

export interface ResourcesetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class ResourcesetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'resourceset', `arn:${string}:route53-recovery-readiness::${string}:resource-set/${string}`> {
  readonly [ArnResourceTypeBrand] = 'resourceset' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ResourcesetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:resource-set/${this.resourceId}` as const
  }
}
export type { ResourcesetArn }
export function resourcesetArn<Partition extends ArnPartition = 'aws'>(parameters: ResourcesetArnParameters<Partition>) {
  return new ResourcesetArn<Partition>(parameters)
}

export interface CellArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class CellArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cell', `arn:${string}:route53-recovery-readiness::${string}:cell/${string}`> {
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
export function cellArn<Partition extends ArnPartition = 'aws'>(parameters: CellArnParameters<Partition>) {
  return new CellArn<Partition>(parameters)
}

export interface RecoverygroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class RecoverygroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'recoverygroup', `arn:${string}:route53-recovery-readiness::${string}:recovery-group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'recoverygroup' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RecoverygroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-readiness::${this.account}:recovery-group/${this.resourceId}` as const
  }
}
export type { RecoverygroupArn }
export function recoverygroupArn<Partition extends ArnPartition = 'aws'>(parameters: RecoverygroupArnParameters<Partition>) {
  return new RecoverygroupArn<Partition>(parameters)
}