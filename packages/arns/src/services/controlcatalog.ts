export interface CommonControlArnParameters {
  partition?: string | undefined
  commonControlId: string
}
export type CommonControlArn = `arn:${string}:controlcatalog:::common-control/${string}`
export function commonControlArn(parameters: CommonControlArnParameters): CommonControlArn {
  return `arn:${parameters.partition ?? ''}:controlcatalog:::common-control/${parameters.commonControlId}`
}

export interface ControlArnParameters {
  partition?: string | undefined
  controlId: string
}
export type ControlArn = `arn:${string}:controlcatalog:::control/${string}`
export function controlArn(parameters: ControlArnParameters): ControlArn {
  return `arn:${parameters.partition ?? ''}:controlcatalog:::control/${parameters.controlId}`
}

export interface DomainArnParameters {
  partition?: string | undefined
  domainId: string
}
export type DomainArn = `arn:${string}:controlcatalog:::domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:controlcatalog:::domain/${parameters.domainId}`
}

export interface ObjectiveArnParameters {
  partition?: string | undefined
  objectiveId: string
}
export type ObjectiveArn = `arn:${string}:controlcatalog:::objective/${string}`
export function objectiveArn(parameters: ObjectiveArnParameters): ObjectiveArn {
  return `arn:${parameters.partition ?? ''}:controlcatalog:::objective/${parameters.objectiveId}`
}