import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ModelDetectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModelDetector: string
}
class ModelDetectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'detectorModel',
  `arn:${string}:iotevents:${string}:${string}:detectorModel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detectorModel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModelDetector: string
  constructor(parameters: ModelDetectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameModelDetector = parameters.nameModelDetector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotevents:${this.region}:${this.account}:detectorModel/${this.nameModelDetector}` as const
  }
}
export type { ModelDetectorArn }
export function modelDetectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelDetectorArnParameters<Partition>,
) {
  return new ModelDetectorArn<Partition>(parameters)
}

export interface ModelAlarmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModelAlarm: string
}
class ModelAlarmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'alarmModel',
  `arn:${string}:iotevents:${string}:${string}:alarmModel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'alarmModel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModelAlarm: string
  constructor(parameters: ModelAlarmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameModelAlarm = parameters.nameModelAlarm
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotevents:${this.region}:${this.account}:alarmModel/${this.nameModelAlarm}` as const
  }
}
export type { ModelAlarmArn }
export function modelAlarmArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelAlarmArnParameters<Partition>,
) {
  return new ModelAlarmArn<Partition>(parameters)
}

export interface InputArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInput: string
}
class InputArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'input',
  `arn:${string}:iotevents:${string}:${string}:input/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'input' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInput: string
  constructor(parameters: InputArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInput = parameters.nameInput
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotevents:${this.region}:${this.account}:input/${this.nameInput}` as const
  }
}
export type { InputArn }
export function inputArn<Partition extends ArnPartition = 'aws'>(
  parameters: InputArnParameters<Partition>,
) {
  return new InputArn<Partition>(parameters)
}
