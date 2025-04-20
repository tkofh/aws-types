import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface WorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class WorkspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workspace',
  `arn:${string}:grafana:${string}:${string}:/workspaces/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: WorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:grafana:${this.region}:${this.account}:/workspaces/${this.idResource}` as const
  }
}
export type { WorkspaceArn }
export function workspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceArnParameters<Partition>,
) {
  return new WorkspaceArn<Partition>(parameters)
}
