import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AssessmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssessment: string
}
class AssessmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'assessment',
  `arn:${string}:auditmanager:${string}:${string}:assessment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assessment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssessment: string
  constructor(parameters: AssessmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssessment = parameters.idAssessment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:assessment/${this.idAssessment}` as const
  }
}
export type { AssessmentArn }
export function assessmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssessmentArnParameters<Partition>,
) {
  return new AssessmentArn<Partition>(parameters)
}

export interface FrameworkAssessmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFrameworkAssessment: string
}
class FrameworkAssessmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assessmentFramework',
  `arn:${string}:auditmanager:${string}:${string}:assessmentFramework/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assessmentFramework' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFrameworkAssessment: string
  constructor(parameters: FrameworkAssessmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFrameworkAssessment = parameters.idFrameworkAssessment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:assessmentFramework/${this.idFrameworkAssessment}` as const
  }
}
export type { FrameworkAssessmentArn }
export function frameworkAssessmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: FrameworkAssessmentArnParameters<Partition>,
) {
  return new FrameworkAssessmentArn<Partition>(parameters)
}

export interface SetControlAssessmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssessment: string
  readonly idSetControl: string
}
class SetControlAssessmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assessmentControlSet',
  `arn:${string}:auditmanager:${string}:${string}:assessment/${string}/controlSet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assessmentControlSet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssessment: string
  readonly idSetControl: string
  constructor(parameters: SetControlAssessmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssessment = parameters.idAssessment
    this.idSetControl = parameters.idSetControl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:assessment/${this.idAssessment}/controlSet/${this.idSetControl}` as const
  }
}
export type { SetControlAssessmentArn }
export function setControlAssessmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetControlAssessmentArnParameters<Partition>,
) {
  return new SetControlAssessmentArn<Partition>(parameters)
}

export interface ControlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idControl: string
}
class ControlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'control',
  `arn:${string}:auditmanager:${string}:${string}:control/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'control' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idControl: string
  constructor(parameters: ControlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idControl = parameters.idControl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:control/${this.idControl}` as const
  }
}
export type { ControlArn }
export function controlArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlArnParameters<Partition>,
) {
  return new ControlArn<Partition>(parameters)
}
