import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GeneralApiExecuteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApi: string
  readonly stage: string
  readonly method: string
  readonly pathResourceSpecificApi: string
}
class GeneralApiExecuteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'execute-api-general',
  `arn:${string}:execute-api:${string}:${string}:${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'execute-api-general' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApi: string
  readonly stage: string
  readonly method: string
  readonly pathResourceSpecificApi: string
  constructor(parameters: GeneralApiExecuteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApi = parameters.idApi
    this.stage = parameters.stage
    this.method = parameters.method
    this.pathResourceSpecificApi = parameters.pathResourceSpecificApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:execute-api:${this.region}:${this.account}:${this.idApi}/${this.stage}/${this.method}/${this.pathResourceSpecificApi}` as const
  }
}
export type { GeneralApiExecuteArn }
export function generalApiExecuteArn<Partition extends ArnPartition = 'aws'>(
  parameters: GeneralApiExecuteArnParameters<Partition>,
) {
  return new GeneralApiExecuteArn<Partition>(parameters)
}
