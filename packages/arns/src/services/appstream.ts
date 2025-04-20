import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleet: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:appstream:${string}:${string}:fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleet: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFleet = parameters.nameFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:fleet/${this.nameFleet}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'image',
  `arn:${string}:appstream:${string}:${string}:image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameImage: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameImage = parameters.nameImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:image/${this.nameImage}` as const
  }
}
export type { ImageArn }
export function imageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageArnParameters<Partition>,
) {
  return new ImageArn<Partition>(parameters)
}

export interface BuilderImageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBuilderImage: string
}
class BuilderImageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'image-builder',
  `arn:${string}:appstream:${string}:${string}:image-builder/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image-builder' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBuilderImage: string
  constructor(parameters: BuilderImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBuilderImage = parameters.nameBuilderImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:image-builder/${this.nameBuilderImage}` as const
  }
}
export type { BuilderImageArn }
export function builderImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: BuilderImageArnParameters<Partition>,
) {
  return new BuilderImageArn<Partition>(parameters)
}

export interface StackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStack: string
}
class StackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stack',
  `arn:${string}:appstream:${string}:${string}:stack/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stack' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStack: string
  constructor(parameters: StackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStack = parameters.nameStack
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:stack/${this.nameStack}` as const
  }
}
export type { StackArn }
export function stackArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackArnParameters<Partition>,
) {
  return new StackArn<Partition>(parameters)
}

export interface BlockAppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBlockApp: string
}
class BlockAppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'app-block',
  `arn:${string}:appstream:${string}:${string}:app-block/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-block' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBlockApp: string
  constructor(parameters: BlockAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBlockApp = parameters.nameBlockApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:app-block/${this.nameBlockApp}` as const
  }
}
export type { BlockAppArn }
export function blockAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: BlockAppArnParameters<Partition>,
) {
  return new BlockAppArn<Partition>(parameters)
}

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:appstream:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:application/${this.nameApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface BuilderBlockAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBuilderBlockApp: string
}
class BuilderBlockAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-block-builder',
  `arn:${string}:appstream:${string}:${string}:app-block-builder/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-block-builder' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBuilderBlockApp: string
  constructor(parameters: BuilderBlockAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBuilderBlockApp = parameters.nameBuilderBlockApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appstream:${this.region}:${this.account}:app-block-builder/${this.nameBuilderBlockApp}` as const
  }
}
export type { BuilderBlockAppArn }
export function builderBlockAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: BuilderBlockAppArnParameters<Partition>,
) {
  return new BuilderBlockAppArn<Partition>(parameters)
}
