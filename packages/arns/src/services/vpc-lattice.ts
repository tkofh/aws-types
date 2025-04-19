import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ServiceNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceNetworkId: string
}
class ServiceNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServiceNetwork',
  `arn:${string}:vpc-lattice:${string}:${string}:servicenetwork/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServiceNetwork' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceNetworkId: string
  constructor(parameters: ServiceNetworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceNetworkId = parameters.serviceNetworkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:servicenetwork/${this.serviceNetworkId}` as const
  }
}
export type { ServiceNetworkArn }
export function serviceNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceNetworkArnParameters<Partition>,
) {
  return new ServiceNetworkArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Service',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceId = parameters.serviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.serviceId}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface ServiceNetworkVpcAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceNetworkVpcAssociationId: string
}
class ServiceNetworkVpcAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServiceNetworkVpcAssociation',
  `arn:${string}:vpc-lattice:${string}:${string}:servicenetworkvpcassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServiceNetworkVpcAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceNetworkVpcAssociationId: string
  constructor(
    parameters: ServiceNetworkVpcAssociationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceNetworkVpcAssociationId =
      parameters.serviceNetworkVpcAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:servicenetworkvpcassociation/${this.serviceNetworkVpcAssociationId}` as const
  }
}
export type { ServiceNetworkVpcAssociationArn }
export function serviceNetworkVpcAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ServiceNetworkVpcAssociationArnParameters<Partition>) {
  return new ServiceNetworkVpcAssociationArn<Partition>(parameters)
}

export interface ServiceNetworkServiceAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceNetworkServiceAssociationId: string
}
class ServiceNetworkServiceAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServiceNetworkServiceAssociation',
  `arn:${string}:vpc-lattice:${string}:${string}:servicenetworkserviceassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServiceNetworkServiceAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceNetworkServiceAssociationId: string
  constructor(
    parameters: ServiceNetworkServiceAssociationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceNetworkServiceAssociationId =
      parameters.serviceNetworkServiceAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:servicenetworkserviceassociation/${this.serviceNetworkServiceAssociationId}` as const
  }
}
export type { ServiceNetworkServiceAssociationArn }
export function serviceNetworkServiceAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ServiceNetworkServiceAssociationArnParameters<Partition>) {
  return new ServiceNetworkServiceAssociationArn<Partition>(parameters)
}

export interface TargetGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly targetGroupId: string
}
class TargetGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TargetGroup',
  `arn:${string}:vpc-lattice:${string}:${string}:targetgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TargetGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly targetGroupId: string
  constructor(parameters: TargetGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.targetGroupId = parameters.targetGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:targetgroup/${this.targetGroupId}` as const
  }
}
export type { TargetGroupArn }
export function targetGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetGroupArnParameters<Partition>,
) {
  return new TargetGroupArn<Partition>(parameters)
}

export interface ListenerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  readonly listenerId: string
}
class ListenerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Listener',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/listener/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Listener' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  readonly listenerId: string
  constructor(parameters: ListenerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceId = parameters.serviceId
    this.listenerId = parameters.listenerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.serviceId}/listener/${this.listenerId}` as const
  }
}
export type { ListenerArn }
export function listenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListenerArnParameters<Partition>,
) {
  return new ListenerArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  readonly listenerId: string
  readonly ruleId: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Rule',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/listener/${string}/rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  readonly listenerId: string
  readonly ruleId: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceId = parameters.serviceId
    this.listenerId = parameters.listenerId
    this.ruleId = parameters.ruleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.serviceId}/listener/${this.listenerId}/rule/${this.ruleId}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface AccessLogSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessLogSubscriptionId: string
}
class AccessLogSubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AccessLogSubscription',
  `arn:${string}:vpc-lattice:${string}:${string}:accesslogsubscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AccessLogSubscription' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessLogSubscriptionId: string
  constructor(parameters: AccessLogSubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.accessLogSubscriptionId = parameters.accessLogSubscriptionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:accesslogsubscription/${this.accessLogSubscriptionId}` as const
  }
}
export type { AccessLogSubscriptionArn }
export function accessLogSubscriptionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AccessLogSubscriptionArnParameters<Partition>) {
  return new AccessLogSubscriptionArn<Partition>(parameters)
}
