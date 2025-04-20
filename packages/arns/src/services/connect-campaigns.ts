import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CampaignArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCampaign: string
}
class CampaignArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'campaign',
  `arn:${string}:connect-campaigns:${string}:${string}:campaign/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'campaign' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCampaign: string
  constructor(parameters: CampaignArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCampaign = parameters.idCampaign
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect-campaigns:${this.region}:${this.account}:campaign/${this.idCampaign}` as const
  }
}
export type { CampaignArn }
export function campaignArn<Partition extends ArnPartition = 'aws'>(
  parameters: CampaignArnParameters<Partition>,
) {
  return new CampaignArn<Partition>(parameters)
}
