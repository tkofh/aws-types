export interface DetectorModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  detectorModelName: string
}
export type DetectorModelArn = `arn:${string}:iotevents:${string}:${string}:detectorModel/${string}`
export function detectorModelArn(parameters: DetectorModelArnParameters): DetectorModelArn {
  return `arn:${parameters.partition ?? ''}:iotevents:${parameters.region}:${parameters.account}:detectorModel/${parameters.detectorModelName}`
}

export interface AlarmModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  alarmModelName: string
}
export type AlarmModelArn = `arn:${string}:iotevents:${string}:${string}:alarmModel/${string}`
export function alarmModelArn(parameters: AlarmModelArnParameters): AlarmModelArn {
  return `arn:${parameters.partition ?? ''}:iotevents:${parameters.region}:${parameters.account}:alarmModel/${parameters.alarmModelName}`
}

export interface InputArnParameters {
  partition?: string | undefined
  region: string
  account: string
  inputName: string
}
export type InputArn = `arn:${string}:iotevents:${string}:${string}:input/${string}`
export function inputArn(parameters: InputArnParameters): InputArn {
  return `arn:${parameters.partition ?? ''}:iotevents:${parameters.region}:${parameters.account}:input/${parameters.inputName}`
}