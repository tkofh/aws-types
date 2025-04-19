import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:fms:${string}:${string}:policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface ApplicationsListArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ApplicationsListArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'applications-list',
  `arn:${string}:fms:${string}:${string}:applications-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'applications-list' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ApplicationsListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fms:${this.region}:${this.account}:applications-list/${this.id}` as const
  }
}
export type { ApplicationsListArn }
export function applicationsListArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationsListArnParameters<Partition>,
) {
  return new ApplicationsListArn<Partition>(parameters)
}

export interface ProtocolsListArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ProtocolsListArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'protocols-list',
  `arn:${string}:fms:${string}:${string}:protocols-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'protocols-list' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ProtocolsListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fms:${this.region}:${this.account}:protocols-list/${this.id}` as const
  }
}
export type { ProtocolsListArn }
export function protocolsListArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProtocolsListArnParameters<Partition>,
) {
  return new ProtocolsListArn<Partition>(parameters)
}

export interface ResourceSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ResourceSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resource-set',
  `arn:${string}:fms:${string}:${string}:resource-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resource-set' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ResourceSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fms:${this.region}:${this.account}:resource-set/${this.id}` as const
  }
}
export type { ResourceSetArn }
export function resourceSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceSetArnParameters<Partition>,
) {
  return new ResourceSetArn<Partition>(parameters)
}
