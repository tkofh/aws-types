export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  uuid: string
}
export type ClusterArn = `arn:${string}:kafka:${string}:${string}:cluster/${string}/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.account}:cluster/${parameters.clusterName}/${parameters.uuid}`
}

export interface ConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configurationName: string
  uuid: string
}
export type ConfigurationArn = `arn:${string}:kafka:${string}:${string}:configuration/${string}/${string}`
export function configurationArn(parameters: ConfigurationArnParameters): ConfigurationArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.account}:configuration/${parameters.configurationName}/${parameters.uuid}`
}

export interface VpcConnectionArnParameters {
  partition?: string | undefined
  region: string
  vpcOwnerAccount: string
  clusterOwnerAccount: string
  clusterName: string
  uuid: string
}
export type VpcConnectionArn = `arn:${string}:kafka:${string}:${string}:vpc-connection/${string}/${string}/${string}`
export function vpcConnectionArn(parameters: VpcConnectionArnParameters): VpcConnectionArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.vpcOwnerAccount}:vpc-connection/${parameters.clusterOwnerAccount}/${parameters.clusterName}/${parameters.uuid}`
}

export interface ReplicatorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  replicatorName: string
  uuid: string
}
export type ReplicatorArn = `arn:${string}:kafka:${string}:${string}:replicator/${string}/${string}`
export function replicatorArn(parameters: ReplicatorArnParameters): ReplicatorArn {
  return `arn:${parameters.partition ?? ''}:kafka:${parameters.region}:${parameters.account}:replicator/${parameters.replicatorName}/${parameters.uuid}`
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