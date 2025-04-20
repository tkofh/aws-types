import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CodeSigningConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly codeSigningConfigId: string
}
class CodeSigningConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'code signing config',
  `arn:${string}:lambda:${string}:${string}:code-signing-config:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'code signing config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly codeSigningConfigId: string
  constructor(parameters: CodeSigningConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.codeSigningConfigId = parameters.codeSigningConfigId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:code-signing-config:${this.codeSigningConfigId}` as const
  }
}
export type { CodeSigningConfigArn }
export function codeSigningConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: CodeSigningConfigArnParameters<Partition>,
) {
  return new CodeSigningConfigArn<Partition>(parameters)
}

export interface EventSourceMappingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly uuId: string
}
class EventSourceMappingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventSourceMapping',
  `arn:${string}:lambda:${string}:${string}:event-source-mapping:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventSourceMapping' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly uuId: string
  constructor(parameters: EventSourceMappingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:event-source-mapping:${this.uuId}` as const
  }
}
export type { EventSourceMappingArn }
export function eventSourceMappingArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventSourceMappingArnParameters<Partition>,
) {
  return new EventSourceMappingArn<Partition>(parameters)
}

export interface FunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionName: string
}
class FunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'function',
  `arn:${string}:lambda:${string}:${string}:function:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionName: string
  constructor(parameters: FunctionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.functionName = parameters.functionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:function:${this.functionName}` as const
  }
}
export type { FunctionArn }
export function functionArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionArnParameters<Partition>,
) {
  return new FunctionArn<Partition>(parameters)
}

export interface FunctionAliasArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionName: string
  readonly alias: string
}
class FunctionAliasArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'function alias',
  `arn:${string}:lambda:${string}:${string}:function:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function alias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionName: string
  readonly alias: string
  constructor(parameters: FunctionAliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.functionName = parameters.functionName
    this.alias = parameters.alias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:function:${this.functionName}:${this.alias}` as const
  }
}
export type { FunctionAliasArn }
export function functionAliasArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionAliasArnParameters<Partition>,
) {
  return new FunctionAliasArn<Partition>(parameters)
}

export interface FunctionVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionName: string
  readonly version: string
}
class FunctionVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'function version',
  `arn:${string}:lambda:${string}:${string}:function:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionName: string
  readonly version: string
  constructor(parameters: FunctionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.functionName = parameters.functionName
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:function:${this.functionName}:${this.version}` as const
  }
}
export type { FunctionVersionArn }
export function functionVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionVersionArnParameters<Partition>,
) {
  return new FunctionVersionArn<Partition>(parameters)
}

export interface LayerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly layerName: string
}
class LayerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'layer',
  `arn:${string}:lambda:${string}:${string}:layer:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'layer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly layerName: string
  constructor(parameters: LayerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.layerName = parameters.layerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:layer:${this.layerName}` as const
  }
}
export type { LayerArn }
export function layerArn<Partition extends ArnPartition = 'aws'>(
  parameters: LayerArnParameters<Partition>,
) {
  return new LayerArn<Partition>(parameters)
}

export interface LayerVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly layerName: string
  readonly layerVersion: string
}
class LayerVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'layerVersion',
  `arn:${string}:lambda:${string}:${string}:layer:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'layerVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly layerName: string
  readonly layerVersion: string
  constructor(parameters: LayerVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.layerName = parameters.layerName
    this.layerVersion = parameters.layerVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:layer:${this.layerName}:${this.layerVersion}` as const
  }
}
export type { LayerVersionArn }
export function layerVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: LayerVersionArnParameters<Partition>,
) {
  return new LayerVersionArn<Partition>(parameters)
}
