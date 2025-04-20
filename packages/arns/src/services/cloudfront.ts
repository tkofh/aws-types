import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DistributionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idDistribution: string
}
class DistributionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'distribution',
  `arn:${string}:cloudfront::${string}:distribution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'distribution' as const
  readonly partition: string
  readonly account: string
  readonly idDistribution: string
  constructor(parameters: DistributionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idDistribution = parameters.idDistribution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:distribution/${this.idDistribution}` as const
  }
}
export type { DistributionArn }
export function distributionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DistributionArnParameters<Partition>,
) {
  return new DistributionArn<Partition>(parameters)
}

export interface DistributionStreamingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idDistribution: string
}
class DistributionStreamingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-distribution',
  `arn:${string}:cloudfront::${string}:streaming-distribution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-distribution' as const
  readonly partition: string
  readonly account: string
  readonly idDistribution: string
  constructor(parameters: DistributionStreamingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idDistribution = parameters.idDistribution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:streaming-distribution/${this.idDistribution}` as const
  }
}
export type { DistributionStreamingArn }
export function distributionStreamingArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DistributionStreamingArnParameters<Partition>) {
  return new DistributionStreamingArn<Partition>(parameters)
}

export interface IdentityAccessOriginArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class IdentityAccessOriginArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'origin-access-identity',
  `arn:${string}:cloudfront::${string}:origin-access-identity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'origin-access-identity' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: IdentityAccessOriginArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:origin-access-identity/${this.id}` as const
  }
}
export type { IdentityAccessOriginArn }
export function identityAccessOriginArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityAccessOriginArnParameters<Partition>,
) {
  return new IdentityAccessOriginArn<Partition>(parameters)
}

export interface ConfigEncryptionLevelFieldArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class ConfigEncryptionLevelFieldArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'field-level-encryption-config',
  `arn:${string}:cloudfront::${string}:field-level-encryption-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'field-level-encryption-config' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: ConfigEncryptionLevelFieldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:field-level-encryption-config/${this.id}` as const
  }
}
export type { ConfigEncryptionLevelFieldArn }
export function configEncryptionLevelFieldArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigEncryptionLevelFieldArnParameters<Partition>) {
  return new ConfigEncryptionLevelFieldArn<Partition>(parameters)
}

export interface ProfileEncryptionLevelFieldArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class ProfileEncryptionLevelFieldArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'field-level-encryption-profile',
  `arn:${string}:cloudfront::${string}:field-level-encryption-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'field-level-encryption-profile' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: ProfileEncryptionLevelFieldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:field-level-encryption-profile/${this.id}` as const
  }
}
export type { ProfileEncryptionLevelFieldArn }
export function profileEncryptionLevelFieldArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ProfileEncryptionLevelFieldArnParameters<Partition>) {
  return new ProfileEncryptionLevelFieldArn<Partition>(parameters)
}

export interface PolicyCacheArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class PolicyCacheArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cache-policy',
  `arn:${string}:cloudfront::${string}:cache-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cache-policy' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: PolicyCacheArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:cache-policy/${this.id}` as const
  }
}
export type { PolicyCacheArn }
export function policyCacheArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyCacheArnParameters<Partition>,
) {
  return new PolicyCacheArn<Partition>(parameters)
}

export interface PolicyRequestOriginArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class PolicyRequestOriginArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'origin-request-policy',
  `arn:${string}:cloudfront::${string}:origin-request-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'origin-request-policy' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: PolicyRequestOriginArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:origin-request-policy/${this.id}` as const
  }
}
export type { PolicyRequestOriginArn }
export function policyRequestOriginArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyRequestOriginArnParameters<Partition>,
) {
  return new PolicyRequestOriginArn<Partition>(parameters)
}

export interface ConfigLogRealtimeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly name: string
}
class ConfigLogRealtimeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'realtime-log-config',
  `arn:${string}:cloudfront::${string}:realtime-log-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'realtime-log-config' as const
  readonly partition: string
  readonly account: string
  readonly name: string
  constructor(parameters: ConfigLogRealtimeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:realtime-log-config/${this.name}` as const
  }
}
export type { ConfigLogRealtimeArn }
export function configLogRealtimeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigLogRealtimeArnParameters<Partition>,
) {
  return new ConfigLogRealtimeArn<Partition>(parameters)
}

export interface FunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly name: string
}
class FunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'function',
  `arn:${string}:cloudfront::${string}:function/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function' as const
  readonly partition: string
  readonly account: string
  readonly name: string
  constructor(parameters: FunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:function/${this.name}` as const
  }
}
export type { FunctionArn }
export function functionArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionArnParameters<Partition>,
) {
  return new FunctionArn<Partition>(parameters)
}

export interface StoreValueKeyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly name: string
}
class StoreValueKeyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'key-value-store',
  `arn:${string}:cloudfront::${string}:key-value-store/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-value-store' as const
  readonly partition: string
  readonly account: string
  readonly name: string
  constructor(parameters: StoreValueKeyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:key-value-store/${this.name}` as const
  }
}
export type { StoreValueKeyArn }
export function storeValueKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreValueKeyArnParameters<Partition>,
) {
  return new StoreValueKeyArn<Partition>(parameters)
}

export interface PolicyHeadersResponseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class PolicyHeadersResponseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'response-headers-policy',
  `arn:${string}:cloudfront::${string}:response-headers-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'response-headers-policy' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: PolicyHeadersResponseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:response-headers-policy/${this.id}` as const
  }
}
export type { PolicyHeadersResponseArn }
export function policyHeadersResponseArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PolicyHeadersResponseArnParameters<Partition>) {
  return new PolicyHeadersResponseArn<Partition>(parameters)
}

export interface ControlAccessOriginArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class ControlAccessOriginArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'origin-access-control',
  `arn:${string}:cloudfront::${string}:origin-access-control/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'origin-access-control' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: ControlAccessOriginArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:origin-access-control/${this.id}` as const
  }
}
export type { ControlAccessOriginArn }
export function controlAccessOriginArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlAccessOriginArnParameters<Partition>,
) {
  return new ControlAccessOriginArn<Partition>(parameters)
}

export interface PolicyDeploymentContinuousArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class PolicyDeploymentContinuousArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'continuous-deployment-policy',
  `arn:${string}:cloudfront::${string}:continuous-deployment-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'continuous-deployment-policy' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: PolicyDeploymentContinuousArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:continuous-deployment-policy/${this.id}` as const
  }
}
export type { PolicyDeploymentContinuousArn }
export function policyDeploymentContinuousArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PolicyDeploymentContinuousArnParameters<Partition>) {
  return new PolicyDeploymentContinuousArn<Partition>(parameters)
}
