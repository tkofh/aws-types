export interface AnomalysubscriptionArnParameters {
  partition?: string | undefined
  account: string
  identifier: string
}
export type AnomalysubscriptionArn = `arn:${string}:ce::${string}:anomalysubscription/${string}`
export function anomalysubscriptionArn(parameters: AnomalysubscriptionArnParameters): AnomalysubscriptionArn {
  return `arn:${parameters.partition ?? ''}:ce::${parameters.account}:anomalysubscription/${parameters.identifier}`
}

export interface AnomalymonitorArnParameters {
  partition?: string | undefined
  account: string
  identifier: string
}
export type AnomalymonitorArn = `arn:${string}:ce::${string}:anomalymonitor/${string}`
export function anomalymonitorArn(parameters: AnomalymonitorArnParameters): AnomalymonitorArn {
  return `arn:${parameters.partition ?? ''}:ce::${parameters.account}:anomalymonitor/${parameters.identifier}`
}

export interface CostcategoryArnParameters {
  partition?: string | undefined
  account: string
  identifier: string
}
export type CostcategoryArn = `arn:${string}:ce::${string}:costcategory/${string}`
export function costcategoryArn(parameters: CostcategoryArnParameters): CostcategoryArn {
  return `arn:${parameters.partition ?? ''}:ce::${parameters.account}:costcategory/${parameters.identifier}`
}