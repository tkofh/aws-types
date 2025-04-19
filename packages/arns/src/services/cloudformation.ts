import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChangesetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly changeSetName: string
  readonly id: string
}
class ChangesetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'changeset',
  `arn:${string}:cloudformation:${string}:${string}:changeSet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'changeset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly changeSetName: string
  readonly id: string
  constructor(parameters: ChangesetArnParameters<Partition>) {
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
export type { ChangesetArn }
export function changesetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChangesetArnParameters<Partition>,
) {
  return new ChangesetArn<Partition>(parameters)
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

export interface StacksetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackSetName: string
  readonly id: string
}
class StacksetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stackset',
  `arn:${string}:cloudformation:${string}:${string}:stackset/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stackset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackSetName: string
  readonly id: string
  constructor(parameters: StacksetArnParameters<Partition>) {
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
export type { StacksetArn }
export function stacksetArn<Partition extends ArnPartition = 'aws'>(
  parameters: StacksetArnParameters<Partition>,
) {
  return new StacksetArn<Partition>(parameters)
}

export interface StacksetTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackSetTarget: string
}
class StacksetTargetArn<
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
  constructor(parameters: StacksetTargetArnParameters<Partition>) {
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
export type { StacksetTargetArn }
export function stacksetTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: StacksetTargetArnParameters<Partition>,
) {
  return new StacksetTargetArn<Partition>(parameters)
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

export interface GeneratedtemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class GeneratedtemplateArn<
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
  constructor(parameters: GeneratedtemplateArnParameters<Partition>) {
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
export type { GeneratedtemplateArn }
export function generatedtemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: GeneratedtemplateArnParameters<Partition>,
) {
  return new GeneratedtemplateArn<Partition>(parameters)
}

export interface ResourcescanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ResourcescanArn<
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
  constructor(parameters: ResourcescanArnParameters<Partition>) {
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
export type { ResourcescanArn }
export function resourcescanArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourcescanArnParameters<Partition>,
) {
  return new ResourcescanArn<Partition>(parameters)
}
