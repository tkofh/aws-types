import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DetectorModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorModelName: string
}
class DetectorModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'detectorModel',
  `arn:${string}:iotevents:${string}:${string}:detectorModel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detectorModel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorModelName: string
  constructor(parameters: DetectorModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.detectorModelName = parameters.detectorModelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotevents:${this.region}:${this.account}:detectorModel/${this.detectorModelName}` as const
  }
}
export type { DetectorModelArn }
export function detectorModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorModelArnParameters<Partition>,
) {
  return new DetectorModelArn<Partition>(parameters)
}

export interface AlarmModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alarmModelName: string
}
class AlarmModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'alarmModel',
  `arn:${string}:iotevents:${string}:${string}:alarmModel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'alarmModel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alarmModelName: string
  constructor(parameters: AlarmModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.alarmModelName = parameters.alarmModelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotevents:${this.region}:${this.account}:alarmModel/${this.alarmModelName}` as const
  }
}
export type { AlarmModelArn }
export function alarmModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlarmModelArnParameters<Partition>,
) {
  return new AlarmModelArn<Partition>(parameters)
}

export interface InputArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inputName: string
}
class InputArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'input',
  `arn:${string}:iotevents:${string}:${string}:input/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inputName: string
  constructor(parameters: InputArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.inputName = parameters.inputName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotevents:${this.region}:${this.account}:input/${this.inputName}` as const
  }
}
export type { InputArn }
export function inputArn<Partition extends ArnPartition = 'aws'>(
  parameters: InputArnParameters<Partition>,
) {
  return new InputArn<Partition>(parameters)
}
