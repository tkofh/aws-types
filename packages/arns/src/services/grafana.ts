import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface WorkspaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class WorkspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspace', `arn:${string}:grafana:${string}:${string}:/workspaces/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: WorkspaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:grafana:${this.region}:${this.account}:/workspaces/${this.resourceId}` as const
  }
}
export type { WorkspaceArn }
export function workspaceArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspaceArnParameters<Partition>) {
  return new WorkspaceArn<Partition>(parameters)
}