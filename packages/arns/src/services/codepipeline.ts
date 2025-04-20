import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ActionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  readonly nameStage: string
  readonly nameAction: string
}
class ActionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'action',
  `arn:${string}:codepipeline:${string}:${string}:${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'action' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  readonly nameStage: string
  readonly nameAction: string
  constructor(parameters: ActionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipeline = parameters.namePipeline
    this.nameStage = parameters.nameStage
    this.nameAction = parameters.nameAction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:${this.namePipeline}/${this.nameStage}/${this.nameAction}` as const
  }
}
export type { ActionArn }
export function actionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionArnParameters<Partition>,
) {
  return new ActionArn<Partition>(parameters)
}

export interface TypeActionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly owner: string
  readonly category: string
  readonly provider: string
  readonly version: string
}
class TypeActionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'actiontype',
  `arn:${string}:codepipeline:${string}:${string}:actiontype:${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'actiontype' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly owner: string
  readonly category: string
  readonly provider: string
  readonly version: string
  constructor(parameters: TypeActionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.owner = parameters.owner
    this.category = parameters.category
    this.provider = parameters.provider
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:actiontype:${this.owner}/${this.category}/${this.provider}/${this.version}` as const
  }
}
export type { TypeActionArn }
export function typeActionArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeActionArnParameters<Partition>,
) {
  return new TypeActionArn<Partition>(parameters)
}

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:codepipeline:${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipeline = parameters.namePipeline
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:${this.namePipeline}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

export interface StageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  readonly nameStage: string
}
class StageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stage',
  `arn:${string}:codepipeline:${string}:${string}:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stage' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  readonly nameStage: string
  constructor(parameters: StageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipeline = parameters.namePipeline
    this.nameStage = parameters.nameStage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:${this.namePipeline}/${this.nameStage}` as const
  }
}
export type { StageArn }
export function stageArn<Partition extends ArnPartition = 'aws'>(
  parameters: StageArnParameters<Partition>,
) {
  return new StageArn<Partition>(parameters)
}

export interface WebhookArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWebhook: string
}
class WebhookArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webhook',
  `arn:${string}:codepipeline:${string}:${string}:webhook:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webhook' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWebhook: string
  constructor(parameters: WebhookArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameWebhook = parameters.nameWebhook
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:webhook:${this.nameWebhook}` as const
  }
}
export type { WebhookArn }
export function webhookArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebhookArnParameters<Partition>,
) {
  return new WebhookArn<Partition>(parameters)
}
