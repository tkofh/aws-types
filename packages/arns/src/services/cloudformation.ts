import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetChangeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetChange: string
  readonly id: string
}
class SetChangeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'changeset',
  `arn:${string}:cloudformation:${string}:${string}:changeSet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'changeset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetChange: string
  readonly id: string
  constructor(parameters: SetChangeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetChange = parameters.nameSetChange
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:changeSet/${this.nameSetChange}/${this.id}` as const
  }
}
export type { SetChangeArn }
export function setChangeArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetChangeArnParameters<Partition>,
) {
  return new SetChangeArn<Partition>(parameters)
}

export interface StackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStack: string
  readonly id: string
}
class StackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stack',
  `arn:${string}:cloudformation:${string}:${string}:stack/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stack' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStack: string
  readonly id: string
  constructor(parameters: StackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStack = parameters.nameStack
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:stack/${this.nameStack}/${this.id}` as const
  }
}
export type { StackArn }
export function stackArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackArnParameters<Partition>,
) {
  return new StackArn<Partition>(parameters)
}

export interface SetStackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetStack: string
  readonly id: string
}
class SetStackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stackset',
  `arn:${string}:cloudformation:${string}:${string}:stackset/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stackset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetStack: string
  readonly id: string
  constructor(parameters: SetStackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetStack = parameters.nameSetStack
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:stackset/${this.nameSetStack}:${this.id}` as const
  }
}
export type { SetStackArn }
export function setStackArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetStackArnParameters<Partition>,
) {
  return new SetStackArn<Partition>(parameters)
}

export interface TargetSetStackArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly targetSetStack: string
}
class TargetSetStackArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'stackset-target',
  `arn:${string}:cloudformation:${string}:${string}:stackset-target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stackset-target' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly targetSetStack: string
  constructor(parameters: TargetSetStackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.targetSetStack = parameters.targetSetStack
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:stackset-target/${this.targetSetStack}` as const
  }
}
export type { TargetSetStackArn }
export function targetSetStackArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetSetStackArnParameters<Partition>,
) {
  return new TargetSetStackArn<Partition>(parameters)
}

export interface TypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly type: string
}
class TypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'type',
  `arn:${string}:cloudformation:${string}:${string}:type/resource/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'type' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly type: string
  constructor(parameters: TypeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
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

export interface TemplateGeneratedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class TemplateGeneratedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'generatedtemplate',
  `arn:${string}:cloudformation:${string}:${string}:generatedTemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'generatedtemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: TemplateGeneratedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:generatedTemplate/${this.id}` as const
  }
}
export type { TemplateGeneratedArn }
export function templateGeneratedArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateGeneratedArnParameters<Partition>,
) {
  return new TemplateGeneratedArn<Partition>(parameters)
}

export interface ScanResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class ScanResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourcescan',
  `arn:${string}:cloudformation:${string}:${string}:resourceScan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourcescan' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: ScanResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudformation:${this.region}:${this.account}:resourceScan/${this.id}` as const
  }
}
export type { ScanResourceArn }
export function scanResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScanResourceArnParameters<Partition>,
) {
  return new ScanResourceArn<Partition>(parameters)
}
