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

export interface NetworkProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class NetworkProfileArn<
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
  constructor(parameters: NetworkProfileArnParameters<Partition>) {
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
export type { NetworkProfileArn }
export function networkProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkProfileArnParameters<Partition>,
) {
  return new NetworkProfileArn<Partition>(parameters)
}

export interface DeviceInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
}
class DeviceInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deviceinstance',
  `arn:${string}:devicefarm:${string}::deviceinstance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deviceinstance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly resourceId: string
  constructor(parameters: DeviceInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}::deviceinstance:${this.resourceId}` as const
  }
}
export type { DeviceInstanceArn }
export function deviceInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceInstanceArnParameters<Partition>,
) {
  return new DeviceInstanceArn<Partition>(parameters)
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

export interface DevicePoolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DevicePoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'devicepool',
  `arn:${string}:devicefarm:${string}:${string}:devicepool:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'devicepool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DevicePoolArnParameters<Partition>) {
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
export type { DevicePoolArn }
export function devicePoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: DevicePoolArnParameters<Partition>,
) {
  return new DevicePoolArn<Partition>(parameters)
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

export interface InstanceProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class InstanceProfileArn<
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
  constructor(parameters: InstanceProfileArnParameters<Partition>) {
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
export type { InstanceProfileArn }
export function instanceProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceProfileArnParameters<Partition>,
) {
  return new InstanceProfileArn<Partition>(parameters)
}

export interface VpceConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class VpceConfigurationArn<
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
  constructor(parameters: VpceConfigurationArnParameters<Partition>) {
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
export type { VpceConfigurationArn }
export function vpceConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpceConfigurationArnParameters<Partition>,
) {
  return new VpceConfigurationArn<Partition>(parameters)
}

export interface TestGridProjectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TestGridProjectArn<
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
  constructor(parameters: TestGridProjectArnParameters<Partition>) {
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
export type { TestGridProjectArn }
export function testGridProjectArn<Partition extends ArnPartition = 'aws'>(
  parameters: TestGridProjectArnParameters<Partition>,
) {
  return new TestGridProjectArn<Partition>(parameters)
}

export interface TestGridSessionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TestGridSessionArn<
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
  constructor(parameters: TestGridSessionArnParameters<Partition>) {
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
export type { TestGridSessionArn }
export function testGridSessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: TestGridSessionArnParameters<Partition>,
) {
  return new TestGridSessionArn<Partition>(parameters)
}
