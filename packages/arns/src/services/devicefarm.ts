import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:devicefarm:${string}:${string}:project:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:project:${this.idResource}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface RunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class RunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'run',
  `arn:${string}:devicefarm:${string}:${string}:run:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'run' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: RunArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:run:${this.idResource}` as const
  }
}
export type { RunArn }
export function runArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunArnParameters<Partition>,
) {
  return new RunArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:devicefarm:${string}:${string}:job:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:job:${this.idResource}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface SuiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SuiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'suite',
  `arn:${string}:devicefarm:${string}:${string}:suite:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'suite' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SuiteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:suite:${this.idResource}` as const
  }
}
export type { SuiteArn }
export function suiteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SuiteArnParameters<Partition>,
) {
  return new SuiteArn<Partition>(parameters)
}

export interface TestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'test',
  `arn:${string}:devicefarm:${string}:${string}:test:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'test' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:test:${this.idResource}` as const
  }
}
export type { TestArn }
export function testArn<Partition extends ArnPartition = 'aws'>(
  parameters: TestArnParameters<Partition>,
) {
  return new TestArn<Partition>(parameters)
}

export interface UploadArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class UploadArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'upload',
  `arn:${string}:devicefarm:${string}:${string}:upload:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'upload' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: UploadArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:upload:${this.idResource}` as const
  }
}
export type { UploadArn }
export function uploadArn<Partition extends ArnPartition = 'aws'>(
  parameters: UploadArnParameters<Partition>,
) {
  return new UploadArn<Partition>(parameters)
}

export interface ArtifactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ArtifactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'artifact',
  `arn:${string}:devicefarm:${string}:${string}:artifact:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'artifact' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ArtifactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:artifact:${this.idResource}` as const
  }
}
export type { ArtifactArn }
export function artifactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArtifactArnParameters<Partition>,
) {
  return new ArtifactArn<Partition>(parameters)
}

export interface SampleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SampleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'sample',
  `arn:${string}:devicefarm:${string}:${string}:sample:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sample' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SampleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:sample:${this.idResource}` as const
  }
}
export type { SampleArn }
export function sampleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SampleArnParameters<Partition>,
) {
  return new SampleArn<Partition>(parameters)
}

export interface ProfileNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProfileNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'networkprofile',
  `arn:${string}:devicefarm:${string}:${string}:networkprofile:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'networkprofile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProfileNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:networkprofile:${this.idResource}` as const
  }
}
export type { ProfileNetworkArn }
export function profileNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileNetworkArnParameters<Partition>,
) {
  return new ProfileNetworkArn<Partition>(parameters)
}

export interface InstanceDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idResource: string
}
class InstanceDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deviceinstance',
  `arn:${string}:devicefarm:${string}::deviceinstance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deviceinstance' as const
  readonly partition: string
  readonly region: string
  readonly idResource: string
  constructor(parameters: InstanceDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}::deviceinstance:${this.idResource}` as const
  }
}
export type { InstanceDeviceArn }
export function instanceDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceDeviceArnParameters<Partition>,
) {
  return new InstanceDeviceArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'session',
  `arn:${string}:devicefarm:${string}:${string}:session:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:session:${this.idResource}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionArnParameters<Partition>,
) {
  return new SessionArn<Partition>(parameters)
}

export interface PoolDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class PoolDeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'devicepool',
  `arn:${string}:devicefarm:${string}:${string}:devicepool:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'devicepool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PoolDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:devicepool:${this.idResource}` as const
  }
}
export type { PoolDeviceArn }
export function poolDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolDeviceArnParameters<Partition>,
) {
  return new PoolDeviceArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idResource: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:devicefarm:${string}::device:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: string
  readonly region: string
  readonly idResource: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}::device:${this.idResource}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface ProfileInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProfileInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instanceprofile',
  `arn:${string}:devicefarm:${string}:${string}:instanceprofile:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instanceprofile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProfileInstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:instanceprofile:${this.idResource}` as const
  }
}
export type { ProfileInstanceArn }
export function profileInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileInstanceArnParameters<Partition>,
) {
  return new ProfileInstanceArn<Partition>(parameters)
}

export interface ConfigurationVpceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationVpceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpceconfiguration',
  `arn:${string}:devicefarm:${string}:${string}:vpceconfiguration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpceconfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationVpceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:vpceconfiguration:${this.idResource}` as const
  }
}
export type { ConfigurationVpceArn }
export function configurationVpceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationVpceArnParameters<Partition>,
) {
  return new ConfigurationVpceArn<Partition>(parameters)
}

export interface ProjectGridTestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProjectGridTestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'testgrid-project',
  `arn:${string}:devicefarm:${string}:${string}:testgrid-project:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'testgrid-project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProjectGridTestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:testgrid-project:${this.idResource}` as const
  }
}
export type { ProjectGridTestArn }
export function projectGridTestArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectGridTestArnParameters<Partition>,
) {
  return new ProjectGridTestArn<Partition>(parameters)
}

export interface SessionGridTestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SessionGridTestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'testgrid-session',
  `arn:${string}:devicefarm:${string}:${string}:testgrid-session:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'testgrid-session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SessionGridTestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:devicefarm:${this.region}:${this.account}:testgrid-session:${this.idResource}` as const
  }
}
export type { SessionGridTestArn }
export function sessionGridTestArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionGridTestArnParameters<Partition>,
) {
  return new SessionGridTestArn<Partition>(parameters)
}
