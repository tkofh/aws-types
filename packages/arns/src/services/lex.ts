export interface BotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  botName: string
}
export type BotArn = `arn:${string}:lex:${string}:${string}:bot:${string}`
export function botArn(parameters: BotArnParameters): BotArn {
  return `arn:${parameters.partition ?? ''}:lex:${parameters.region}:${parameters.account}:bot:${parameters.botName}`
}

export interface BotVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  botName: string
  botVersion: string
}
export type BotVersionArn = `arn:${string}:lex:${string}:${string}:bot:${string}:${string}`
export function botVersionArn(parameters: BotVersionArnParameters): BotVersionArn {
  return `arn:${parameters.partition ?? ''}:lex:${parameters.region}:${parameters.account}:bot:${parameters.botName}:${parameters.botVersion}`
}

export interface BotAliasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  botName: string
  botAlias: string
}
export type BotAliasArn = `arn:${string}:lex:${string}:${string}:bot:${string}:${string}`
export function botAliasArn(parameters: BotAliasArnParameters): BotAliasArn {
  return `arn:${parameters.partition ?? ''}:lex:${parameters.region}:${parameters.account}:bot:${parameters.botName}:${parameters.botAlias}`
}

export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  botName: string
  botAlias: string
  channelName: string
}
export type ChannelArn = `arn:${string}:lex:${string}:${string}:bot-channel:${string}:${string}:${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:lex:${parameters.region}:${parameters.account}:bot-channel:${parameters.botName}:${parameters.botAlias}:${parameters.channelName}`
}

export interface IntentVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  intentName: string
  intentVersion: string
}
export type IntentVersionArn = `arn:${string}:lex:${string}:${string}:intent:${string}:${string}`
export function intentVersionArn(parameters: IntentVersionArnParameters): IntentVersionArn {
  return `arn:${parameters.partition ?? ''}:lex:${parameters.region}:${parameters.account}:intent:${parameters.intentName}:${parameters.intentVersion}`
}

export interface SlottypeVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  slotName: string
  slotVersion: string
}
export type SlottypeVersionArn = `arn:${string}:lex:${string}:${string}:slottype:${string}:${string}`
export function slottypeVersionArn(parameters: SlottypeVersionArnParameters): SlottypeVersionArn {
  return `arn:${parameters.partition ?? ''}:lex:${parameters.region}:${parameters.account}:slottype:${parameters.slotName}:${parameters.slotVersion}`
}

export interface TestSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  testSetId: string
}
export type TestSetArn = `arn:${string}:lex:${string}:${string}:test-set/${string}`
export function testSetArn(parameters: TestSetArnParameters): TestSetArn {
  return `arn:${parameters.partition ?? ''}:lex:${parameters.region}:${parameters.account}:test-set/${parameters.testSetId}`
}