import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:fms:${string}:${string}:policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fms:${this.region}:${this.account}:policy/${this.id}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyArnParameters<Partition>,
) {
  return new PolicyArn<Partition>(parameters)
}

export interface ListApplicationsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class ListApplicationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'applications-list',
  `arn:${string}:fms:${string}:${string}:applications-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'applications-list' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: ListApplicationsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fms:${this.region}:${this.account}:applications-list/${this.id}` as const
  }
}
export type { ListApplicationsArn }
export function listApplicationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListApplicationsArnParameters<Partition>,
) {
  return new ListApplicationsArn<Partition>(parameters)
}

export interface ListProtocolsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class ListProtocolsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'protocols-list',
  `arn:${string}:fms:${string}:${string}:protocols-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'protocols-list' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: ListProtocolsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fms:${this.region}:${this.account}:protocols-list/${this.id}` as const
  }
}
export type { ListProtocolsArn }
export function listProtocolsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListProtocolsArnParameters<Partition>,
) {
  return new ListProtocolsArn<Partition>(parameters)
}

export interface SetResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class SetResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resource-set',
  `arn:${string}:fms:${string}:${string}:resource-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resource-set' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fms:${this.region}:${this.account}:resource-set/${this.id}` as const
  }
}
export type { SetResourceArn }
export function setResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetResourceArnParameters<Partition>,
) {
  return new SetResourceArn<Partition>(parameters)
}
