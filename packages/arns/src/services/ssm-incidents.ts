export interface ResponsePlanArnParameters {
  partition?: string | undefined
  account: string
  responsePlan: string
}
export type ResponsePlanArn = `arn:${string}:ssm-incidents::${string}:response-plan/${string}`
export function responsePlanArn(parameters: ResponsePlanArnParameters): ResponsePlanArn {
  return `arn:${parameters.partition ?? ''}:ssm-incidents::${parameters.account}:response-plan/${parameters.responsePlan}`
}

export interface IncidentRecordArnParameters {
  partition?: string | undefined
  account: string
  responsePlan: string
  incidentRecord: string
}
export type IncidentRecordArn = `arn:${string}:ssm-incidents::${string}:incident-record/${string}/${string}`
export function incidentRecordArn(parameters: IncidentRecordArnParameters): IncidentRecordArn {
  return `arn:${parameters.partition ?? ''}:ssm-incidents::${parameters.account}:incident-record/${parameters.responsePlan}/${parameters.incidentRecord}`
}

export interface ReplicationSetArnParameters {
  partition?: string | undefined
  account: string
  replicationSet: string
}
export type ReplicationSetArn = `arn:${string}:ssm-incidents::${string}:replication-set/${string}`
export function replicationSetArn(parameters: ReplicationSetArnParameters): ReplicationSetArn {
  return `arn:${parameters.partition ?? ''}:ssm-incidents::${parameters.account}:replication-set/${parameters.replicationSet}`
}