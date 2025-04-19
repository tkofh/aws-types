import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AcceleratorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class AcceleratorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accelerator',
  `arn:${string}:globalaccelerator::${string}:accelerator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accelerator' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AcceleratorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:accelerator/${this.resourceId}` as const
  }
}
export type { AcceleratorArn }
export function acceleratorArn<Partition extends ArnPartition = 'aws'>(
  parameters: AcceleratorArnParameters<Partition>,
) {
  return new AcceleratorArn<Partition>(parameters)
}

export interface ListenerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
  readonly listenerId: string
}
class ListenerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'listener',
  `arn:${string}:globalaccelerator::${string}:accelerator/${string}/listener/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listener' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  readonly listenerId: string
  constructor(parameters: ListenerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
    this.listenerId = parameters.listenerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:accelerator/${this.resourceId}/listener/${this.listenerId}` as const
  }
}
export type { ListenerArn }
export function listenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListenerArnParameters<Partition>,
) {
  return new ListenerArn<Partition>(parameters)
}

export interface EndpointgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
  readonly listenerId: string
  readonly endpointGroupId: string
}
class EndpointgroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'endpointgroup',
  `arn:${string}:globalaccelerator::${string}:accelerator/${string}/listener/${string}/endpoint-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpointgroup' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  readonly listenerId: string
  readonly endpointGroupId: string
  constructor(parameters: EndpointgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
    this.listenerId = parameters.listenerId
    this.endpointGroupId = parameters.endpointGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:accelerator/${this.resourceId}/listener/${this.listenerId}/endpoint-group/${this.endpointGroupId}` as const
  }
}
export type { EndpointgroupArn }
export function endpointgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointgroupArnParameters<Partition>,
) {
  return new EndpointgroupArn<Partition>(parameters)
}

export interface AttachmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class AttachmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attachment',
  `arn:${string}:globalaccelerator::${string}:attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attachment' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AttachmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:attachment/${this.resourceId}` as const
  }
}
export type { AttachmentArn }
export function attachmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttachmentArnParameters<Partition>,
) {
  return new AttachmentArn<Partition>(parameters)
}
