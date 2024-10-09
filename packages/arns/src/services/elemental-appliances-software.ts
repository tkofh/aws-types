export interface QuoteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type QuoteArn = `arn:${string}:elemental-appliances-software:${string}:${string}:quote/${string}`
export function quoteArn(parameters: QuoteArnParameters): QuoteArn {
  return `arn:${parameters.partition ?? ''}:elemental-appliances-software:${parameters.region}:${parameters.account}:quote/${parameters.resourceId}`
}