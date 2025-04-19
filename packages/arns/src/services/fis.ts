import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ActionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ActionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'action', `arn:${string}:fis:${string}:${string}:action/${string}`> {
  readonly [ArnResourceTypeBrand] = 'action' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ActionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fis:${this.region}:${this.account}:action/${this.id}` as const
  }
}
export type { ActionArn }
export function actionArn<Partition extends ArnPartition = 'aws'>(parameters: ActionArnParameters<Partition>) {
  return new ActionArn<Partition>(parameters)
}

export interface ExperimentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ExperimentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'experiment', `arn:${string}:fis:${string}:${string}:experiment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'experiment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ExperimentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fis:${this.region}:${this.account}:experiment/${this.id}` as const
  }
}
export type { ExperimentArn }
export function experimentArn<Partition extends ArnPartition = 'aws'>(parameters: ExperimentArnParameters<Partition>) {
  return new ExperimentArn<Partition>(parameters)
}

export interface ExperimentTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ExperimentTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'experiment-template', `arn:${string}:fis:${string}:${string}:experiment-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'experiment-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ExperimentTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fis:${this.region}:${this.account}:experiment-template/${this.id}` as const
  }
}
export type { ExperimentTemplateArn }
export function experimentTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: ExperimentTemplateArnParameters<Partition>) {
  return new ExperimentTemplateArn<Partition>(parameters)
}

export interface SafetyLeverArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class SafetyLeverArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'safety-lever', `arn:${string}:fis:${string}:${string}:safety-lever/${string}`> {
  readonly [ArnResourceTypeBrand] = 'safety-lever' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: SafetyLeverArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fis:${this.region}:${this.account}:safety-lever/${this.id}` as const
  }
}
export type { SafetyLeverArn }
export function safetyLeverArn<Partition extends ArnPartition = 'aws'>(parameters: SafetyLeverArnParameters<Partition>) {
  return new SafetyLeverArn<Partition>(parameters)
}