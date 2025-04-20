import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetData: string
  readonly idSetData: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:lookoutequipment:${string}:${string}:dataset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetData: string
  readonly idSetData: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetData = parameters.nameSetData
    this.idSetData = parameters.idSetData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:dataset/${this.nameSetData}/${this.idSetData}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModel: string
  readonly idModel: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:lookoutequipment:${string}:${string}:model/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModel: string
  readonly idModel: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameModel = parameters.nameModel
    this.idModel = parameters.idModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:model/${this.nameModel}/${this.idModel}` as const
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
  readonly nameModel: string
  readonly idModel: string
  readonly numberVersionModel: string
}
class VersionModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'model-version',
  `arn:${string}:lookoutequipment:${string}:${string}:model/${string}/${string}/model-version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModel: string
  readonly idModel: string
  readonly numberVersionModel: string
  constructor(parameters: VersionModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameModel = parameters.nameModel
    this.idModel = parameters.idModel
    this.numberVersionModel = parameters.numberVersionModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:model/${this.nameModel}/${this.idModel}/model-version/${this.numberVersionModel}` as const
  }
}
export type { VersionModelArn }
export function versionModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionModelArnParameters<Partition>,
) {
  return new VersionModelArn<Partition>(parameters)
}

export interface SchedulerInferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchedulerInference: string
  readonly idSchedulerInference: string
}
class SchedulerInferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'inference-scheduler',
  `arn:${string}:lookoutequipment:${string}:${string}:inference-scheduler/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'inference-scheduler' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchedulerInference: string
  readonly idSchedulerInference: string
  constructor(parameters: SchedulerInferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSchedulerInference = parameters.nameSchedulerInference
    this.idSchedulerInference = parameters.idSchedulerInference
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:inference-scheduler/${this.nameSchedulerInference}/${this.idSchedulerInference}` as const
  }
}
export type { SchedulerInferenceArn }
export function schedulerInferenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchedulerInferenceArnParameters<Partition>,
) {
  return new SchedulerInferenceArn<Partition>(parameters)
}

export interface GroupLabelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLabel: string
  readonly idGroupLabel: string
}
class GroupLabelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'label-group',
  `arn:${string}:lookoutequipment:${string}:${string}:label-group/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'label-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLabel: string
  readonly idGroupLabel: string
  constructor(parameters: GroupLabelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupLabel = parameters.nameGroupLabel
    this.idGroupLabel = parameters.idGroupLabel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:label-group/${this.nameGroupLabel}/${this.idGroupLabel}` as const
  }
}
export type { GroupLabelArn }
export function groupLabelArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupLabelArnParameters<Partition>,
) {
  return new GroupLabelArn<Partition>(parameters)
}
