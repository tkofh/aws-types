export interface CollectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  collectionId: string
}
export type CollectionArn = `arn:${string}:aoss:${string}:${string}:collection/${string}`
export function collectionArn(parameters: CollectionArnParameters): CollectionArn {
  return `arn:${parameters.partition ?? ''}:aoss:${parameters.region}:${parameters.account}:collection/${parameters.collectionId}`
}

export interface DashboardsArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type DashboardsArn = `arn:${string}:aoss:${string}:${string}:dashboards/default`
export function dashboardsArn(parameters: DashboardsArnParameters): DashboardsArn {
  return `arn:${parameters.partition ?? ''}:aoss:${parameters.region}:${parameters.account}:dashboards/default`
}