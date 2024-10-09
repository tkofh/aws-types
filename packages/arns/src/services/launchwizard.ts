export interface DeploymentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deploymentId: string
}
export type DeploymentArn = `arn:${string}:launchwizard:${string}:${string}:deployment/${string}`
export function deploymentArn(parameters: DeploymentArnParameters): DeploymentArn {
  return `arn:${parameters.partition ?? ''}:launchwizard:${parameters.region}:${parameters.account}:deployment/${parameters.deploymentId}`
}