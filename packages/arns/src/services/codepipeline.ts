import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ActionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  readonly stageName: string
  readonly actionName: string
}
class ActionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'action',
  `arn:${string}:codepipeline:${string}:${string}:${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'action' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  readonly stageName: string
  readonly actionName: string
  constructor(parameters: ActionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineName = parameters.pipelineName
    this.stageName = parameters.stageName
    this.actionName = parameters.actionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:${this.pipelineName}/${this.stageName}/${this.actionName}` as const
  }
}
export type { ActionArn }
export function actionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionArnParameters<Partition>,
) {
  return new ActionArn<Partition>(parameters)
}

export interface ActionTypeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly owner: string
  readonly category: string
  readonly provider: string
  readonly version: string
}
class ActionTypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'actiontype',
  `arn:${string}:codepipeline:${string}:${string}:actiontype:${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'actiontype' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly owner: string
  readonly category: string
  readonly provider: string
  readonly version: string
  constructor(parameters: ActionTypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
export type { ActionTypeArn }
export function actionTypeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionTypeArnParameters<Partition>,
) {
  return new ActionTypeArn<Partition>(parameters)
}

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:codepipeline:${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineName = parameters.pipelineName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:${this.pipelineName}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

export interface StageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  readonly stageName: string
}
class StageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stage',
  `arn:${string}:codepipeline:${string}:${string}:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stage' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  readonly stageName: string
  constructor(parameters: StageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineName = parameters.pipelineName
    this.stageName = parameters.stageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:${this.pipelineName}/${this.stageName}` as const
  }
}
export type { StageArn }
export function stageArn<Partition extends ArnPartition = 'aws'>(
  parameters: StageArnParameters<Partition>,
) {
  return new StageArn<Partition>(parameters)
}

export interface WebhookArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly webhookName: string
}
class WebhookArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webhook',
  `arn:${string}:codepipeline:${string}:${string}:webhook:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webhook' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly webhookName: string
  constructor(parameters: WebhookArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.webhookName = parameters.webhookName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codepipeline:${this.region}:${this.account}:webhook:${this.webhookName}` as const
  }
}
export type { WebhookArn }
export function webhookArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebhookArnParameters<Partition>,
) {
  return new WebhookArn<Partition>(parameters)
}
