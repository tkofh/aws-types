import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ControlCommonArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idControlCommon: string
}
class ControlCommonArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'common-control',
  `arn:${string}:controlcatalog:::common-control/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'common-control' as const
  readonly partition: string
  readonly idControlCommon: string
  constructor(parameters: ControlCommonArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idControlCommon = parameters.idControlCommon
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::common-control/${this.idControlCommon}` as const
  }
}
export type { ControlCommonArn }
export function controlCommonArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlCommonArnParameters<Partition>,
) {
  return new ControlCommonArn<Partition>(parameters)
}

export interface ControlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idControl: string
}
class ControlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'control',
  `arn:${string}:controlcatalog:::control/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'control' as const
  readonly partition: string
  readonly idControl: string
  constructor(parameters: ControlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idControl = parameters.idControl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::control/${this.idControl}` as const
  }
}
export type { ControlArn }
export function controlArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlArnParameters<Partition>,
) {
  return new ControlArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idDomain: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:controlcatalog:::domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: string
  readonly idDomain: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idDomain = parameters.idDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::domain/${this.idDomain}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface ObjectiveArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idObjective: string
}
class ObjectiveArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'objective',
  `arn:${string}:controlcatalog:::objective/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'objective' as const
  readonly partition: string
  readonly idObjective: string
  constructor(parameters: ObjectiveArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idObjective = parameters.idObjective
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controlcatalog:::objective/${this.idObjective}` as const
  }
}
export type { ObjectiveArn }
export function objectiveArn<Partition extends ArnPartition = 'aws'>(
  parameters: ObjectiveArnParameters<Partition>,
) {
  return new ObjectiveArn<Partition>(parameters)
}
