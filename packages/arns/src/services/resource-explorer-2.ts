export interface ViewArnParameters {
  partition?: string | undefined
  region: string
  account: string
  viewName: string
  viewUuid: string
}
export type ViewArn = `arn:${string}:resource-explorer-2:${string}:${string}:view/${string}/${string}`
export function viewArn(parameters: ViewArnParameters): ViewArn {
  return `arn:${parameters.partition ?? ''}:resource-explorer-2:${parameters.region}:${parameters.account}:view/${parameters.viewName}/${parameters.viewUuid}`
}

export interface IndexArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexUuid: string
}
export type IndexArn = `arn:${string}:resource-explorer-2:${string}:${string}:index/${string}`
export function indexArn(parameters: IndexArnParameters): IndexArn {
  return `arn:${parameters.partition ?? ''}:resource-explorer-2:${parameters.region}:${parameters.account}:index/${parameters.indexUuid}`
}