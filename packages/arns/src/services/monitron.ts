export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProjectArn = `arn:${string}:monitron:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? 'aws'}:monitron:${parameters.region}:${parameters.account}:project/${parameters.resourceId}`
}