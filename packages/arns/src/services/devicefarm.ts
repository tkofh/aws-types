import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:devicefarm:${string}:${string}:project:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:project:${this.resourceId}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface RunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'run',
  `arn:${string}:devicefarm:${string}:${string}:run:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'run' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:run:${this.resourceId}` as const
  }
}
export type { RunArn }
export function runArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunArnParameters<Partition>,
) {
  return new RunArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:devicefarm:${string}:${string}:job:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:job:${this.resourceId}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface SuiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class SuiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'suite',
  `arn:${string}:devicefarm:${string}:${string}:suite:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'suite' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SuiteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:suite:${this.resourceId}` as const
  }
}
export type { SuiteArn }
export function suiteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SuiteArnParameters<Partition>,
) {
  return new SuiteArn<Partition>(parameters)
}

export interface TestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'test',
  `arn:${string}:devicefarm:${string}:${string}:test:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'test' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TestArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:test:${this.resourceId}` as const
  }
}
export type { TestArn }
export function testArn<Partition extends ArnPartition = 'aws'>(
  parameters: TestArnParameters<Partition>,
) {
  return new TestArn<Partition>(parameters)
}

export interface UploadArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class UploadArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'upload',
  `arn:${string}:devicefarm:${string}:${string}:upload:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'upload' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: UploadArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:upload:${this.resourceId}` as const
  }
}
export type { UploadArn }
export function uploadArn<Partition extends ArnPartition = 'aws'>(
  parameters: UploadArnParameters<Partition>,
) {
  return new UploadArn<Partition>(parameters)
}

export interface ArtifactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ArtifactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'artifact',
  `arn:${string}:devicefarm:${string}:${string}:artifact:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'artifact' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ArtifactArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:artifact:${this.resourceId}` as const
  }
}
export type { ArtifactArn }
export function artifactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArtifactArnParameters<Partition>,
) {
  return new ArtifactArn<Partition>(parameters)
}

export interface SampleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class SampleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'sample',
  `arn:${string}:devicefarm:${string}:${string}:sample:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sample' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SampleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:sample:${this.resourceId}` as const
  }
}
export type { SampleArn }
export function sampleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SampleArnParameters<Partition>,
) {
  return new SampleArn<Partition>(parameters)
}

export interface NetworkprofileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class NetworkprofileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'networkprofile',
  `arn:${string}:devicefarm:${string}:${string}:networkprofile:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'networkprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: NetworkprofileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:networkprofile:${this.resourceId}` as const
  }
}
export type { NetworkprofileArn }
export function networkprofileArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkprofileArnParameters<Partition>,
) {
  return new NetworkprofileArn<Partition>(parameters)
}

export interface DeviceinstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
}
class DeviceinstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deviceinstance',
  `arn:${string}:devicefarm:${string}::deviceinstance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deviceinstance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
  constructor(parameters: DeviceinstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}::deviceinstance:${this.resourceId}` as const
  }
}
export type { DeviceinstanceArn }
export function deviceinstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceinstanceArnParameters<Partition>,
) {
  return new DeviceinstanceArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'session',
  `arn:${string}:devicefarm:${string}:${string}:session:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:session:${this.resourceId}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionArnParameters<Partition>,
) {
  return new SessionArn<Partition>(parameters)
}

export interface DevicepoolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DevicepoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'devicepool',
  `arn:${string}:devicefarm:${string}:${string}:devicepool:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'devicepool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DevicepoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:devicepool:${this.resourceId}` as const
  }
}
export type { DevicepoolArn }
export function devicepoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: DevicepoolArnParameters<Partition>,
) {
  return new DevicepoolArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:devicefarm:${string}::device:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}::device:${this.resourceId}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface InstanceprofileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class InstanceprofileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instanceprofile',
  `arn:${string}:devicefarm:${string}:${string}:instanceprofile:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instanceprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: InstanceprofileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:instanceprofile:${this.resourceId}` as const
  }
}
export type { InstanceprofileArn }
export function instanceprofileArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceprofileArnParameters<Partition>,
) {
  return new InstanceprofileArn<Partition>(parameters)
}

export interface VpceconfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class VpceconfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpceconfiguration',
  `arn:${string}:devicefarm:${string}:${string}:vpceconfiguration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpceconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: VpceconfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:vpceconfiguration:${this.resourceId}` as const
  }
}
export type { VpceconfigurationArn }
export function vpceconfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpceconfigurationArnParameters<Partition>,
) {
  return new VpceconfigurationArn<Partition>(parameters)
}

export interface TestgridProjectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TestgridProjectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'testgrid-project',
  `arn:${string}:devicefarm:${string}:${string}:testgrid-project:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'testgrid-project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TestgridProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:testgrid-project:${this.resourceId}` as const
  }
}
export type { TestgridProjectArn }
export function testgridProjectArn<Partition extends ArnPartition = 'aws'>(
  parameters: TestgridProjectArnParameters<Partition>,
) {
  return new TestgridProjectArn<Partition>(parameters)
}

export interface TestgridSessionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TestgridSessionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'testgrid-session',
  `arn:${string}:devicefarm:${string}:${string}:testgrid-session:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'testgrid-session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TestgridSessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:testgrid-session:${this.resourceId}` as const
  }
}
export type { TestgridSessionArn }
export function testgridSessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: TestgridSessionArnParameters<Partition>,
) {
  return new TestgridSessionArn<Partition>(parameters)
}
