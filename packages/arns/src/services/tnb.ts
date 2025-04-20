import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PackageFunctionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackageFunction: string
}
class PackageFunctionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'function-package',
  `arn:${string}:tnb:${string}:${string}:function-package/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function-package' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackageFunction: string
  constructor(parameters: PackageFunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPackageFunction = parameters.idPackageFunction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:function-package/${this.idPackageFunction}` as const
  }
}
export type { PackageFunctionArn }
export function packageFunctionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageFunctionArnParameters<Partition>,
) {
  return new PackageFunctionArn<Partition>(parameters)
}

export interface PackageNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackageNetwork: string
}
class PackageNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-package',
  `arn:${string}:tnb:${string}:${string}:network-package/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-package' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackageNetwork: string
  constructor(parameters: PackageNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPackageNetwork = parameters.idPackageNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:network-package/${this.idPackageNetwork}` as const
  }
}
export type { PackageNetworkArn }
export function packageNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageNetworkArnParameters<Partition>,
) {
  return new PackageNetworkArn<Partition>(parameters)
}

export interface InstanceNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceNetwork: string
}
class InstanceNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-instance',
  `arn:${string}:tnb:${string}:${string}:network-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceNetwork: string
  constructor(parameters: InstanceNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceNetwork = parameters.idInstanceNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:network-instance/${this.idInstanceNetwork}` as const
  }
}
export type { InstanceNetworkArn }
export function instanceNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceNetworkArnParameters<Partition>,
) {
  return new InstanceNetworkArn<Partition>(parameters)
}

export interface InstanceFunctionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceFunction: string
}
class InstanceFunctionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'function-instance',
  `arn:${string}:tnb:${string}:${string}:function-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceFunction: string
  constructor(parameters: InstanceFunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceFunction = parameters.idInstanceFunction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:function-instance/${this.idInstanceFunction}` as const
  }
}
export type { InstanceFunctionArn }
export function instanceFunctionArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceFunctionArnParameters<Partition>,
) {
  return new InstanceFunctionArn<Partition>(parameters)
}

export interface OperationNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOperationNetwork: string
}
class OperationNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-operation',
  `arn:${string}:tnb:${string}:${string}:network-operation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-operation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOperationNetwork: string
  constructor(parameters: OperationNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOperationNetwork = parameters.idOperationNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:tnb:${this.region}:${this.account}:network-operation/${this.idOperationNetwork}` as const
  }
}
export type { OperationNetworkArn }
export function operationNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: OperationNetworkArnParameters<Partition>,
) {
  return new OperationNetworkArn<Partition>(parameters)
}
