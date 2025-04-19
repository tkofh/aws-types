import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetName: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'fleet', `arn:${string}:appstream:${string}:${string}:fleet/${string}`> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetName: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fleetName = parameters.fleetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:fleet/${this.fleetName}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(parameters: FleetArnParameters<Partition>) {
  return new FleetArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'image', `arn:${string}:appstream:${string}:${string}:image/${string}`> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageName: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageName = parameters.imageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:image/${this.imageName}` as const
  }
}
export type { ImageArn }
export function imageArn<Partition extends ArnPartition = 'aws'>(parameters: ImageArnParameters<Partition>) {
  return new ImageArn<Partition>(parameters)
}

export interface ImageBuilderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageBuilderName: string
}
class ImageBuilderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'image-builder', `arn:${string}:appstream:${string}:${string}:image-builder/${string}`> {
  readonly [ArnResourceTypeBrand] = 'image-builder' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageBuilderName: string
  constructor(parameters: ImageBuilderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageBuilderName = parameters.imageBuilderName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:image-builder/${this.imageBuilderName}` as const
  }
}
export type { ImageBuilderArn }
export function imageBuilderArn<Partition extends ArnPartition = 'aws'>(parameters: ImageBuilderArnParameters<Partition>) {
  return new ImageBuilderArn<Partition>(parameters)
}

export interface StackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackName: string
}
class StackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'stack', `arn:${string}:appstream:${string}:${string}:stack/${string}`> {
  readonly [ArnResourceTypeBrand] = 'stack' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackName: string
  constructor(parameters: StackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stackName = parameters.stackName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:stack/${this.stackName}` as const
  }
}
export type { StackArn }
export function stackArn<Partition extends ArnPartition = 'aws'>(parameters: StackArnParameters<Partition>) {
  return new StackArn<Partition>(parameters)
}

export interface AppBlockArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBlockName: string
}
class AppBlockArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'app-block', `arn:${string}:appstream:${string}:${string}:app-block/${string}`> {
  readonly [ArnResourceTypeBrand] = 'app-block' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBlockName: string
  constructor(parameters: AppBlockArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appBlockName = parameters.appBlockName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:app-block/${this.appBlockName}` as const
  }
}
export type { AppBlockArn }
export function appBlockArn<Partition extends ArnPartition = 'aws'>(parameters: AppBlockArnParameters<Partition>) {
  return new AppBlockArn<Partition>(parameters)
}

export interface ApplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
}
class ApplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'application', `arn:${string}:appstream:${string}:${string}:application/${string}`> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:application/${this.applicationName}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationArnParameters<Partition>) {
  return new ApplicationArn<Partition>(parameters)
}

export interface AppBlockBuilderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBlockBuilderName: string
}
class AppBlockBuilderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'app-block-builder', `arn:${string}:appstream:${string}:${string}:app-block-builder/${string}`> {
  readonly [ArnResourceTypeBrand] = 'app-block-builder' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBlockBuilderName: string
  constructor(parameters: AppBlockBuilderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appBlockBuilderName = parameters.appBlockBuilderName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:app-block-builder/${this.appBlockBuilderName}` as const
  }
}
export type { AppBlockBuilderArn }
export function appBlockBuilderArn<Partition extends ArnPartition = 'aws'>(parameters: AppBlockBuilderArnParameters<Partition>) {
  return new AppBlockBuilderArn<Partition>(parameters)
}