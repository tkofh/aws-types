import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PlanResponseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly planResponse: string
}
class PlanResponseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'response-plan',
  `arn:${string}:ssm-incidents::${string}:response-plan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'response-plan' as const
  readonly partition: string
  readonly account: string
  readonly planResponse: string
  constructor(parameters: PlanResponseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.planResponse = parameters.planResponse
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-incidents::${this.account}:response-plan/${this.planResponse}` as const
  }
}
export type { PlanResponseArn }
export function planResponseArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanResponseArnParameters<Partition>,
) {
  return new PlanResponseArn<Partition>(parameters)
}

export interface RecordIncidentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly planResponse: string
  readonly recordIncident: string
}
class RecordIncidentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'incident-record',
  `arn:${string}:ssm-incidents::${string}:incident-record/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'incident-record' as const
  readonly partition: string
  readonly account: string
  readonly planResponse: string
  readonly recordIncident: string
  constructor(parameters: RecordIncidentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.planResponse = parameters.planResponse
    this.recordIncident = parameters.recordIncident
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-incidents::${this.account}:incident-record/${this.planResponse}/${this.recordIncident}` as const
  }
}
export type { RecordIncidentArn }
export function recordIncidentArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecordIncidentArnParameters<Partition>,
) {
  return new RecordIncidentArn<Partition>(parameters)
}

export interface SetReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly setReplication: string
}
class SetReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'replication-set',
  `arn:${string}:ssm-incidents::${string}:replication-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replication-set' as const
  readonly partition: string
  readonly account: string
  readonly setReplication: string
  constructor(parameters: SetReplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.setReplication = parameters.setReplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-incidents::${this.account}:replication-set/${this.setReplication}` as const
  }
}
export type { SetReplicationArn }
export function setReplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetReplicationArnParameters<Partition>,
) {
  return new SetReplicationArn<Partition>(parameters)
}
