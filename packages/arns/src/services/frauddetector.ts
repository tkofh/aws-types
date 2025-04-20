import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PredictionBatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class PredictionBatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'batch-prediction',
  `arn:${string}:frauddetector:${string}:${string}:batch-prediction/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'batch-prediction' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: PredictionBatchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:batch-prediction/${this.pathResource}` as const
  }
}
export type { PredictionBatchArn }
export function predictionBatchArn<Partition extends ArnPartition = 'aws'>(
  parameters: PredictionBatchArnParameters<Partition>,
) {
  return new PredictionBatchArn<Partition>(parameters)
}

export interface DetectorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class DetectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'detector',
  `arn:${string}:frauddetector:${string}:${string}:detector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: DetectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:detector/${this.pathResource}` as const
  }
}
export type { DetectorArn }
export function detectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorArnParameters<Partition>,
) {
  return new DetectorArn<Partition>(parameters)
}

export interface VersionDetectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class VersionDetectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'detector-version',
  `arn:${string}:frauddetector:${string}:${string}:detector-version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detector-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: VersionDetectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:detector-version/${this.pathResource}` as const
  }
}
export type { VersionDetectorArn }
export function versionDetectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionDetectorArnParameters<Partition>,
) {
  return new VersionDetectorArn<Partition>(parameters)
}

export interface TypeEntityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class TypeEntityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'entity-type',
  `arn:${string}:frauddetector:${string}:${string}:entity-type/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entity-type' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: TypeEntityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:entity-type/${this.pathResource}` as const
  }
}
export type { TypeEntityArn }
export function typeEntityArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeEntityArnParameters<Partition>,
) {
  return new TypeEntityArn<Partition>(parameters)
}

export interface ModelExternalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class ModelExternalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'external-model',
  `arn:${string}:frauddetector:${string}:${string}:external-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'external-model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: ModelExternalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:external-model/${this.pathResource}` as const
  }
}
export type { ModelExternalArn }
export function modelExternalArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelExternalArnParameters<Partition>,
) {
  return new ModelExternalArn<Partition>(parameters)
}

export interface TypeEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class TypeEventArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'event-type',
  `arn:${string}:frauddetector:${string}:${string}:event-type/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-type' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: TypeEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:event-type/${this.pathResource}` as const
  }
}
export type { TypeEventArn }
export function typeEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeEventArnParameters<Partition>,
) {
  return new TypeEventArn<Partition>(parameters)
}

export interface LabelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class LabelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'label',
  `arn:${string}:frauddetector:${string}:${string}:label/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'label' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: LabelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:label/${this.pathResource}` as const
  }
}
export type { LabelArn }
export function labelArn<Partition extends ArnPartition = 'aws'>(
  parameters: LabelArnParameters<Partition>,
) {
  return new LabelArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:frauddetector:${string}:${string}:model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:model/${this.pathResource}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface VersionModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class VersionModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-version',
  `arn:${string}:frauddetector:${string}:${string}:model-version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: VersionModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:model-version/${this.pathResource}` as const
  }
}
export type { VersionModelArn }
export function versionModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionModelArnParameters<Partition>,
) {
  return new VersionModelArn<Partition>(parameters)
}

export interface OutcomeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class OutcomeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'outcome',
  `arn:${string}:frauddetector:${string}:${string}:outcome/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'outcome' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: OutcomeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:outcome/${this.pathResource}` as const
  }
}
export type { OutcomeArn }
export function outcomeArn<Partition extends ArnPartition = 'aws'>(
  parameters: OutcomeArnParameters<Partition>,
) {
  return new OutcomeArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:frauddetector:${string}:${string}:rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:rule/${this.pathResource}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface VariableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class VariableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'variable',
  `arn:${string}:frauddetector:${string}:${string}:variable/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'variable' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: VariableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:variable/${this.pathResource}` as const
  }
}
export type { VariableArn }
export function variableArn<Partition extends ArnPartition = 'aws'>(
  parameters: VariableArnParameters<Partition>,
) {
  return new VariableArn<Partition>(parameters)
}

export interface ImportBatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class ImportBatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'batch-import',
  `arn:${string}:frauddetector:${string}:${string}:batch-import/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'batch-import' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: ImportBatchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:batch-import/${this.pathResource}` as const
  }
}
export type { ImportBatchArn }
export function importBatchArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImportBatchArnParameters<Partition>,
) {
  return new ImportBatchArn<Partition>(parameters)
}

export interface ListArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class ListArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'list',
  `arn:${string}:frauddetector:${string}:${string}:list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'list' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: ListArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:list/${this.pathResource}` as const
  }
}
export type { ListArn }
export function listArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListArnParameters<Partition>,
) {
  return new ListArn<Partition>(parameters)
}
