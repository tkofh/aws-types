export interface ConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ConnectionArn = `arn:${string}:sqlworkbench:${string}:${string}:connection/${string}`
export function connectionArn(parameters: ConnectionArnParameters): ConnectionArn {
  return `arn:${parameters.partition ?? ''}:sqlworkbench:${parameters.region}:${parameters.account}:connection/${parameters.resourceId}`
}

export interface QueryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type QueryArn = `arn:${string}:sqlworkbench:${string}:${string}:query/${string}`
export function queryArn(parameters: QueryArnParameters): QueryArn {
  return `arn:${parameters.partition ?? ''}:sqlworkbench:${parameters.region}:${parameters.account}:query/${parameters.resourceId}`
}

export interface ChartArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ChartArn = `arn:${string}:sqlworkbench:${string}:${string}:chart/${string}`
export function chartArn(parameters: ChartArnParameters): ChartArn {
  return `arn:${parameters.partition ?? ''}:sqlworkbench:${parameters.region}:${parameters.account}:chart/${parameters.resourceId}`
}

export interface NotebookArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type NotebookArn = `arn:${string}:sqlworkbench:${string}:${string}:notebook/${string}`
export function notebookArn(parameters: NotebookArnParameters): NotebookArn {
  return `arn:${parameters.partition ?? ''}:sqlworkbench:${parameters.region}:${parameters.account}:notebook/${parameters.resourceId}`
}