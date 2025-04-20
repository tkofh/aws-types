import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Job',
  `arn:${string}:mediaconvert:${string}:${string}:jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:jobs/${this.idJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueue: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Queue',
  `arn:${string}:mediaconvert:${string}:${string}:queues/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Queue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueue: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameQueue = parameters.nameQueue
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:queues/${this.nameQueue}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}

export interface PresetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePreset: string
}
class PresetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Preset',
  `arn:${string}:mediaconvert:${string}:${string}:presets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Preset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePreset: string
  constructor(parameters: PresetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePreset = parameters.namePreset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:presets/${this.namePreset}` as const
  }
}
export type { PresetArn }
export function presetArn<Partition extends ArnPartition = 'aws'>(
  parameters: PresetArnParameters<Partition>,
) {
  return new PresetArn<Partition>(parameters)
}

export interface TemplateJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplateJob: string
}
class TemplateJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'JobTemplate',
  `arn:${string}:mediaconvert:${string}:${string}:jobTemplates/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'JobTemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplateJob: string
  constructor(parameters: TemplateJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplateJob = parameters.nameTemplateJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:jobTemplates/${this.nameTemplateJob}` as const
  }
}
export type { TemplateJobArn }
export function templateJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateJobArnParameters<Partition>,
) {
  return new TemplateJobArn<Partition>(parameters)
}

export interface AssociationCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly arnCertificate: string
}
class AssociationCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CertificateAssociation',
  `arn:${string}:mediaconvert:${string}:${string}:certificates/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CertificateAssociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly arnCertificate: string
  constructor(parameters: AssociationCertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.arnCertificate = parameters.arnCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediaconvert:${this.region}:${this.account}:certificates/${this.arnCertificate}` as const
  }
}
export type { AssociationCertificateArn }
export function associationCertificateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationCertificateArnParameters<Partition>) {
  return new AssociationCertificateArn<Partition>(parameters)
}
