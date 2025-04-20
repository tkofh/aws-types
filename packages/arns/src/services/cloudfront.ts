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
  readonly partition?: Partition | undefined
  readonly account: string
  readonly distributionId: string
}
class DistributionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'distribution',
  `arn:${string}:cloudfront::${string}:distribution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'distribution' as const
  readonly partition: Partition
  readonly account: string
  readonly distributionId: string
  constructor(parameters: DistributionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.distributionId = parameters.distributionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:distribution/${this.distributionId}` as const
  }
}
export type { DistributionArn }
export function distributionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DistributionArnParameters<Partition>,
) {
  return new DistributionArn<Partition>(parameters)
}

export interface StreamingDistributionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly distributionId: string
}
class StreamingDistributionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-distribution',
  `arn:${string}:cloudfront::${string}:streaming-distribution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-distribution' as const
  readonly partition: Partition
  readonly account: string
  readonly distributionId: string
  constructor(parameters: StreamingDistributionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.distributionId = parameters.distributionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:streaming-distribution/${this.distributionId}` as const
  }
}
export type { StreamingDistributionArn }
export function streamingDistributionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: StreamingDistributionArnParameters<Partition>) {
  return new StreamingDistributionArn<Partition>(parameters)
}

export interface OriginAccessIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class OriginAccessIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'origin-access-identity',
  `arn:${string}:cloudfront::${string}:origin-access-identity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'origin-access-identity' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: OriginAccessIdentityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:origin-access-identity/${this.id}` as const
  }
}
export type { OriginAccessIdentityArn }
export function originAccessIdentityArn<Partition extends ArnPartition = 'aws'>(
  parameters: OriginAccessIdentityArnParameters<Partition>,
) {
  return new OriginAccessIdentityArn<Partition>(parameters)
}

export interface FieldLevelEncryptionConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class FieldLevelEncryptionConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'field-level-encryption-config',
  `arn:${string}:cloudfront::${string}:field-level-encryption-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'field-level-encryption-config' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: FieldLevelEncryptionConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:field-level-encryption-config/${this.id}` as const
  }
}
export type { FieldLevelEncryptionConfigArn }
export function fieldLevelEncryptionConfigArn<
  Partition extends ArnPartition = 'aws',
>(parameters: FieldLevelEncryptionConfigArnParameters<Partition>) {
  return new FieldLevelEncryptionConfigArn<Partition>(parameters)
}

export interface FieldLevelEncryptionProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class FieldLevelEncryptionProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'field-level-encryption-profile',
  `arn:${string}:cloudfront::${string}:field-level-encryption-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'field-level-encryption-profile' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: FieldLevelEncryptionProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:field-level-encryption-profile/${this.id}` as const
  }
}
export type { FieldLevelEncryptionProfileArn }
export function fieldLevelEncryptionProfileArn<
  Partition extends ArnPartition = 'aws',
>(parameters: FieldLevelEncryptionProfileArnParameters<Partition>) {
  return new FieldLevelEncryptionProfileArn<Partition>(parameters)
}

export interface CachePolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class CachePolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cache-policy',
  `arn:${string}:cloudfront::${string}:cache-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cache-policy' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: CachePolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:cache-policy/${this.id}` as const
  }
}
export type { CachePolicyArn }
export function cachePolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: CachePolicyArnParameters<Partition>,
) {
  return new CachePolicyArn<Partition>(parameters)
}

export interface OriginRequestPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class OriginRequestPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'origin-request-policy',
  `arn:${string}:cloudfront::${string}:origin-request-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'origin-request-policy' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: OriginRequestPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:origin-request-policy/${this.id}` as const
  }
}
export type { OriginRequestPolicyArn }
export function originRequestPolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: OriginRequestPolicyArnParameters<Partition>,
) {
  return new OriginRequestPolicyArn<Partition>(parameters)
}

export interface RealtimeLogConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly name: string
}
class RealtimeLogConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'realtime-log-config',
  `arn:${string}:cloudfront::${string}:realtime-log-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'realtime-log-config' as const
  readonly partition: Partition
  readonly account: string
  readonly name: string
  constructor(parameters: RealtimeLogConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:realtime-log-config/${this.name}` as const
  }
}
export type { RealtimeLogConfigArn }
export function realtimeLogConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: RealtimeLogConfigArnParameters<Partition>,
) {
  return new RealtimeLogConfigArn<Partition>(parameters)
}

export interface FunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly name: string
}
class FunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'function',
  `arn:${string}:cloudfront::${string}:function/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function' as const
  readonly partition: Partition
  readonly account: string
  readonly name: string
  constructor(parameters: FunctionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface KeyValueStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly name: string
}
class KeyValueStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'key-value-store',
  `arn:${string}:cloudfront::${string}:key-value-store/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-value-store' as const
  readonly partition: Partition
  readonly account: string
  readonly name: string
  constructor(parameters: KeyValueStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:key-value-store/${this.name}` as const
  }
}
export type { KeyValueStoreArn }
export function keyValueStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyValueStoreArnParameters<Partition>,
) {
  return new KeyValueStoreArn<Partition>(parameters)
}

export interface ResponseHeadersPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class ResponseHeadersPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'response-headers-policy',
  `arn:${string}:cloudfront::${string}:response-headers-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'response-headers-policy' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: ResponseHeadersPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:response-headers-policy/${this.id}` as const
  }
}
export type { ResponseHeadersPolicyArn }
export function responseHeadersPolicyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResponseHeadersPolicyArnParameters<Partition>) {
  return new ResponseHeadersPolicyArn<Partition>(parameters)
}

export interface OriginAccessControlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class OriginAccessControlArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'origin-access-control',
  `arn:${string}:cloudfront::${string}:origin-access-control/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'origin-access-control' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: OriginAccessControlArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:origin-access-control/${this.id}` as const
  }
}
export type { OriginAccessControlArn }
export function originAccessControlArn<Partition extends ArnPartition = 'aws'>(
  parameters: OriginAccessControlArnParameters<Partition>,
) {
  return new OriginAccessControlArn<Partition>(parameters)
}

export interface ContinuousDeploymentPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly id: string
}
class ContinuousDeploymentPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'continuous-deployment-policy',
  `arn:${string}:cloudfront::${string}:continuous-deployment-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'continuous-deployment-policy' as const
  readonly partition: Partition
  readonly account: string
  readonly id: string
  constructor(parameters: ContinuousDeploymentPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:continuous-deployment-policy/${this.id}` as const
  }
}
export type { ContinuousDeploymentPolicyArn }
export function continuousDeploymentPolicyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ContinuousDeploymentPolicyArnParameters<Partition>) {
  return new ContinuousDeploymentPolicyArn<Partition>(parameters)
}
