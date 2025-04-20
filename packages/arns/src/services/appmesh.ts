import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface MeshArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
}
class MeshArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'mesh',
  `arn:${string}:appmesh:${string}:${string}:mesh/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mesh' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  constructor(parameters: MeshArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMesh = parameters.nameMesh
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh:${this.region}:${this.account}:mesh/${this.nameMesh}` as const
  }
}
export type { MeshArn }
export function meshArn<Partition extends ArnPartition = 'aws'>(
  parameters: MeshArnParameters<Partition>,
) {
  return new MeshArn<Partition>(parameters)
}

export interface ServiceVirtualArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameServiceVirtual: string
}
class ServiceVirtualArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualService',
  `arn:${string}:appmesh:${string}:${string}:mesh/${string}/virtualService/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualService' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameServiceVirtual: string
  constructor(parameters: ServiceVirtualArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMesh = parameters.nameMesh
    this.nameServiceVirtual = parameters.nameServiceVirtual
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh:${this.region}:${this.account}:mesh/${this.nameMesh}/virtualService/${this.nameServiceVirtual}` as const
  }
}
export type { ServiceVirtualArn }
export function serviceVirtualArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceVirtualArnParameters<Partition>,
) {
  return new ServiceVirtualArn<Partition>(parameters)
}

export interface NodeVirtualArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameNodeVirtual: string
}
class NodeVirtualArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualNode',
  `arn:${string}:appmesh:${string}:${string}:mesh/${string}/virtualNode/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualNode' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameNodeVirtual: string
  constructor(parameters: NodeVirtualArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMesh = parameters.nameMesh
    this.nameNodeVirtual = parameters.nameNodeVirtual
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh:${this.region}:${this.account}:mesh/${this.nameMesh}/virtualNode/${this.nameNodeVirtual}` as const
  }
}
export type { NodeVirtualArn }
export function nodeVirtualArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodeVirtualArnParameters<Partition>,
) {
  return new NodeVirtualArn<Partition>(parameters)
}

export interface RouterVirtualArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameRouterVirtual: string
}
class RouterVirtualArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualRouter',
  `arn:${string}:appmesh:${string}:${string}:mesh/${string}/virtualRouter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualRouter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameRouterVirtual: string
  constructor(parameters: RouterVirtualArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMesh = parameters.nameMesh
    this.nameRouterVirtual = parameters.nameRouterVirtual
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh:${this.region}:${this.account}:mesh/${this.nameMesh}/virtualRouter/${this.nameRouterVirtual}` as const
  }
}
export type { RouterVirtualArn }
export function routerVirtualArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouterVirtualArnParameters<Partition>,
) {
  return new RouterVirtualArn<Partition>(parameters)
}

export interface RouteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameRouterVirtual: string
  readonly nameRoute: string
}
class RouteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'route',
  `arn:${string}:appmesh:${string}:${string}:mesh/${string}/virtualRouter/${string}/route/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameRouterVirtual: string
  readonly nameRoute: string
  constructor(parameters: RouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMesh = parameters.nameMesh
    this.nameRouterVirtual = parameters.nameRouterVirtual
    this.nameRoute = parameters.nameRoute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh:${this.region}:${this.account}:mesh/${this.nameMesh}/virtualRouter/${this.nameRouterVirtual}/route/${this.nameRoute}` as const
  }
}
export type { RouteArn }
export function routeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteArnParameters<Partition>,
) {
  return new RouteArn<Partition>(parameters)
}

export interface GatewayVirtualArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameGatewayVirtual: string
}
class GatewayVirtualArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualGateway',
  `arn:${string}:appmesh:${string}:${string}:mesh/${string}/virtualGateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualGateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameGatewayVirtual: string
  constructor(parameters: GatewayVirtualArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMesh = parameters.nameMesh
    this.nameGatewayVirtual = parameters.nameGatewayVirtual
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh:${this.region}:${this.account}:mesh/${this.nameMesh}/virtualGateway/${this.nameGatewayVirtual}` as const
  }
}
export type { GatewayVirtualArn }
export function gatewayVirtualArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayVirtualArnParameters<Partition>,
) {
  return new GatewayVirtualArn<Partition>(parameters)
}

export interface RouteGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameGatewayVirtual: string
  readonly nameRouteGateway: string
}
class RouteGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'gatewayRoute',
  `arn:${string}:appmesh:${string}:${string}:mesh/${string}/virtualGateway/${string}/gatewayRoute/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gatewayRoute' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMesh: string
  readonly nameGatewayVirtual: string
  readonly nameRouteGateway: string
  constructor(parameters: RouteGatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMesh = parameters.nameMesh
    this.nameGatewayVirtual = parameters.nameGatewayVirtual
    this.nameRouteGateway = parameters.nameRouteGateway
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appmesh:${this.region}:${this.account}:mesh/${this.nameMesh}/virtualGateway/${this.nameGatewayVirtual}/gatewayRoute/${this.nameRouteGateway}` as const
  }
}
export type { RouteGatewayArn }
export function routeGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteGatewayArnParameters<Partition>,
) {
  return new RouteGatewayArn<Partition>(parameters)
}
