export interface MlflowTrackingServerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  mlflowTrackingServerName: string
}
export type MlflowTrackingServerArn = `arn:${string}:sagemaker:${string}:${string}:mlflow-tracking-server/${string}`
export function mlflowTrackingServerArn(parameters: MlflowTrackingServerArnParameters): MlflowTrackingServerArn {
  return `arn:${parameters.partition ?? ''}:sagemaker:${parameters.region}:${parameters.account}:mlflow-tracking-server/${parameters.mlflowTrackingServerName}`
}