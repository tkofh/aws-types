import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigSigningCodeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigSigningCode: string
}
class ConfigSigningCodeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'code signing config',
  `arn:${string}:lambda:${string}:${string}:code-signing-config:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'code signing config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigSigningCode: string
  constructor(parameters: ConfigSigningCodeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigSigningCode = parameters.idConfigSigningCode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:code-signing-config:${this.idConfigSigningCode}` as const
  }
}
export type { ConfigSigningCodeArn }
export function configSigningCodeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigSigningCodeArnParameters<Partition>,
) {
  return new ConfigSigningCodeArn<Partition>(parameters)
}

export interface MappingSourceEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUu: string
}
class MappingSourceEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventSourceMapping',
  `arn:${string}:lambda:${string}:${string}:event-source-mapping:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventSourceMapping' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUu: string
  constructor(parameters: MappingSourceEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:event-source-mapping:${this.idUu}` as const
  }
}
export type { MappingSourceEventArn }
export function mappingSourceEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: MappingSourceEventArnParameters<Partition>,
) {
  return new MappingSourceEventArn<Partition>(parameters)
}

export interface FunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFunction: string
}
class FunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'function',
  `arn:${string}:lambda:${string}:${string}:function:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFunction: string
  constructor(parameters: FunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFunction = parameters.nameFunction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:function:${this.nameFunction}` as const
  }
}
export type { FunctionArn }
export function functionArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionArnParameters<Partition>,
) {
  return new FunctionArn<Partition>(parameters)
}

export interface AliasFunctionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFunction: string
  readonly alias: string
}
class AliasFunctionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'function alias',
  `arn:${string}:lambda:${string}:${string}:function:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function alias' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFunction: string
  readonly alias: string
  constructor(parameters: AliasFunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFunction = parameters.nameFunction
    this.alias = parameters.alias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:function:${this.nameFunction}:${this.alias}` as const
  }
}
export type { AliasFunctionArn }
export function aliasFunctionArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasFunctionArnParameters<Partition>,
) {
  return new AliasFunctionArn<Partition>(parameters)
}

export interface VersionFunctionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFunction: string
  readonly version: string
}
class VersionFunctionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'function version',
  `arn:${string}:lambda:${string}:${string}:function:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFunction: string
  readonly version: string
  constructor(parameters: VersionFunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFunction = parameters.nameFunction
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:function:${this.nameFunction}:${this.version}` as const
  }
}
export type { VersionFunctionArn }
export function versionFunctionArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionFunctionArnParameters<Partition>,
) {
  return new VersionFunctionArn<Partition>(parameters)
}

export interface LayerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLayer: string
}
class LayerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'layer',
  `arn:${string}:lambda:${string}:${string}:layer:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'layer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLayer: string
  constructor(parameters: LayerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameLayer = parameters.nameLayer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:layer:${this.nameLayer}` as const
  }
}
export type { LayerArn }
export function layerArn<Partition extends ArnPartition = 'aws'>(
  parameters: LayerArnParameters<Partition>,
) {
  return new LayerArn<Partition>(parameters)
}

export interface VersionLayerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLayer: string
  readonly versionLayer: string
}
class VersionLayerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'layerVersion',
  `arn:${string}:lambda:${string}:${string}:layer:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'layerVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLayer: string
  readonly versionLayer: string
  constructor(parameters: VersionLayerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameLayer = parameters.nameLayer
    this.versionLayer = parameters.versionLayer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lambda:${this.region}:${this.account}:layer:${this.nameLayer}:${this.versionLayer}` as const
  }
}
export type { VersionLayerArn }
export function versionLayerArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionLayerArnParameters<Partition>,
) {
  return new VersionLayerArn<Partition>(parameters)
}
