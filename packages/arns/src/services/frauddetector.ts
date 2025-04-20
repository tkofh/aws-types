import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BatchPredictionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class BatchPredictionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'batch-prediction',
  `arn:${string}:frauddetector:${string}:${string}:batch-prediction/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'batch-prediction' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: BatchPredictionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:batch-prediction/${this.resourcePath}` as const
  }
}
export type { BatchPredictionArn }
export function batchPredictionArn<Partition extends ArnPartition = 'aws'>(
  parameters: BatchPredictionArnParameters<Partition>,
) {
  return new BatchPredictionArn<Partition>(parameters)
}

export interface DetectorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class DetectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'detector',
  `arn:${string}:frauddetector:${string}:${string}:detector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: DetectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:detector/${this.resourcePath}` as const
  }
}
export type { DetectorArn }
export function detectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorArnParameters<Partition>,
) {
  return new DetectorArn<Partition>(parameters)
}

export interface DetectorVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class DetectorVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'detector-version',
  `arn:${string}:frauddetector:${string}:${string}:detector-version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detector-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: DetectorVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:detector-version/${this.resourcePath}` as const
  }
}
export type { DetectorVersionArn }
export function detectorVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorVersionArnParameters<Partition>,
) {
  return new DetectorVersionArn<Partition>(parameters)
}

export interface EntityTypeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class EntityTypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'entity-type',
  `arn:${string}:frauddetector:${string}:${string}:entity-type/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entity-type' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: EntityTypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:entity-type/${this.resourcePath}` as const
  }
}
export type { EntityTypeArn }
export function entityTypeArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntityTypeArnParameters<Partition>,
) {
  return new EntityTypeArn<Partition>(parameters)
}

export interface ExternalModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class ExternalModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'external-model',
  `arn:${string}:frauddetector:${string}:${string}:external-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'external-model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: ExternalModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:external-model/${this.resourcePath}` as const
  }
}
export type { ExternalModelArn }
export function externalModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExternalModelArnParameters<Partition>,
) {
  return new ExternalModelArn<Partition>(parameters)
}

export interface EventTypeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class EventTypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'event-type',
  `arn:${string}:frauddetector:${string}:${string}:event-type/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-type' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: EventTypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:event-type/${this.resourcePath}` as const
  }
}
export type { EventTypeArn }
export function eventTypeArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventTypeArnParameters<Partition>,
) {
  return new EventTypeArn<Partition>(parameters)
}

export interface LabelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class LabelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'label',
  `arn:${string}:frauddetector:${string}:${string}:label/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'label' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: LabelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:label/${this.resourcePath}` as const
  }
}
export type { LabelArn }
export function labelArn<Partition extends ArnPartition = 'aws'>(
  parameters: LabelArnParameters<Partition>,
) {
  return new LabelArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:frauddetector:${string}:${string}:model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:model/${this.resourcePath}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface ModelVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class ModelVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-version',
  `arn:${string}:frauddetector:${string}:${string}:model-version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: ModelVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:model-version/${this.resourcePath}` as const
  }
}
export type { ModelVersionArn }
export function modelVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelVersionArnParameters<Partition>,
) {
  return new ModelVersionArn<Partition>(parameters)
}

export interface OutcomeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class OutcomeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'outcome',
  `arn:${string}:frauddetector:${string}:${string}:outcome/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'outcome' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: OutcomeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:outcome/${this.resourcePath}` as const
  }
}
export type { OutcomeArn }
export function outcomeArn<Partition extends ArnPartition = 'aws'>(
  parameters: OutcomeArnParameters<Partition>,
) {
  return new OutcomeArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:frauddetector:${string}:${string}:rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:rule/${this.resourcePath}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface VariableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class VariableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'variable',
  `arn:${string}:frauddetector:${string}:${string}:variable/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'variable' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: VariableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:variable/${this.resourcePath}` as const
  }
}
export type { VariableArn }
export function variableArn<Partition extends ArnPartition = 'aws'>(
  parameters: VariableArnParameters<Partition>,
) {
  return new VariableArn<Partition>(parameters)
}

export interface BatchImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class BatchImportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'batch-import',
  `arn:${string}:frauddetector:${string}:${string}:batch-import/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'batch-import' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: BatchImportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:batch-import/${this.resourcePath}` as const
  }
}
export type { BatchImportArn }
export function batchImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: BatchImportArnParameters<Partition>,
) {
  return new BatchImportArn<Partition>(parameters)
}

export interface ListArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class ListArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'list',
  `arn:${string}:frauddetector:${string}:${string}:list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'list' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: ListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:frauddetector:${this.region}:${this.account}:list/${this.resourcePath}` as const
  }
}
export type { ListArn }
export function listArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListArnParameters<Partition>,
) {
  return new ListArn<Partition>(parameters)
}
