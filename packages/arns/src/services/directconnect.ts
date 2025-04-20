import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DxconArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnection: string
}
class DxconArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dxcon',
  `arn:${string}:directconnect:${string}:${string}:dxcon/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dxcon' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnection: string
  constructor(parameters: DxconArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnection = parameters.idConnection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect:${this.region}:${this.account}:dxcon/${this.idConnection}` as const
  }
}
export type { DxconArn }
export function dxconArn<Partition extends ArnPartition = 'aws'>(
  parameters: DxconArnParameters<Partition>,
) {
  return new DxconArn<Partition>(parameters)
}

export interface DxlagArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLag: string
}
class DxlagArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dxlag',
  `arn:${string}:directconnect:${string}:${string}:dxlag/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dxlag' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLag: string
  constructor(parameters: DxlagArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idLag = parameters.idLag
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect:${this.region}:${this.account}:dxlag/${this.idLag}` as const
  }
}
export type { DxlagArn }
export function dxlagArn<Partition extends ArnPartition = 'aws'>(
  parameters: DxlagArnParameters<Partition>,
) {
  return new DxlagArn<Partition>(parameters)
}

export interface DxvifArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInterfaceVirtual: string
}
class DxvifArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dxvif',
  `arn:${string}:directconnect:${string}:${string}:dxvif/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dxvif' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInterfaceVirtual: string
  constructor(parameters: DxvifArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInterfaceVirtual = parameters.idInterfaceVirtual
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect:${this.region}:${this.account}:dxvif/${this.idInterfaceVirtual}` as const
  }
}
export type { DxvifArn }
export function dxvifArn<Partition extends ArnPartition = 'aws'>(
  parameters: DxvifArnParameters<Partition>,
) {
  return new DxvifArn<Partition>(parameters)
}

export interface GatewayDxArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idGatewayConnectDirect: string
}
class GatewayDxArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dx-gateway',
  `arn:${string}:directconnect::${string}:dx-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dx-gateway' as const
  readonly partition: string
  readonly account: string
  readonly idGatewayConnectDirect: string
  constructor(parameters: GatewayDxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idGatewayConnectDirect = parameters.idGatewayConnectDirect
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:directconnect::${this.account}:dx-gateway/${this.idGatewayConnectDirect}` as const
  }
}
export type { GatewayDxArn }
export function gatewayDxArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayDxArnParameters<Partition>,
) {
  return new GatewayDxArn<Partition>(parameters)
}
