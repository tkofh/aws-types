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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeployment: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:launchwizard:${string}:${string}:deployment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeployment: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDeployment = parameters.idDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:launchwizard:${this.region}:${this.account}:deployment/${this.idDeployment}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}
