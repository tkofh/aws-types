export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  snapshotId: string
}
export type SnapshotArn = `arn:${string}:ec2:${string}::snapshot/${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}::snapshot/${parameters.snapshotId}`
}