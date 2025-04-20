import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface MeshArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
}
class MeshArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'mesh',
  `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mesh' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  constructor(parameters: MeshArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.meshName = parameters.meshName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh-preview:${this.region}:${this.account}:mesh/${this.meshName}` as const
  }
}
export type { MeshArn }
export function meshArn<Partition extends ArnPartition = 'aws'>(
  parameters: MeshArnParameters<Partition>,
) {
  return new MeshArn<Partition>(parameters)
}

export interface VirtualServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualServiceName: string
}
class VirtualServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualService',
  `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualService/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualService' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualServiceName: string
  constructor(parameters: VirtualServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.meshName = parameters.meshName
    this.virtualServiceName = parameters.virtualServiceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh-preview:${this.region}:${this.account}:mesh/${this.meshName}/virtualService/${this.virtualServiceName}` as const
  }
}
export type { VirtualServiceArn }
export function virtualServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: VirtualServiceArnParameters<Partition>,
) {
  return new VirtualServiceArn<Partition>(parameters)
}

export interface VirtualNodeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualNodeName: string
}
class VirtualNodeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualNode',
  `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualNode/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualNode' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualNodeName: string
  constructor(parameters: VirtualNodeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.meshName = parameters.meshName
    this.virtualNodeName = parameters.virtualNodeName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh-preview:${this.region}:${this.account}:mesh/${this.meshName}/virtualNode/${this.virtualNodeName}` as const
  }
}
export type { VirtualNodeArn }
export function virtualNodeArn<Partition extends ArnPartition = 'aws'>(
  parameters: VirtualNodeArnParameters<Partition>,
) {
  return new VirtualNodeArn<Partition>(parameters)
}

export interface VirtualRouterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualRouterName: string
}
class VirtualRouterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualRouter',
  `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualRouter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualRouter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualRouterName: string
  constructor(parameters: VirtualRouterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.meshName = parameters.meshName
    this.virtualRouterName = parameters.virtualRouterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh-preview:${this.region}:${this.account}:mesh/${this.meshName}/virtualRouter/${this.virtualRouterName}` as const
  }
}
export type { VirtualRouterArn }
export function virtualRouterArn<Partition extends ArnPartition = 'aws'>(
  parameters: VirtualRouterArnParameters<Partition>,
) {
  return new VirtualRouterArn<Partition>(parameters)
}

export interface RouteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualRouterName: string
  readonly routeName: string
}
class RouteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'route',
  `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualRouter/${string}/route/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualRouterName: string
  readonly routeName: string
  constructor(parameters: RouteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.meshName = parameters.meshName
    this.virtualRouterName = parameters.virtualRouterName
    this.routeName = parameters.routeName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh-preview:${this.region}:${this.account}:mesh/${this.meshName}/virtualRouter/${this.virtualRouterName}/route/${this.routeName}` as const
  }
}
export type { RouteArn }
export function routeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteArnParameters<Partition>,
) {
  return new RouteArn<Partition>(parameters)
}

export interface VirtualGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualGatewayName: string
}
class VirtualGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualGateway',
  `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualGateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualGateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualGatewayName: string
  constructor(parameters: VirtualGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.meshName = parameters.meshName
    this.virtualGatewayName = parameters.virtualGatewayName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh-preview:${this.region}:${this.account}:mesh/${this.meshName}/virtualGateway/${this.virtualGatewayName}` as const
  }
}
export type { VirtualGatewayArn }
export function virtualGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: VirtualGatewayArnParameters<Partition>,
) {
  return new VirtualGatewayArn<Partition>(parameters)
}

export interface GatewayRouteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualGatewayName: string
  readonly gatewayRouteName: string
}
class GatewayRouteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'gatewayRoute',
  `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualGateway/${string}/gatewayRoute/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gatewayRoute' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly meshName: string
  readonly virtualGatewayName: string
  readonly gatewayRouteName: string
  constructor(parameters: GatewayRouteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.meshName = parameters.meshName
    this.virtualGatewayName = parameters.virtualGatewayName
    this.gatewayRouteName = parameters.gatewayRouteName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh-preview:${this.region}:${this.account}:mesh/${this.meshName}/virtualGateway/${this.virtualGatewayName}/gatewayRoute/${this.gatewayRouteName}` as const
  }
}
export type { GatewayRouteArn }
export function gatewayRouteArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayRouteArnParameters<Partition>,
) {
  return new GatewayRouteArn<Partition>(parameters)
}
