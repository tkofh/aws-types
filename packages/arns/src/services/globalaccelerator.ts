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
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class AcceleratorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accelerator',
  `arn:${string}:globalaccelerator::${string}:accelerator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accelerator' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AcceleratorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:accelerator/${this.idResource}` as const
  }
}
export type { AcceleratorArn }
export function acceleratorArn<Partition extends ArnPartition = 'aws'>(
  parameters: AcceleratorArnParameters<Partition>,
) {
  return new AcceleratorArn<Partition>(parameters)
}

export interface ListenerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
  readonly idListener: string
}
class ListenerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'listener',
  `arn:${string}:globalaccelerator::${string}:accelerator/${string}/listener/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listener' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  readonly idListener: string
  constructor(parameters: ListenerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
    this.idListener = parameters.idListener
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:accelerator/${this.idResource}/listener/${this.idListener}` as const
  }
}
export type { ListenerArn }
export function listenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListenerArnParameters<Partition>,
) {
  return new ListenerArn<Partition>(parameters)
}

export interface GroupEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
  readonly idListener: string
  readonly idGroupEndpoint: string
}
class GroupEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'endpointgroup',
  `arn:${string}:globalaccelerator::${string}:accelerator/${string}/listener/${string}/endpoint-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpointgroup' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  readonly idListener: string
  readonly idGroupEndpoint: string
  constructor(parameters: GroupEndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
    this.idListener = parameters.idListener
    this.idGroupEndpoint = parameters.idGroupEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:accelerator/${this.idResource}/listener/${this.idListener}/endpoint-group/${this.idGroupEndpoint}` as const
  }
}
export type { GroupEndpointArn }
export function groupEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupEndpointArnParameters<Partition>,
) {
  return new GroupEndpointArn<Partition>(parameters)
}

export interface AttachmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class AttachmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attachment',
  `arn:${string}:globalaccelerator::${string}:attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attachment' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AttachmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:globalaccelerator::${this.account}:attachment/${this.idResource}` as const
  }
}
export type { AttachmentArn }
export function attachmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttachmentArnParameters<Partition>,
) {
  return new AttachmentArn<Partition>(parameters)
}
