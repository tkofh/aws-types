import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ServerTrackingMlflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameServerTrackingFlowMl: string
}
class ServerTrackingMlflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mlflow-tracking-server',
  `arn:${string}:sagemaker:${string}:${string}:mlflow-tracking-server/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mlflow-tracking-server' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameServerTrackingFlowMl: string
  constructor(parameters: ServerTrackingMlflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameServerTrackingFlowMl = parameters.nameServerTrackingFlowMl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker:${this.region}:${this.account}:mlflow-tracking-server/${this.nameServerTrackingFlowMl}` as const
  }
}
export type { ServerTrackingMlflowArn }
export function serverTrackingMlflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServerTrackingMlflowArnParameters<Partition>,
) {
  return new ServerTrackingMlflowArn<Partition>(parameters)
}
