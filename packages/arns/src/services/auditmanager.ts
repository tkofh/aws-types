export interface AssessmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assessmentId: string
}
export type AssessmentArn = `arn:${string}:auditmanager:${string}:${string}:assessment/${string}`
export function assessmentArn(parameters: AssessmentArnParameters): AssessmentArn {
  return `arn:${parameters.partition ?? ''}:auditmanager:${parameters.region}:${parameters.account}:assessment/${parameters.assessmentId}`
}

export interface AssessmentFrameworkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assessmentFrameworkId: string
}
export type AssessmentFrameworkArn = `arn:${string}:auditmanager:${string}:${string}:assessmentFramework/${string}`
export function assessmentFrameworkArn(parameters: AssessmentFrameworkArnParameters): AssessmentFrameworkArn {
  return `arn:${parameters.partition ?? ''}:auditmanager:${parameters.region}:${parameters.account}:assessmentFramework/${parameters.assessmentFrameworkId}`
}

export interface AssessmentControlSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assessmentId: string
  controlSetId: string
}
export type AssessmentControlSetArn = `arn:${string}:auditmanager:${string}:${string}:assessment/${string}/controlSet/${string}`
export function assessmentControlSetArn(parameters: AssessmentControlSetArnParameters): AssessmentControlSetArn {
  return `arn:${parameters.partition ?? ''}:auditmanager:${parameters.region}:${parameters.account}:assessment/${parameters.assessmentId}/controlSet/${parameters.controlSetId}`
}

export interface ControlArnParameters {
  partition?: string | undefined
  region: string
  account: string
  controlId: string
}
export type ControlArn = `arn:${string}:auditmanager:${string}:${string}:control/${string}`
export function controlArn(parameters: ControlArnParameters): ControlArn {
  return `arn:${parameters.partition ?? ''}:auditmanager:${parameters.region}:${parameters.account}:control/${parameters.controlId}`
}