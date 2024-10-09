export interface ReadinesscheckArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type ReadinesscheckArn = `arn:${string}:route53-recovery-readiness::${string}:readiness-check/${string}`
export function readinesscheckArn(parameters: ReadinesscheckArnParameters): ReadinesscheckArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-readiness::${parameters.account}:readiness-check/${parameters.resourceId}`
}

export interface ResourcesetArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type ResourcesetArn = `arn:${string}:route53-recovery-readiness::${string}:resource-set/${string}`
export function resourcesetArn(parameters: ResourcesetArnParameters): ResourcesetArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-readiness::${parameters.account}:resource-set/${parameters.resourceId}`
}

export interface CellArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type CellArn = `arn:${string}:route53-recovery-readiness::${string}:cell/${string}`
export function cellArn(parameters: CellArnParameters): CellArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-readiness::${parameters.account}:cell/${parameters.resourceId}`
}

export interface RecoverygroupArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type RecoverygroupArn = `arn:${string}:route53-recovery-readiness::${string}:recovery-group/${string}`
export function recoverygroupArn(parameters: RecoverygroupArnParameters): RecoverygroupArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-readiness::${parameters.account}:recovery-group/${parameters.resourceId}`
}