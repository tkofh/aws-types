export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProjectArn = `arn:${string}:devicefarm:${string}:${string}:project:${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:project:${parameters.resourceId}`
}

export interface RunArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RunArn = `arn:${string}:devicefarm:${string}:${string}:run:${string}`
export function runArn(parameters: RunArnParameters): RunArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:run:${parameters.resourceId}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type JobArn = `arn:${string}:devicefarm:${string}:${string}:job:${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:job:${parameters.resourceId}`
}

export interface SuiteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SuiteArn = `arn:${string}:devicefarm:${string}:${string}:suite:${string}`
export function suiteArn(parameters: SuiteArnParameters): SuiteArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:suite:${parameters.resourceId}`
}

export interface TestArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TestArn = `arn:${string}:devicefarm:${string}:${string}:test:${string}`
export function testArn(parameters: TestArnParameters): TestArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:test:${parameters.resourceId}`
}

export interface UploadArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type UploadArn = `arn:${string}:devicefarm:${string}:${string}:upload:${string}`
export function uploadArn(parameters: UploadArnParameters): UploadArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:upload:${parameters.resourceId}`
}

export interface ArtifactArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ArtifactArn = `arn:${string}:devicefarm:${string}:${string}:artifact:${string}`
export function artifactArn(parameters: ArtifactArnParameters): ArtifactArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:artifact:${parameters.resourceId}`
}

export interface SampleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SampleArn = `arn:${string}:devicefarm:${string}:${string}:sample:${string}`
export function sampleArn(parameters: SampleArnParameters): SampleArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:sample:${parameters.resourceId}`
}

export interface NetworkprofileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type NetworkprofileArn = `arn:${string}:devicefarm:${string}:${string}:networkprofile:${string}`
export function networkprofileArn(parameters: NetworkprofileArnParameters): NetworkprofileArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:networkprofile:${parameters.resourceId}`
}

export interface DeviceinstanceArnParameters {
  partition?: string | undefined
  region: string
  resourceId: string
}
export type DeviceinstanceArn = `arn:${string}:devicefarm:${string}::deviceinstance:${string}`
export function deviceinstanceArn(parameters: DeviceinstanceArnParameters): DeviceinstanceArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}::deviceinstance:${parameters.resourceId}`
}

export interface SessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SessionArn = `arn:${string}:devicefarm:${string}:${string}:session:${string}`
export function sessionArn(parameters: SessionArnParameters): SessionArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:session:${parameters.resourceId}`
}

export interface DevicepoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DevicepoolArn = `arn:${string}:devicefarm:${string}:${string}:devicepool:${string}`
export function devicepoolArn(parameters: DevicepoolArnParameters): DevicepoolArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:devicepool:${parameters.resourceId}`
}

export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  resourceId: string
}
export type DeviceArn = `arn:${string}:devicefarm:${string}::device:${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}::device:${parameters.resourceId}`
}

export interface InstanceprofileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type InstanceprofileArn = `arn:${string}:devicefarm:${string}:${string}:instanceprofile:${string}`
export function instanceprofileArn(parameters: InstanceprofileArnParameters): InstanceprofileArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:instanceprofile:${parameters.resourceId}`
}

export interface VpceconfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type VpceconfigurationArn = `arn:${string}:devicefarm:${string}:${string}:vpceconfiguration:${string}`
export function vpceconfigurationArn(parameters: VpceconfigurationArnParameters): VpceconfigurationArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:vpceconfiguration:${parameters.resourceId}`
}

export interface TestgridProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TestgridProjectArn = `arn:${string}:devicefarm:${string}:${string}:testgrid-project:${string}`
export function testgridProjectArn(parameters: TestgridProjectArnParameters): TestgridProjectArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:testgrid-project:${parameters.resourceId}`
}

export interface TestgridSessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TestgridSessionArn = `arn:${string}:devicefarm:${string}:${string}:testgrid-session:${string}`
export function testgridSessionArn(parameters: TestgridSessionArnParameters): TestgridSessionArn {
  return `arn:${parameters.partition ?? ''}:devicefarm:${parameters.region}:${parameters.account}:testgrid-session:${parameters.resourceId}`
}