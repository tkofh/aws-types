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

export interface ControlPanelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly controlPanelId: string
}
class ControlPanelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'controlpanel',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'controlpanel' as const
  readonly partition: Partition
  readonly account: string
  readonly controlPanelId: string
  constructor(parameters: ControlPanelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.controlPanelId = parameters.controlPanelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.controlPanelId}` as const
  }
}
export type { ControlPanelArn }
export function controlPanelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlPanelArnParameters<Partition>,
) {
  return new ControlPanelArn<Partition>(parameters)
}

export interface RoutingControlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly controlPanelId: string
  readonly routingControlId: string
}
class RoutingControlArn<
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
  constructor(parameters: RoutingControlArnParameters<Partition>) {
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
export type { RoutingControlArn }
export function routingControlArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoutingControlArnParameters<Partition>,
) {
  return new RoutingControlArn<Partition>(parameters)
}

export interface SafetyRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly controlPanelId: string
  readonly safetyRuleId: string
}
class SafetyRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'safetyrule',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/safetyrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'safetyrule' as const
  readonly partition: Partition
  readonly account: string
  readonly controlPanelId: string
  readonly safetyRuleId: string
  constructor(parameters: SafetyRuleArnParameters<Partition>) {
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
export type { SafetyRuleArn }
export function safetyRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SafetyRuleArnParameters<Partition>,
) {
  return new SafetyRuleArn<Partition>(parameters)
}
