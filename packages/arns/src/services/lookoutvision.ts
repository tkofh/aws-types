export interface ModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
  modelVersion: string
}
export type ModelArn = `arn:${string}:lookoutvision:${string}:${string}:model/${string}/${string}`
export function modelArn(parameters: ModelArnParameters): ModelArn {
  return `arn:${parameters.partition ?? ''}:lookoutvision:${parameters.region}:${parameters.account}:model/${parameters.projectName}/${parameters.modelVersion}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
}
export type ProjectArn = `arn:${string}:lookoutvision:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:lookoutvision:${parameters.region}:${parameters.account}:project/${parameters.projectName}`
}