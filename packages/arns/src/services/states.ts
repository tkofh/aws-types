export interface ActivityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  activityName: string
}
export type ActivityArn = `arn:${string}:states:${string}:${string}:activity:${string}`
export function activityArn(parameters: ActivityArnParameters): ActivityArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:activity:${parameters.activityName}`
}

export interface ExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
  executionId: string
}
export type ExecutionArn = `arn:${string}:states:${string}:${string}:execution:${string}:${string}`
export function executionArn(parameters: ExecutionArnParameters): ExecutionArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:execution:${parameters.stateMachineName}:${parameters.executionId}`
}

export interface ExpressArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
  executionId: string
  expressId: string
}
export type ExpressArn = `arn:${string}:states:${string}:${string}:express:${string}:${string}:${string}`
export function expressArn(parameters: ExpressArnParameters): ExpressArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:express:${parameters.stateMachineName}:${parameters.executionId}:${parameters.expressId}`
}

export interface StatemachineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
}
export type StatemachineArn = `arn:${string}:states:${string}:${string}:stateMachine:${string}`
export function statemachineArn(parameters: StatemachineArnParameters): StatemachineArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:stateMachine:${parameters.stateMachineName}`
}

export interface StatemachineversionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
  stateMachineVersionId: string
}
export type StatemachineversionArn = `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`
export function statemachineversionArn(parameters: StatemachineversionArnParameters): StatemachineversionArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:stateMachine:${parameters.stateMachineName}:${parameters.stateMachineVersionId}`
}

export interface StatemachinealiasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
  stateMachineAliasName: string
}
export type StatemachinealiasArn = `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`
export function statemachinealiasArn(parameters: StatemachinealiasArnParameters): StatemachinealiasArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:stateMachine:${parameters.stateMachineName}:${parameters.stateMachineAliasName}`
}

export interface MaprunArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
  mapRunLabel: string
  mapRunId: string
}
export type MaprunArn = `arn:${string}:states:${string}:${string}:mapRun:${string}/${string}:${string}`
export function maprunArn(parameters: MaprunArnParameters): MaprunArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:mapRun:${parameters.stateMachineName}/${parameters.mapRunLabel}:${parameters.mapRunId}`
}

export interface LabelledExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
  mapRunLabel: string
  executionId: string
}
export type LabelledExecutionArn = `arn:${string}:states:${string}:${string}:execution:${string}/${string}:${string}`
export function labelledExecutionArn(parameters: LabelledExecutionArnParameters): LabelledExecutionArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:execution:${parameters.stateMachineName}/${parameters.mapRunLabel}:${parameters.executionId}`
}

export interface LabelledExpressArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stateMachineName: string
  mapRunLabel: string
  executionId: string
  expressId: string
}
export type LabelledExpressArn = `arn:${string}:states:${string}:${string}:express:${string}/${string}:${string}:${string}`
export function labelledExpressArn(parameters: LabelledExpressArnParameters): LabelledExpressArn {
  return `arn:${parameters.partition ?? ''}:states:${parameters.region}:${parameters.account}:express:${parameters.stateMachineName}/${parameters.mapRunLabel}:${parameters.executionId}:${parameters.expressId}`
}