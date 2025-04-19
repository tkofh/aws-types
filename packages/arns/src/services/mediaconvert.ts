import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Job', `arn:${string}:mediaconvert:${string}:${string}:jobs/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:jobs/${this.jobId}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(parameters: JobArnParameters<Partition>) {
  return new JobArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly queueName: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Queue', `arn:${string}:mediaconvert:${string}:${string}:queues/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Queue' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly queueName: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.queueName = parameters.queueName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:queues/${this.queueName}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(parameters: QueueArnParameters<Partition>) {
  return new QueueArn<Partition>(parameters)
}

export interface PresetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly presetName: string
}
class PresetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Preset', `arn:${string}:mediaconvert:${string}:${string}:presets/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Preset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly presetName: string
  constructor(parameters: PresetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.presetName = parameters.presetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:presets/${this.presetName}` as const
  }
}
export type { PresetArn }
export function presetArn<Partition extends ArnPartition = 'aws'>(parameters: PresetArnParameters<Partition>) {
  return new PresetArn<Partition>(parameters)
}

export interface JobTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateName: string
}
class JobTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'JobTemplate', `arn:${string}:mediaconvert:${string}:${string}:jobTemplates/${string}`> {
  readonly [ArnResourceTypeBrand] = 'JobTemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateName: string
  constructor(parameters: JobTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobTemplateName = parameters.jobTemplateName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:jobTemplates/${this.jobTemplateName}` as const
  }
}
export type { JobTemplateArn }
export function jobTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: JobTemplateArnParameters<Partition>) {
  return new JobTemplateArn<Partition>(parameters)
}

export interface CertificateAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateArn: string
}
class CertificateAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'CertificateAssociation', `arn:${string}:mediaconvert:${string}:${string}:certificates/${string}`> {
  readonly [ArnResourceTypeBrand] = 'CertificateAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateArn: string
  constructor(parameters: CertificateAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificateArn = parameters.certificateArn
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:certificates/${this.certificateArn}` as const
  }
}
export type { CertificateAssociationArn }
export function certificateAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: CertificateAssociationArnParameters<Partition>) {
  return new CertificateAssociationArn<Partition>(parameters)
}