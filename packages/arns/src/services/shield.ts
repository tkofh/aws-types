import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AttackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class AttackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attack',
  `arn:${string}:shield::${string}:attack/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attack' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: AttackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
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
  readonly partition: string
  readonly account: string
  readonly id: string
}
class ProtectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'protection',
  `arn:${string}:shield::${string}:protection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'protection' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: ProtectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
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

export interface GroupProtectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class GroupProtectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'protection-group',
  `arn:${string}:shield::${string}:protection-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'protection-group' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: GroupProtectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:shield::${this.account}:protection-group/${this.id}` as const
  }
}
export type { GroupProtectionArn }
export function groupProtectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupProtectionArnParameters<Partition>,
) {
  return new GroupProtectionArn<Partition>(parameters)
}
