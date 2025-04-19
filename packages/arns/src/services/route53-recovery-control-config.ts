import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:route53-recovery-control::${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:cluster/${this.resourceId}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface ControlpanelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly controlPanelId: string
}
class ControlpanelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'controlpanel',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'controlpanel' as const
  readonly partition: Partition
  readonly account: string
  readonly controlPanelId: string
  constructor(parameters: ControlpanelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.controlPanelId = parameters.controlPanelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.controlPanelId}` as const
  }
}
export type { ControlpanelArn }
export function controlpanelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlpanelArnParameters<Partition>,
) {
  return new ControlpanelArn<Partition>(parameters)
}

export interface RoutingcontrolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly controlPanelId: string
  readonly routingControlId: string
}
class RoutingcontrolArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'routingcontrol',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/routingcontrol/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'routingcontrol' as const
  readonly partition: Partition
  readonly account: string
  readonly controlPanelId: string
  readonly routingControlId: string
  constructor(parameters: RoutingcontrolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.controlPanelId = parameters.controlPanelId
    this.routingControlId = parameters.routingControlId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.controlPanelId}/routingcontrol/${this.routingControlId}` as const
  }
}
export type { RoutingcontrolArn }
export function routingcontrolArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoutingcontrolArnParameters<Partition>,
) {
  return new RoutingcontrolArn<Partition>(parameters)
}

export interface SafetyruleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly controlPanelId: string
  readonly safetyRuleId: string
}
class SafetyruleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'safetyrule',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/safetyrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'safetyrule' as const
  readonly partition: Partition
  readonly account: string
  readonly controlPanelId: string
  readonly safetyRuleId: string
  constructor(parameters: SafetyruleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.controlPanelId = parameters.controlPanelId
    this.safetyRuleId = parameters.safetyRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.controlPanelId}/safetyrule/${this.safetyRuleId}` as const
  }
}
export type { SafetyruleArn }
export function safetyruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SafetyruleArnParameters<Partition>,
) {
  return new SafetyruleArn<Partition>(parameters)
}
