import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DxconArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionId: string
}
class DxconArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dxcon', `arn:${string}:directconnect:${string}:${string}:dxcon/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dxcon' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionId: string
  constructor(parameters: DxconArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectionId = parameters.connectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect:${this.region}:${this.account}:dxcon/${this.connectionId}` as const
  }
}
export type { DxconArn }
export function dxconArn<Partition extends ArnPartition = 'aws'>(parameters: DxconArnParameters<Partition>) {
  return new DxconArn<Partition>(parameters)
}

export interface DxlagArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lagId: string
}
class DxlagArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dxlag', `arn:${string}:directconnect:${string}:${string}:dxlag/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dxlag' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lagId: string
  constructor(parameters: DxlagArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.lagId = parameters.lagId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect:${this.region}:${this.account}:dxlag/${this.lagId}` as const
  }
}
export type { DxlagArn }
export function dxlagArn<Partition extends ArnPartition = 'aws'>(parameters: DxlagArnParameters<Partition>) {
  return new DxlagArn<Partition>(parameters)
}

export interface DxvifArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualInterfaceId: string
}
class DxvifArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dxvif', `arn:${string}:directconnect:${string}:${string}:dxvif/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dxvif' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualInterfaceId: string
  constructor(parameters: DxvifArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.virtualInterfaceId = parameters.virtualInterfaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect:${this.region}:${this.account}:dxvif/${this.virtualInterfaceId}` as const
  }
}
export type { DxvifArn }
export function dxvifArn<Partition extends ArnPartition = 'aws'>(parameters: DxvifArnParameters<Partition>) {
  return new DxvifArn<Partition>(parameters)
}

export interface DxGatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly directConnectGatewayId: string
}
class DxGatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dx-gateway', `arn:${string}:directconnect::${string}:dx-gateway/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dx-gateway' as const
  readonly partition: Partition
  readonly account: string
  readonly directConnectGatewayId: string
  constructor(parameters: DxGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.directConnectGatewayId = parameters.directConnectGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect::${this.account}:dx-gateway/${this.directConnectGatewayId}` as const
  }
}
export type { DxGatewayArn }
export function dxGatewayArn<Partition extends ArnPartition = 'aws'>(parameters: DxGatewayArnParameters<Partition>) {
  return new DxGatewayArn<Partition>(parameters)
}