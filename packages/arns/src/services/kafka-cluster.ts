export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  clusterUuid: string
}
export type ClusterArn = `arn:${string}:kafka:${string}:${string}:cluster/${string}/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.account}:cluster/${parameters.clusterName}/${parameters.clusterUuid}`
}

export interface TopicArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  clusterUuid: string
  topicName: string
}
export type TopicArn = `arn:${string}:kafka:${string}:${string}:topic/${string}/${string}/${string}`
export function topicArn(parameters: TopicArnParameters): TopicArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.account}:topic/${parameters.clusterName}/${parameters.clusterUuid}/${parameters.topicName}`
}

export interface GroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  clusterUuid: string
  groupName: string
}
export type GroupArn = `arn:${string}:kafka:${string}:${string}:group/${string}/${string}/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.account}:group/${parameters.clusterName}/${parameters.clusterUuid}/${parameters.groupName}`
}

export interface TransactionalIdArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  clusterUuid: string
  transactionalId: string
}
export type TransactionalIdArn = `arn:${string}:kafka:${string}:${string}:transactional-id/${string}/${string}/${string}`
export function transactionalIdArn(parameters: TransactionalIdArnParameters): TransactionalIdArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.account}:transactional-id/${parameters.clusterName}/${parameters.clusterUuid}/${parameters.transactionalId}`
}