export interface DistributionArnParameters {
  partition?: string | undefined
  account: string
  distributionId: string
}
export type DistributionArn = `arn:${string}:cloudfront::${string}:distribution/${string}`
export function distributionArn(parameters: DistributionArnParameters): DistributionArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:distribution/${parameters.distributionId}`
}

export interface StreamingDistributionArnParameters {
  partition?: string | undefined
  account: string
  distributionId: string
}
export type StreamingDistributionArn = `arn:${string}:cloudfront::${string}:streaming-distribution/${string}`
export function streamingDistributionArn(parameters: StreamingDistributionArnParameters): StreamingDistributionArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:streaming-distribution/${parameters.distributionId}`
}

export interface OriginAccessIdentityArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type OriginAccessIdentityArn = `arn:${string}:cloudfront::${string}:origin-access-identity/${string}`
export function originAccessIdentityArn(parameters: OriginAccessIdentityArnParameters): OriginAccessIdentityArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:origin-access-identity/${parameters.id}`
}

export interface FieldLevelEncryptionConfigArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type FieldLevelEncryptionConfigArn = `arn:${string}:cloudfront::${string}:field-level-encryption-config/${string}`
export function fieldLevelEncryptionConfigArn(parameters: FieldLevelEncryptionConfigArnParameters): FieldLevelEncryptionConfigArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:field-level-encryption-config/${parameters.id}`
}

export interface FieldLevelEncryptionProfileArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type FieldLevelEncryptionProfileArn = `arn:${string}:cloudfront::${string}:field-level-encryption-profile/${string}`
export function fieldLevelEncryptionProfileArn(parameters: FieldLevelEncryptionProfileArnParameters): FieldLevelEncryptionProfileArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:field-level-encryption-profile/${parameters.id}`
}

export interface CachePolicyArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type CachePolicyArn = `arn:${string}:cloudfront::${string}:cache-policy/${string}`
export function cachePolicyArn(parameters: CachePolicyArnParameters): CachePolicyArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:cache-policy/${parameters.id}`
}

export interface OriginRequestPolicyArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type OriginRequestPolicyArn = `arn:${string}:cloudfront::${string}:origin-request-policy/${string}`
export function originRequestPolicyArn(parameters: OriginRequestPolicyArnParameters): OriginRequestPolicyArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:origin-request-policy/${parameters.id}`
}

export interface RealtimeLogConfigArnParameters {
  partition?: string | undefined
  account: string
  name: string
}
export type RealtimeLogConfigArn = `arn:${string}:cloudfront::${string}:realtime-log-config/${string}`
export function realtimeLogConfigArn(parameters: RealtimeLogConfigArnParameters): RealtimeLogConfigArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:realtime-log-config/${parameters.name}`
}

export interface FunctionArnParameters {
  partition?: string | undefined
  account: string
  name: string
}
export type FunctionArn = `arn:${string}:cloudfront::${string}:function/${string}`
export function functionArn(parameters: FunctionArnParameters): FunctionArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:function/${parameters.name}`
}

export interface KeyValueStoreArnParameters {
  partition?: string | undefined
  account: string
  name: string
}
export type KeyValueStoreArn = `arn:${string}:cloudfront::${string}:key-value-store/${string}`
export function keyValueStoreArn(parameters: KeyValueStoreArnParameters): KeyValueStoreArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:key-value-store/${parameters.name}`
}

export interface ResponseHeadersPolicyArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type ResponseHeadersPolicyArn = `arn:${string}:cloudfront::${string}:response-headers-policy/${string}`
export function responseHeadersPolicyArn(parameters: ResponseHeadersPolicyArnParameters): ResponseHeadersPolicyArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:response-headers-policy/${parameters.id}`
}

export interface OriginAccessControlArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type OriginAccessControlArn = `arn:${string}:cloudfront::${string}:origin-access-control/${string}`
export function originAccessControlArn(parameters: OriginAccessControlArnParameters): OriginAccessControlArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:origin-access-control/${parameters.id}`
}

export interface ContinuousDeploymentPolicyArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type ContinuousDeploymentPolicyArn = `arn:${string}:cloudfront::${string}:continuous-deployment-policy/${string}`
export function continuousDeploymentPolicyArn(parameters: ContinuousDeploymentPolicyArnParameters): ContinuousDeploymentPolicyArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:continuous-deployment-policy/${parameters.id}`
}