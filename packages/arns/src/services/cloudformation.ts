import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChangeSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly changeSetName: string
  readonly id: string
}
class ChangeSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'changeset',
  `arn:${string}:cloudformation:${string}:${string}:changeSet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'changeset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly changeSetName: string
  readonly id: string
  constructor(parameters: ChangeSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.changeSetName = parameters.changeSetName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:changeSet/${this.changeSetName}/${this.id}` as const
  }
}
export type { ChangeSetArn }
export function changeSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChangeSetArnParameters<Partition>,
) {
  return new ChangeSetArn<Partition>(parameters)
}

export interface StackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackName: string
  readonly id: string
}
class StackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stack',
  `arn:${string}:cloudformation:${string}:${string}:stack/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stack' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackName: string
  readonly id: string
  constructor(parameters: StackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stackName = parameters.stackName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:stack/${this.stackName}/${this.id}` as const
  }
}
export type { StackArn }
export function stackArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackArnParameters<Partition>,
) {
  return new StackArn<Partition>(parameters)
}

export interface StackSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackSetName: string
  readonly id: string
}
class StackSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stackset',
  `arn:${string}:cloudformation:${string}:${string}:stackset/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stackset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackSetName: string
  readonly id: string
  constructor(parameters: StackSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stackSetName = parameters.stackSetName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:stackset/${this.stackSetName}:${this.id}` as const
  }
}
export type { StackSetArn }
export function stackSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackSetArnParameters<Partition>,
) {
  return new StackSetArn<Partition>(parameters)
}

export interface StackSetTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackSetTarget: string
}
class StackSetTargetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'stackset-target',
  `arn:${string}:cloudformation:${string}:${string}:stackset-target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stackset-target' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackSetTarget: string
  constructor(parameters: StackSetTargetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stackSetTarget = parameters.stackSetTarget
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:stackset-target/${this.stackSetTarget}` as const
  }
}
export type { StackSetTargetArn }
export function stackSetTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackSetTargetArnParameters<Partition>,
) {
  return new StackSetTargetArn<Partition>(parameters)
}

export interface TypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly type: string
}
class TypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'type',
  `arn:${string}:cloudformation:${string}:${string}:type/resource/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'type' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly type: string
  constructor(parameters: TypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.type = parameters.type
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:type/resource/${this.type}` as const
  }
}
export type { TypeArn }
export function typeArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeArnParameters<Partition>,
) {
  return new TypeArn<Partition>(parameters)
}

export interface GeneratedTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class GeneratedTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'generatedtemplate',
  `arn:${string}:cloudformation:${string}:${string}:generatedTemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'generatedtemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: GeneratedTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:generatedTemplate/${this.id}` as const
  }
}
export type { GeneratedTemplateArn }
export function generatedTemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: GeneratedTemplateArnParameters<Partition>,
) {
  return new GeneratedTemplateArn<Partition>(parameters)
}

export interface ResourceScanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ResourceScanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourcescan',
  `arn:${string}:cloudformation:${string}:${string}:resourceScan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourcescan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ResourceScanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:resourceScan/${this.id}` as const
  }
}
export type { ResourceScanArn }
export function resourceScanArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceScanArnParameters<Partition>,
) {
  return new ResourceScanArn<Partition>(parameters)
}
