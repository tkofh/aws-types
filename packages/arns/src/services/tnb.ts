import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface FunctionPackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionPackageId: string
}
class FunctionPackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'function-package', `arn:${string}:tnb:${string}:${string}:function-package/${string}`> {
  readonly [ArnResourceTypeBrand] = 'function-package' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionPackageId: string
  constructor(parameters: FunctionPackageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.functionPackageId = parameters.functionPackageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:function-package/${this.functionPackageId}` as const
  }
}
export type { FunctionPackageArn }
export function functionPackageArn<Partition extends ArnPartition = 'aws'>(parameters: FunctionPackageArnParameters<Partition>) {
  return new FunctionPackageArn<Partition>(parameters)
}

export interface NetworkPackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkPackageId: string
}
class NetworkPackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'network-package', `arn:${string}:tnb:${string}:${string}:network-package/${string}`> {
  readonly [ArnResourceTypeBrand] = 'network-package' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkPackageId: string
  constructor(parameters: NetworkPackageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkPackageId = parameters.networkPackageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:network-package/${this.networkPackageId}` as const
  }
}
export type { NetworkPackageArn }
export function networkPackageArn<Partition extends ArnPartition = 'aws'>(parameters: NetworkPackageArnParameters<Partition>) {
  return new NetworkPackageArn<Partition>(parameters)
}

export interface NetworkInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInstanceId: string
}
class NetworkInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'network-instance', `arn:${string}:tnb:${string}:${string}:network-instance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'network-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInstanceId: string
  constructor(parameters: NetworkInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkInstanceId = parameters.networkInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:network-instance/${this.networkInstanceId}` as const
  }
}
export type { NetworkInstanceArn }
export function networkInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: NetworkInstanceArnParameters<Partition>) {
  return new NetworkInstanceArn<Partition>(parameters)
}

export interface FunctionInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionInstanceId: string
}
class FunctionInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'function-instance', `arn:${string}:tnb:${string}:${string}:function-instance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'function-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionInstanceId: string
  constructor(parameters: FunctionInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.functionInstanceId = parameters.functionInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:function-instance/${this.functionInstanceId}` as const
  }
}
export type { FunctionInstanceArn }
export function functionInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: FunctionInstanceArnParameters<Partition>) {
  return new FunctionInstanceArn<Partition>(parameters)
}

export interface NetworkOperationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkOperationId: string
}
class NetworkOperationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'network-operation', `arn:${string}:tnb:${string}:${string}:network-operation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'network-operation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkOperationId: string
  constructor(parameters: NetworkOperationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkOperationId = parameters.networkOperationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:network-operation/${this.networkOperationId}` as const
  }
}
export type { NetworkOperationArn }
export function networkOperationArn<Partition extends ArnPartition = 'aws'>(parameters: NetworkOperationArnParameters<Partition>) {
  return new NetworkOperationArn<Partition>(parameters)
}