export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobArn = `arn:${string}:mediaconvert:${string}:${string}:jobs/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:mediaconvert:${parameters.region}:${parameters.account}:jobs/${parameters.jobId}`
}

export interface QueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  queueName: string
}
export type QueueArn = `arn:${string}:mediaconvert:${string}:${string}:queues/${string}`
export function queueArn(parameters: QueueArnParameters): QueueArn {
  return `arn:${parameters.partition ?? ''}:mediaconvert:${parameters.region}:${parameters.account}:queues/${parameters.queueName}`
}

export interface PresetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  presetName: string
}
export type PresetArn = `arn:${string}:mediaconvert:${string}:${string}:presets/${string}`
export function presetArn(parameters: PresetArnParameters): PresetArn {
  return `arn:${parameters.partition ?? ''}:mediaconvert:${parameters.region}:${parameters.account}:presets/${parameters.presetName}`
}

export interface JobTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobTemplateName: string
}
export type JobTemplateArn = `arn:${string}:mediaconvert:${string}:${string}:jobTemplates/${string}`
export function jobTemplateArn(parameters: JobTemplateArnParameters): JobTemplateArn {
  return `arn:${parameters.partition ?? ''}:mediaconvert:${parameters.region}:${parameters.account}:jobTemplates/${parameters.jobTemplateName}`
}

export interface CertificateAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificateArn: string
}
export type CertificateAssociationArn = `arn:${string}:mediaconvert:${string}:${string}:certificates/${string}`
export function certificateAssociationArn(parameters: CertificateAssociationArnParameters): CertificateAssociationArn {
  return `arn:${parameters.partition ?? ''}:mediaconvert:${parameters.region}:${parameters.account}:certificates/${parameters.certificateArn}`
}