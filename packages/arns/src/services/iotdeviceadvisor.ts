export interface SuitedefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  suiteDefinitionId: string
}
export type SuitedefinitionArn = `arn:${string}:iotdeviceadvisor:${string}:${string}:suitedefinition/${string}`
export function suitedefinitionArn(parameters: SuitedefinitionArnParameters): SuitedefinitionArn {
  return `arn:${parameters.partition ?? ''}:iotdeviceadvisor:${parameters.region}:${parameters.account}:suitedefinition/${parameters.suiteDefinitionId}`
}

export interface SuiterunArnParameters {
  partition?: string | undefined
  region: string
  account: string
  suiteDefinitionId: string
  suiteRunId: string
}
export type SuiterunArn = `arn:${string}:iotdeviceadvisor:${string}:${string}:suiterun/${string}/${string}`
export function suiterunArn(parameters: SuiterunArnParameters): SuiterunArn {
  return `arn:${parameters.partition ?? ''}:iotdeviceadvisor:${parameters.region}:${parameters.account}:suiterun/${parameters.suiteDefinitionId}/${parameters.suiteRunId}`
}