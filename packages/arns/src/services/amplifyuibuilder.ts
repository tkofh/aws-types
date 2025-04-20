import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResourceJobCodegenArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
}
class ResourceJobCodegenArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CodegenJobResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/codegen-jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CodegenJobResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
  constructor(parameters: ResourceJobCodegenArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameEnvironment = parameters.nameEnvironment
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.idApp}/environment/${this.nameEnvironment}/codegen-jobs/${this.id}` as const
  }
}
export type { ResourceJobCodegenArn }
export function resourceJobCodegenArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceJobCodegenArnParameters<Partition>,
) {
  return new ResourceJobCodegenArn<Partition>(parameters)
}

export interface ResourceComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
}
class ResourceComponentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ComponentResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/components/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ComponentResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
  constructor(parameters: ResourceComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameEnvironment = parameters.nameEnvironment
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.idApp}/environment/${this.nameEnvironment}/components/${this.id}` as const
  }
}
export type { ResourceComponentArn }
export function resourceComponentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceComponentArnParameters<Partition>,
) {
  return new ResourceComponentArn<Partition>(parameters)
}

export interface ResourceFormArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
}
class ResourceFormArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'FormResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/forms/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'FormResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
  constructor(parameters: ResourceFormArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameEnvironment = parameters.nameEnvironment
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.idApp}/environment/${this.nameEnvironment}/forms/${this.id}` as const
  }
}
export type { ResourceFormArn }
export function resourceFormArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceFormArnParameters<Partition>,
) {
  return new ResourceFormArn<Partition>(parameters)
}

export interface ResourceThemeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
}
class ResourceThemeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ThemeResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/themes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ThemeResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameEnvironment: string
  readonly id: string
  constructor(parameters: ResourceThemeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameEnvironment = parameters.nameEnvironment
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.idApp}/environment/${this.nameEnvironment}/themes/${this.id}` as const
  }
}
export type { ResourceThemeArn }
export function resourceThemeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceThemeArnParameters<Partition>,
) {
  return new ResourceThemeArn<Partition>(parameters)
}
