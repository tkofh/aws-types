import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AssessmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assessmentId: string
}
class AssessmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'assessment', `arn:${string}:auditmanager:${string}:${string}:assessment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'assessment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assessmentId: string
  constructor(parameters: AssessmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assessmentId = parameters.assessmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:assessment/${this.assessmentId}` as const
  }
}
export type { AssessmentArn }
export function assessmentArn<Partition extends ArnPartition = 'aws'>(parameters: AssessmentArnParameters<Partition>) {
  return new AssessmentArn<Partition>(parameters)
}

export interface AssessmentFrameworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assessmentFrameworkId: string
}
class AssessmentFrameworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'assessmentFramework', `arn:${string}:auditmanager:${string}:${string}:assessmentFramework/${string}`> {
  readonly [ArnResourceTypeBrand] = 'assessmentFramework' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assessmentFrameworkId: string
  constructor(parameters: AssessmentFrameworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assessmentFrameworkId = parameters.assessmentFrameworkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:assessmentFramework/${this.assessmentFrameworkId}` as const
  }
}
export type { AssessmentFrameworkArn }
export function assessmentFrameworkArn<Partition extends ArnPartition = 'aws'>(parameters: AssessmentFrameworkArnParameters<Partition>) {
  return new AssessmentFrameworkArn<Partition>(parameters)
}

export interface AssessmentControlSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assessmentId: string
  readonly controlSetId: string
}
class AssessmentControlSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'assessmentControlSet', `arn:${string}:auditmanager:${string}:${string}:assessment/${string}/controlSet/${string}`> {
  readonly [ArnResourceTypeBrand] = 'assessmentControlSet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assessmentId: string
  readonly controlSetId: string
  constructor(parameters: AssessmentControlSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assessmentId = parameters.assessmentId
    this.controlSetId = parameters.controlSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:assessment/${this.assessmentId}/controlSet/${this.controlSetId}` as const
  }
}
export type { AssessmentControlSetArn }
export function assessmentControlSetArn<Partition extends ArnPartition = 'aws'>(parameters: AssessmentControlSetArnParameters<Partition>) {
  return new AssessmentControlSetArn<Partition>(parameters)
}

export interface ControlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly controlId: string
}
class ControlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'control', `arn:${string}:auditmanager:${string}:${string}:control/${string}`> {
  readonly [ArnResourceTypeBrand] = 'control' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly controlId: string
  constructor(parameters: ControlArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.controlId = parameters.controlId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:auditmanager:${this.region}:${this.account}:control/${this.controlId}` as const
  }
}
export type { ControlArn }
export function controlArn<Partition extends ArnPartition = 'aws'>(parameters: ControlArnParameters<Partition>) {
  return new ControlArn<Partition>(parameters)
}