import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface MlflowTrackingServerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mlflowTrackingServerName: string
}
class MlflowTrackingServerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'mlflow-tracking-server', `arn:${string}:sagemaker:${string}:${string}:mlflow-tracking-server/${string}`> {
  readonly [ArnResourceTypeBrand] = 'mlflow-tracking-server' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mlflowTrackingServerName: string
  constructor(parameters: MlflowTrackingServerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.mlflowTrackingServerName = parameters.mlflowTrackingServerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:mlflow-tracking-server/${this.mlflowTrackingServerName}` as const
  }
}
export type { MlflowTrackingServerArn }
export function mlflowTrackingServerArn<Partition extends ArnPartition = 'aws'>(parameters: MlflowTrackingServerArnParameters<Partition>) {
  return new MlflowTrackingServerArn<Partition>(parameters)
}