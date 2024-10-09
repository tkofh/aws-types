export interface ExecuteApiGeneralArnParameters {
  partition?: string | undefined
  region: string
  account: string
  apiId: string
  stage: string
  method: string
  apiSpecificResourcePath: string
}
export type ExecuteApiGeneralArn = `arn:${string}:execute-api:${string}:${string}:${string}/${string}/${string}/${string}`
export function executeApiGeneralArn(parameters: ExecuteApiGeneralArnParameters): ExecuteApiGeneralArn {
  return `arn:${parameters.partition ?? ''}:execute-api:${parameters.region}:${parameters.account}:${parameters.apiId}/${parameters.stage}/${parameters.method}/${parameters.apiSpecificResourcePath}`
}