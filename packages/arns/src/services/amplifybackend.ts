import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BackendCreatedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class BackendCreatedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'created-backend',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/*`
> {
  readonly [ArnResourceTypeBrand] = 'created-backend' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: BackendCreatedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/*` as const
  }
}
export type { BackendCreatedArn }
export function backendCreatedArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackendCreatedArnParameters<Partition>,
) {
  return new BackendCreatedArn<Partition>(parameters)
}

export interface BackendArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class BackendArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backend',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/*`
> {
  readonly [ArnResourceTypeBrand] = 'backend' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: BackendArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/*` as const
  }
}
export type { BackendArn }
export function backendArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackendArnParameters<Partition>,
) {
  return new BackendArn<Partition>(parameters)
}

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/environments/*`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/environments/*` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface ApiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class ApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'api',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/api/*`
> {
  readonly [ArnResourceTypeBrand] = 'api' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: ApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/api/*` as const
  }
}
export type { ApiArn }
export function apiArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiArnParameters<Partition>,
) {
  return new ApiArn<Partition>(parameters)
}

export interface AuthArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class AuthArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'auth',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/auth/*`
> {
  readonly [ArnResourceTypeBrand] = 'auth' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: AuthArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/auth/*` as const
  }
}
export type { AuthArn }
export function authArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthArnParameters<Partition>,
) {
  return new AuthArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/job/*`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/job/*` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface ConfigArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class ConfigArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'config',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/config/*`
> {
  readonly [ArnResourceTypeBrand] = 'config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: ConfigArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/config/*` as const
  }
}
export type { ConfigArn }
export function configArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigArnParameters<Partition>,
) {
  return new ConfigArn<Partition>(parameters)
}

export interface TokenArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class TokenArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'token',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/challenge/*`
> {
  readonly [ArnResourceTypeBrand] = 'token' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: TokenArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/challenge/*` as const
  }
}
export type { TokenArn }
export function tokenArn<Partition extends ArnPartition = 'aws'>(
  parameters: TokenArnParameters<Partition>,
) {
  return new TokenArn<Partition>(parameters)
}

export interface StorageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class StorageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'storage',
  `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/storage/*`
> {
  readonly [ArnResourceTypeBrand] = 'storage' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: StorageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifybackend:${this.region}:${this.account}:/backend/${this.idApp}/storage/*` as const
  }
}
export type { StorageArn }
export function storageArn<Partition extends ArnPartition = 'aws'>(
  parameters: StorageArnParameters<Partition>,
) {
  return new StorageArn<Partition>(parameters)
}
