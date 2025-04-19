import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AttackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class AttackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attack',
  `arn:${string}:shield::${string}:attack/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attack' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: AttackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:shield::${this.account}:attack/${this.id}` as const
  }
}
export type { AttackArn }
export function attackArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttackArnParameters<Partition>,
) {
  return new AttackArn<Partition>(parameters)
}

export interface ProtectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class ProtectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'protection',
  `arn:${string}:shield::${string}:protection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'protection' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: ProtectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:shield::${this.account}:protection/${this.id}` as const
  }
}
export type { ProtectionArn }
export function protectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProtectionArnParameters<Partition>,
) {
  return new ProtectionArn<Partition>(parameters)
}

export interface ProtectionGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class ProtectionGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'protection-group',
  `arn:${string}:shield::${string}:protection-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'protection-group' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: ProtectionGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:shield::${this.account}:protection-group/${this.id}` as const
  }
}
export type { ProtectionGroupArn }
export function protectionGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProtectionGroupArnParameters<Partition>,
) {
  return new ProtectionGroupArn<Partition>(parameters)
}
