export interface AcceleratorArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type AcceleratorArn = `arn:${string}:globalaccelerator::${string}:accelerator/${string}`
export function acceleratorArn(parameters: AcceleratorArnParameters): AcceleratorArn {
  return `arn:${parameters.partition ?? ''}:globalaccelerator::${parameters.account}:accelerator/${parameters.resourceId}`
}

export interface ListenerArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
  listenerId: string
}
export type ListenerArn = `arn:${string}:globalaccelerator::${string}:accelerator/${string}/listener/${string}`
export function listenerArn(parameters: ListenerArnParameters): ListenerArn {
  return `arn:${parameters.partition ?? ''}:globalaccelerator::${parameters.account}:accelerator/${parameters.resourceId}/listener/${parameters.listenerId}`
}

export interface EndpointgroupArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
  listenerId: string
  endpointGroupId: string
}
export type EndpointgroupArn = `arn:${string}:globalaccelerator::${string}:accelerator/${string}/listener/${string}/endpoint-group/${string}`
export function endpointgroupArn(parameters: EndpointgroupArnParameters): EndpointgroupArn {
  return `arn:${parameters.partition ?? ''}:globalaccelerator::${parameters.account}:accelerator/${parameters.resourceId}/listener/${parameters.listenerId}/endpoint-group/${parameters.endpointGroupId}`
}

export interface AttachmentArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type AttachmentArn = `arn:${string}:globalaccelerator::${string}:attachment/${string}`
export function attachmentArn(parameters: AttachmentArnParameters): AttachmentArn {
  return `arn:${parameters.partition ?? ''}:globalaccelerator::${parameters.account}:attachment/${parameters.resourceId}`
}