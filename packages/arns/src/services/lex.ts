import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface BotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
}
class BotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'bot', `arn:${string}:lex:${string}:${string}:bot:${string}`> {
  readonly [ArnResourceTypeBrand] = 'bot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
  constructor(parameters: BotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.botName = parameters.botName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot:${this.botName}` as const
  }
}
export type { BotArn }
export function botArn<Partition extends ArnPartition = 'aws'>(parameters: BotArnParameters<Partition>) {
  return new BotArn<Partition>(parameters)
}

export interface BotVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
  readonly botVersion: string
}
class BotVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'bot version', `arn:${string}:lex:${string}:${string}:bot:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'bot version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
  readonly botVersion: string
  constructor(parameters: BotVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.botName = parameters.botName
    this.botVersion = parameters.botVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot:${this.botName}:${this.botVersion}` as const
  }
}
export type { BotVersionArn }
export function botVersionArn<Partition extends ArnPartition = 'aws'>(parameters: BotVersionArnParameters<Partition>) {
  return new BotVersionArn<Partition>(parameters)
}

export interface BotAliasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
  readonly botAlias: string
}
class BotAliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'bot alias', `arn:${string}:lex:${string}:${string}:bot:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'bot alias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
  readonly botAlias: string
  constructor(parameters: BotAliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.botName = parameters.botName
    this.botAlias = parameters.botAlias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot:${this.botName}:${this.botAlias}` as const
  }
}
export type { BotAliasArn }
export function botAliasArn<Partition extends ArnPartition = 'aws'>(parameters: BotAliasArnParameters<Partition>) {
  return new BotAliasArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
  readonly botAlias: string
  readonly channelName: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channel', `arn:${string}:lex:${string}:${string}:bot-channel:${string}:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly botName: string
  readonly botAlias: string
  readonly channelName: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.botName = parameters.botName
    this.botAlias = parameters.botAlias
    this.channelName = parameters.channelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:bot-channel:${this.botName}:${this.botAlias}:${this.channelName}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelArnParameters<Partition>) {
  return new ChannelArn<Partition>(parameters)
}

export interface IntentVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly intentName: string
  readonly intentVersion: string
}
class IntentVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'intent version', `arn:${string}:lex:${string}:${string}:intent:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'intent version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly intentName: string
  readonly intentVersion: string
  constructor(parameters: IntentVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.intentName = parameters.intentName
    this.intentVersion = parameters.intentVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:intent:${this.intentName}:${this.intentVersion}` as const
  }
}
export type { IntentVersionArn }
export function intentVersionArn<Partition extends ArnPartition = 'aws'>(parameters: IntentVersionArnParameters<Partition>) {
  return new IntentVersionArn<Partition>(parameters)
}

export interface SlottypeVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly slotName: string
  readonly slotVersion: string
}
class SlottypeVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'slottype version', `arn:${string}:lex:${string}:${string}:slottype:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'slottype version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly slotName: string
  readonly slotVersion: string
  constructor(parameters: SlottypeVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.slotName = parameters.slotName
    this.slotVersion = parameters.slotVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:slottype:${this.slotName}:${this.slotVersion}` as const
  }
}
export type { SlottypeVersionArn }
export function slottypeVersionArn<Partition extends ArnPartition = 'aws'>(parameters: SlottypeVersionArnParameters<Partition>) {
  return new SlottypeVersionArn<Partition>(parameters)
}

export interface TestSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testSetId: string
}
class TestSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'test set', `arn:${string}:lex:${string}:${string}:test-set/${string}`> {
  readonly [ArnResourceTypeBrand] = 'test set' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testSetId: string
  constructor(parameters: TestSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.testSetId = parameters.testSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lex:${this.region}:${this.account}:test-set/${this.testSetId}` as const
  }
}
export type { TestSetArn }
export function testSetArn<Partition extends ArnPartition = 'aws'>(parameters: TestSetArnParameters<Partition>) {
  return new TestSetArn<Partition>(parameters)
}