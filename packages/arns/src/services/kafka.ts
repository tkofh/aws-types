import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUu: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:kafka:${string}:${string}:cluster/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUu: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:cluster/${this.nameCluster}/${this.idUu}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface ConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfiguration: string
  readonly idUu: string
}
class ConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration',
  `arn:${string}:kafka:${string}:${string}:configuration/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfiguration: string
  readonly idUu: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfiguration = parameters.nameConfiguration
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:configuration/${this.nameConfiguration}/${this.idUu}` as const
  }
}
export type { ConfigurationArn }
export function configurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationArnParameters<Partition>,
) {
  return new ConfigurationArn<Partition>(parameters)
}

export interface ConnectionVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly accountOwnerVpc: string
  readonly accountOwnerCluster: string
  readonly nameCluster: string
  readonly idUu: string
}
class ConnectionVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-connection',
  `arn:${string}:kafka:${string}:${string}:vpc-connection/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-connection' as const
  readonly partition: string
  readonly region: string
  readonly accountOwnerVpc: string
  readonly accountOwnerCluster: string
  readonly nameCluster: string
  readonly idUu: string
  constructor(parameters: ConnectionVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.accountOwnerVpc = parameters.accountOwnerVpc
    this.accountOwnerCluster = parameters.accountOwnerCluster
    this.nameCluster = parameters.nameCluster
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.accountOwnerVpc}:vpc-connection/${this.accountOwnerCluster}/${this.nameCluster}/${this.idUu}` as const
  }
}
export type { ConnectionVpcArn }
export function connectionVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionVpcArnParameters<Partition>,
) {
  return new ConnectionVpcArn<Partition>(parameters)
}

export interface ReplicatorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReplicator: string
  readonly idUu: string
}
class ReplicatorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'replicator',
  `arn:${string}:kafka:${string}:${string}:replicator/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replicator' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReplicator: string
  readonly idUu: string
  constructor(parameters: ReplicatorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameReplicator = parameters.nameReplicator
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:replicator/${this.nameReplicator}/${this.idUu}` as const
  }
}
export type { ReplicatorArn }
export function replicatorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReplicatorArnParameters<Partition>,
) {
  return new ReplicatorArn<Partition>(parameters)
}

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUuCluster: string
  readonly nameTopic: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'topic',
  `arn:${string}:kafka:${string}:${string}:topic/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topic' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUuCluster: string
  readonly nameTopic: string
  constructor(parameters: TopicArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.idUuCluster = parameters.idUuCluster
    this.nameTopic = parameters.nameTopic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:topic/${this.nameCluster}/${this.idUuCluster}/${this.nameTopic}` as const
  }
}
export type { TopicArn }
export function topicArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicArnParameters<Partition>,
) {
  return new TopicArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUuCluster: string
  readonly nameGroup: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:kafka:${string}:${string}:group/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUuCluster: string
  readonly nameGroup: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.idUuCluster = parameters.idUuCluster
    this.nameGroup = parameters.nameGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:group/${this.nameCluster}/${this.idUuCluster}/${this.nameGroup}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface IdTransactionalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUuCluster: string
  readonly idTransactional: string
}
class IdTransactionalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transactional-id',
  `arn:${string}:kafka:${string}:${string}:transactional-id/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transactional-id' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUuCluster: string
  readonly idTransactional: string
  constructor(parameters: IdTransactionalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.idUuCluster = parameters.idUuCluster
    this.idTransactional = parameters.idTransactional
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:transactional-id/${this.nameCluster}/${this.idUuCluster}/${this.idTransactional}` as const
  }
}
export type { IdTransactionalArn }
export function idTransactionalArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdTransactionalArnParameters<Partition>,
) {
  return new IdTransactionalArn<Partition>(parameters)
}
