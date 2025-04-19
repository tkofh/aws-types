import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

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
