import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idAccount: string
  readonly idInstance: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Application',
  `arn:${string}:sso::${string}:application/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Application' as const
  readonly partition: string
  readonly idAccount: string
  readonly idInstance: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idAccount = parameters.idAccount
    this.idInstance = parameters.idInstance
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso::${this.idAccount}:application/${this.idInstance}/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}
