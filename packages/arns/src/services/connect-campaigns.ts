export interface CampaignArnParameters {
  partition?: string | undefined
  region: string
  account: string
  campaignId: string
}
export type CampaignArn = `arn:${string}:connect-campaigns:${string}:${string}:campaign/${string}`
export function campaignArn(parameters: CampaignArnParameters): CampaignArn {
  return `arn:${parameters.partition ?? ''}:connect-campaigns:${parameters.region}:${parameters.account}:campaign/${parameters.campaignId}`
}