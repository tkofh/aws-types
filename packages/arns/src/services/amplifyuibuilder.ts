import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CodegenJobResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
}
class CodegenJobResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CodegenJobResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/codegen-jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CodegenJobResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
  constructor(parameters: CodegenJobResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.environmentName = parameters.environmentName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.appId}/environment/${this.environmentName}/codegen-jobs/${this.id}` as const
  }
}
export type { CodegenJobResourceArn }
export function codegenJobResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: CodegenJobResourceArnParameters<Partition>,
) {
  return new CodegenJobResourceArn<Partition>(parameters)
}

export interface ComponentResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
}
class ComponentResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ComponentResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/components/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ComponentResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
  constructor(parameters: ComponentResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.environmentName = parameters.environmentName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.appId}/environment/${this.environmentName}/components/${this.id}` as const
  }
}
export type { ComponentResourceArn }
export function componentResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentResourceArnParameters<Partition>,
) {
  return new ComponentResourceArn<Partition>(parameters)
}

export interface FormResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
}
class FormResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'FormResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/forms/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'FormResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
  constructor(parameters: FormResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.environmentName = parameters.environmentName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.appId}/environment/${this.environmentName}/forms/${this.id}` as const
  }
}
export type { FormResourceArn }
export function formResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: FormResourceArnParameters<Partition>,
) {
  return new FormResourceArn<Partition>(parameters)
}

export interface ThemeResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
}
class ThemeResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ThemeResource',
  `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/themes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ThemeResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly environmentName: string
  readonly id: string
  constructor(parameters: ThemeResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.environmentName = parameters.environmentName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:amplifyuibuilder:${this.region}:${this.account}:app/${this.appId}/environment/${this.environmentName}/themes/${this.id}` as const
  }
}
export type { ThemeResourceArn }
export function themeResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThemeResourceArnParameters<Partition>,
) {
  return new ThemeResourceArn<Partition>(parameters)
}
