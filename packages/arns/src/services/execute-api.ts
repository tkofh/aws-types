import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ExecuteApiGeneralArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly apiId: string
  readonly stage: string
  readonly method: string
  readonly apiSpecificResourcePath: string
}
class ExecuteApiGeneralArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'execute-api-general', `arn:${string}:execute-api:${string}:${string}:${string}/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'execute-api-general' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly apiId: string
  readonly stage: string
  readonly method: string
  readonly apiSpecificResourcePath: string
  constructor(parameters: ExecuteApiGeneralArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.apiId = parameters.apiId
    this.stage = parameters.stage
    this.method = parameters.method
    this.apiSpecificResourcePath = parameters.apiSpecificResourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:execute-api:${this.region}:${this.account}:${this.apiId}/${this.stage}/${this.method}/${this.apiSpecificResourcePath}` as const
  }
}
export type { ExecuteApiGeneralArn }
export function executeApiGeneralArn<Partition extends ArnPartition = 'aws'>(parameters: ExecuteApiGeneralArnParameters<Partition>) {
  return new ExecuteApiGeneralArn<Partition>(parameters)
}