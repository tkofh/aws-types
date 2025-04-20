import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NetworkServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetworkService: string
}
class NetworkServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServiceNetwork',
  `arn:${string}:vpc-lattice:${string}:${string}:servicenetwork/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServiceNetwork' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetworkService: string
  constructor(parameters: NetworkServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNetworkService = parameters.idNetworkService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:servicenetwork/${this.idNetworkService}` as const
  }
}
export type { NetworkServiceArn }
export function networkServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkServiceArnParameters<Partition>,
) {
  return new NetworkServiceArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Service',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idService = parameters.idService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.idService}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface AssociationVpcNetworkServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationVpcNetworkService: string
}
class AssociationVpcNetworkServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServiceNetworkVpcAssociation',
  `arn:${string}:vpc-lattice:${string}:${string}:servicenetworkvpcassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServiceNetworkVpcAssociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationVpcNetworkService: string
  constructor(
    parameters: AssociationVpcNetworkServiceArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssociationVpcNetworkService =
      parameters.idAssociationVpcNetworkService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:servicenetworkvpcassociation/${this.idAssociationVpcNetworkService}` as const
  }
}
export type { AssociationVpcNetworkServiceArn }
export function associationVpcNetworkServiceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationVpcNetworkServiceArnParameters<Partition>) {
  return new AssociationVpcNetworkServiceArn<Partition>(parameters)
}

export interface AssociationServiceNetworkServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationServiceNetworkService: string
}
class AssociationServiceNetworkServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServiceNetworkServiceAssociation',
  `arn:${string}:vpc-lattice:${string}:${string}:servicenetworkserviceassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServiceNetworkServiceAssociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationServiceNetworkService: string
  constructor(
    parameters: AssociationServiceNetworkServiceArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssociationServiceNetworkService =
      parameters.idAssociationServiceNetworkService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:servicenetworkserviceassociation/${this.idAssociationServiceNetworkService}` as const
  }
}
export type { AssociationServiceNetworkServiceArn }
export function associationServiceNetworkServiceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationServiceNetworkServiceArnParameters<Partition>) {
  return new AssociationServiceNetworkServiceArn<Partition>(parameters)
}

export interface GroupTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTarget: string
}
class GroupTargetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TargetGroup',
  `arn:${string}:vpc-lattice:${string}:${string}:targetgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TargetGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTarget: string
  constructor(parameters: GroupTargetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupTarget = parameters.idGroupTarget
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:targetgroup/${this.idGroupTarget}` as const
  }
}
export type { GroupTargetArn }
export function groupTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupTargetArnParameters<Partition>,
) {
  return new GroupTargetArn<Partition>(parameters)
}

export interface ListenerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  readonly idListener: string
}
class ListenerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Listener',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/listener/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Listener' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  readonly idListener: string
  constructor(parameters: ListenerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idService = parameters.idService
    this.idListener = parameters.idListener
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.idService}/listener/${this.idListener}` as const
  }
}
export type { ListenerArn }
export function listenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListenerArnParameters<Partition>,
) {
  return new ListenerArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  readonly idListener: string
  readonly idRule: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Rule',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/listener/${string}/rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  readonly idListener: string
  readonly idRule: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idService = parameters.idService
    this.idListener = parameters.idListener
    this.idRule = parameters.idRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.idService}/listener/${this.idListener}/rule/${this.idRule}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface SubscriptionLogAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscriptionLogAccess: string
}
class SubscriptionLogAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AccessLogSubscription',
  `arn:${string}:vpc-lattice:${string}:${string}:accesslogsubscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AccessLogSubscription' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscriptionLogAccess: string
  constructor(parameters: SubscriptionLogAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSubscriptionLogAccess = parameters.idSubscriptionLogAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:accesslogsubscription/${this.idSubscriptionLogAccess}` as const
  }
}
export type { SubscriptionLogAccessArn }
export function subscriptionLogAccessArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SubscriptionLogAccessArnParameters<Partition>) {
  return new SubscriptionLogAccessArn<Partition>(parameters)
}
