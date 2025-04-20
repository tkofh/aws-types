import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:route53-recovery-control::${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:cluster/${this.idResource}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface PanelControlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
}
class PanelControlArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'controlpanel',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'controlpanel' as const
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
  constructor(parameters: PanelControlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idPanelControl = parameters.idPanelControl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.idPanelControl}` as const
  }
}
export type { PanelControlArn }
export function panelControlArn<Partition extends ArnPartition = 'aws'>(
  parameters: PanelControlArnParameters<Partition>,
) {
  return new PanelControlArn<Partition>(parameters)
}

export interface ControlRoutingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
  readonly idControlRouting: string
}
class ControlRoutingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'routingcontrol',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/routingcontrol/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'routingcontrol' as const
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
  readonly idControlRouting: string
  constructor(parameters: ControlRoutingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idPanelControl = parameters.idPanelControl
    this.idControlRouting = parameters.idControlRouting
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.idPanelControl}/routingcontrol/${this.idControlRouting}` as const
  }
}
export type { ControlRoutingArn }
export function controlRoutingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlRoutingArnParameters<Partition>,
) {
  return new ControlRoutingArn<Partition>(parameters)
}

export interface RuleSafetyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
  readonly idRuleSafety: string
}
class RuleSafetyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'safetyrule',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/safetyrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'safetyrule' as const
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
  readonly idRuleSafety: string
  constructor(parameters: RuleSafetyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idPanelControl = parameters.idPanelControl
    this.idRuleSafety = parameters.idRuleSafety
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.idPanelControl}/safetyrule/${this.idRuleSafety}` as const
  }
}
export type { RuleSafetyArn }
export function ruleSafetyArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleSafetyArnParameters<Partition>,
) {
  return new RuleSafetyArn<Partition>(parameters)
}
