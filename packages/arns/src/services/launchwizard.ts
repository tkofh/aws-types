import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentId: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:launchwizard:${string}:${string}:deployment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentId: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deploymentId = parameters.deploymentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:launchwizard:${this.region}:${this.account}:deployment/${this.deploymentId}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}
