import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CollectionCidrArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly id: string
}
class CollectionCidrArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cidrcollection',
  `arn:${string}:route53:::cidrcollection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cidrcollection' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: CollectionCidrArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::cidrcollection/${this.id}` as const
  }
}
export type { CollectionCidrArn }
export function collectionCidrArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollectionCidrArnParameters<Partition>,
) {
  return new CollectionCidrArn<Partition>(parameters)
}

export interface ChangeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly id: string
}
class ChangeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'change',
  `arn:${string}:route53:::change/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'change' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: ChangeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::change/${this.id}` as const
  }
}
export type { ChangeArn }
export function changeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChangeArnParameters<Partition>,
) {
  return new ChangeArn<Partition>(parameters)
}

export interface SetDelegationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly id: string
}
class SetDelegationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'delegationset',
  `arn:${string}:route53:::delegationset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'delegationset' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: SetDelegationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::delegationset/${this.id}` as const
  }
}
export type { SetDelegationArn }
export function setDelegationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDelegationArnParameters<Partition>,
) {
  return new SetDelegationArn<Partition>(parameters)
}

export interface CheckHealthArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly id: string
}
class CheckHealthArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'healthcheck',
  `arn:${string}:route53:::healthcheck/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'healthcheck' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: CheckHealthArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::healthcheck/${this.id}` as const
  }
}
export type { CheckHealthArn }
export function checkHealthArn<Partition extends ArnPartition = 'aws'>(
  parameters: CheckHealthArnParameters<Partition>,
) {
  return new CheckHealthArn<Partition>(parameters)
}

export interface ZoneHostedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly id: string
}
class ZoneHostedArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hostedzone',
  `arn:${string}:route53:::hostedzone/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hostedzone' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: ZoneHostedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::hostedzone/${this.id}` as const
  }
}
export type { ZoneHostedArn }
export function zoneHostedArn<Partition extends ArnPartition = 'aws'>(
  parameters: ZoneHostedArnParameters<Partition>,
) {
  return new ZoneHostedArn<Partition>(parameters)
}

export interface PolicyTrafficArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly id: string
}
class PolicyTrafficArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trafficpolicy',
  `arn:${string}:route53:::trafficpolicy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trafficpolicy' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: PolicyTrafficArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::trafficpolicy/${this.id}` as const
  }
}
export type { PolicyTrafficArn }
export function policyTrafficArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyTrafficArnParameters<Partition>,
) {
  return new PolicyTrafficArn<Partition>(parameters)
}

export interface InstancePolicyTrafficArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly id: string
}
class InstancePolicyTrafficArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trafficpolicyinstance',
  `arn:${string}:route53:::trafficpolicyinstance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trafficpolicyinstance' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: InstancePolicyTrafficArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::trafficpolicyinstance/${this.id}` as const
  }
}
export type { InstancePolicyTrafficArn }
export function instancePolicyTrafficArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InstancePolicyTrafficArnParameters<Partition>) {
  return new InstancePolicyTrafficArn<Partition>(parameters)
}

export interface ConfigLoggingQueryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly id: string
}
class ConfigLoggingQueryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'queryloggingconfig',
  `arn:${string}:route53:::queryloggingconfig/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queryloggingconfig' as const
  readonly partition: string
  readonly id: string
  constructor(parameters: ConfigLoggingQueryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::queryloggingconfig/${this.id}` as const
  }
}
export type { ConfigLoggingQueryArn }
export function configLoggingQueryArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigLoggingQueryArnParameters<Partition>,
) {
  return new ConfigLoggingQueryArn<Partition>(parameters)
}

export interface VpcArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVpc: string
}
class VpcArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpc',
  `arn:${string}:ec2:${string}:${string}:vpc/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVpc: string
  constructor(parameters: VpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idVpc = parameters.idVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc/${this.idVpc}` as const
  }
}
export type { VpcArn }
export function vpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcArnParameters<Partition>,
) {
  return new VpcArn<Partition>(parameters)
}
