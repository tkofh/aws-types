import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CommonControlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly commonControlId: string
}
class CommonControlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'common-control', `arn:${string}:controlcatalog:::common-control/${string}`> {
  readonly [ArnResourceTypeBrand] = 'common-control' as const
  readonly partition: Partition
  readonly commonControlId: string
  constructor(parameters: CommonControlArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.commonControlId = parameters.commonControlId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::common-control/${this.commonControlId}` as const
  }
}
export type { CommonControlArn }
export function commonControlArn<Partition extends ArnPartition = 'aws'>(parameters: CommonControlArnParameters<Partition>) {
  return new CommonControlArn<Partition>(parameters)
}

export interface ControlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly controlId: string
}
class ControlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'control', `arn:${string}:controlcatalog:::control/${string}`> {
  readonly [ArnResourceTypeBrand] = 'control' as const
  readonly partition: Partition
  readonly controlId: string
  constructor(parameters: ControlArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.controlId = parameters.controlId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::control/${this.controlId}` as const
  }
}
export type { ControlArn }
export function controlArn<Partition extends ArnPartition = 'aws'>(parameters: ControlArnParameters<Partition>) {
  return new ControlArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly domainId: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'domain', `arn:${string}:controlcatalog:::domain/${string}`> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: Partition
  readonly domainId: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.domainId = parameters.domainId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::domain/${this.domainId}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(parameters: DomainArnParameters<Partition>) {
  return new DomainArn<Partition>(parameters)
}

export interface ObjectiveArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly objectiveId: string
}
class ObjectiveArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'objective', `arn:${string}:controlcatalog:::objective/${string}`> {
  readonly [ArnResourceTypeBrand] = 'objective' as const
  readonly partition: Partition
  readonly objectiveId: string
  constructor(parameters: ObjectiveArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.objectiveId = parameters.objectiveId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::objective/${this.objectiveId}` as const
  }
}
export type { ObjectiveArn }
export function objectiveArn<Partition extends ArnPartition = 'aws'>(parameters: ObjectiveArnParameters<Partition>) {
  return new ObjectiveArn<Partition>(parameters)
}