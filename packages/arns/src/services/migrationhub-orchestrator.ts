import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workflow', `arn:${string}:migrationhub-orchestrator:${string}:${string}:workflow/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:migrationhub-orchestrator:${this.region}:${this.account}:workflow/${this.resourceId}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(parameters: WorkflowArnParameters<Partition>) {
  return new WorkflowArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'template', `arn:${string}:migrationhub-orchestrator:${string}:${string}:template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:migrationhub-orchestrator:${this.region}:${this.account}:template/${this.resourceId}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(parameters: TemplateArnParameters<Partition>) {
  return new TemplateArn<Partition>(parameters)
}