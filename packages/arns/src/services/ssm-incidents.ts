import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResponsePlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly responsePlan: string
}
class ResponsePlanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'response-plan',
  `arn:${string}:ssm-incidents::${string}:response-plan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'response-plan' as const
  readonly partition: Partition
  readonly account: string
  readonly responsePlan: string
  constructor(parameters: ResponsePlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.responsePlan = parameters.responsePlan
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-incidents::${this.account}:response-plan/${this.responsePlan}` as const
  }
}
export type { ResponsePlanArn }
export function responsePlanArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponsePlanArnParameters<Partition>,
) {
  return new ResponsePlanArn<Partition>(parameters)
}

export interface IncidentRecordArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly responsePlan: string
  readonly incidentRecord: string
}
class IncidentRecordArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'incident-record',
  `arn:${string}:ssm-incidents::${string}:incident-record/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'incident-record' as const
  readonly partition: Partition
  readonly account: string
  readonly responsePlan: string
  readonly incidentRecord: string
  constructor(parameters: IncidentRecordArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.responsePlan = parameters.responsePlan
    this.incidentRecord = parameters.incidentRecord
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-incidents::${this.account}:incident-record/${this.responsePlan}/${this.incidentRecord}` as const
  }
}
export type { IncidentRecordArn }
export function incidentRecordArn<Partition extends ArnPartition = 'aws'>(
  parameters: IncidentRecordArnParameters<Partition>,
) {
  return new IncidentRecordArn<Partition>(parameters)
}

export interface ReplicationSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly replicationSet: string
}
class ReplicationSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'replication-set',
  `arn:${string}:ssm-incidents::${string}:replication-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replication-set' as const
  readonly partition: Partition
  readonly account: string
  readonly replicationSet: string
  constructor(parameters: ReplicationSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.replicationSet = parameters.replicationSet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-incidents::${this.account}:replication-set/${this.replicationSet}` as const
  }
}
export type { ReplicationSetArn }
export function replicationSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReplicationSetArnParameters<Partition>,
) {
  return new ReplicationSetArn<Partition>(parameters)
}
