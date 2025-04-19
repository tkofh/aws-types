import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly uuid: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:kafka:${string}:${string}:cluster/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly uuid: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:cluster/${this.clusterName}/${this.uuid}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationName: string
  readonly uuid: string
}
class ConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration',
  `arn:${string}:kafka:${string}:${string}:configuration/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationName: string
  readonly uuid: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configurationName = parameters.configurationName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:configuration/${this.configurationName}/${this.uuid}` as const
  }
}
export type { ConfigurationArn }
export function configurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationArnParameters<Partition>,
) {
  return new ConfigurationArn<Partition>(parameters)
}

export interface VpcConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly vpcOwnerAccount: string
  readonly clusterOwnerAccount: string
  readonly clusterName: string
  readonly uuid: string
}
class VpcConnectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-connection',
  `arn:${string}:kafka:${string}:${string}:vpc-connection/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly vpcOwnerAccount: string
  readonly clusterOwnerAccount: string
  readonly clusterName: string
  readonly uuid: string
  constructor(parameters: VpcConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.vpcOwnerAccount = parameters.vpcOwnerAccount
    this.clusterOwnerAccount = parameters.clusterOwnerAccount
    this.clusterName = parameters.clusterName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.vpcOwnerAccount}:vpc-connection/${this.clusterOwnerAccount}/${this.clusterName}/${this.uuid}` as const
  }
}
export type { VpcConnectionArn }
export function vpcConnectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcConnectionArnParameters<Partition>,
) {
  return new VpcConnectionArn<Partition>(parameters)
}

export interface ReplicatorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicatorName: string
  readonly uuid: string
}
class ReplicatorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'replicator',
  `arn:${string}:kafka:${string}:${string}:replicator/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replicator' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicatorName: string
  readonly uuid: string
  constructor(parameters: ReplicatorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.replicatorName = parameters.replicatorName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:replicator/${this.replicatorName}/${this.uuid}` as const
  }
}
export type { ReplicatorArn }
export function replicatorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReplicatorArnParameters<Partition>,
) {
  return new ReplicatorArn<Partition>(parameters)
}

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly clusterUuid: string
  readonly topicName: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'topic',
  `arn:${string}:kafka:${string}:${string}:topic/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topic' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly clusterUuid: string
  readonly topicName: string
  constructor(parameters: TopicArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.clusterUuid = parameters.clusterUuid
    this.topicName = parameters.topicName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:topic/${this.clusterName}/${this.clusterUuid}/${this.topicName}` as const
  }
}
export type { TopicArn }
export function topicArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicArnParameters<Partition>,
) {
  return new TopicArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly clusterUuid: string
  readonly groupName: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:kafka:${string}:${string}:group/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly clusterUuid: string
  readonly groupName: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.clusterUuid = parameters.clusterUuid
    this.groupName = parameters.groupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:group/${this.clusterName}/${this.clusterUuid}/${this.groupName}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface TransactionalIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly clusterUuid: string
  readonly transactionalId: string
}
class TransactionalIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transactional-id',
  `arn:${string}:kafka:${string}:${string}:transactional-id/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transactional-id' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly clusterUuid: string
  readonly transactionalId: string
  constructor(parameters: TransactionalIdArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.clusterUuid = parameters.clusterUuid
    this.transactionalId = parameters.transactionalId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafka:${this.region}:${this.account}:transactional-id/${this.clusterName}/${this.clusterUuid}/${this.transactionalId}` as const
  }
}
export type { TransactionalIdArn }
export function transactionalIdArn<Partition extends ArnPartition = 'aws'>(
  parameters: TransactionalIdArnParameters<Partition>,
) {
  return new TransactionalIdArn<Partition>(parameters)
}
