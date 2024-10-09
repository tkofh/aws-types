export interface BytematchsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type BytematchsetArn = `arn:${string}:waf::${string}:bytematchset/${string}`
export function bytematchsetArn(parameters: BytematchsetArnParameters): BytematchsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:bytematchset/${parameters.id}`
}

export interface IpsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type IpsetArn = `arn:${string}:waf::${string}:ipset/${string}`
export function ipsetArn(parameters: IpsetArnParameters): IpsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:ipset/${parameters.id}`
}

export interface RatebasedruleArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type RatebasedruleArn = `arn:${string}:waf::${string}:ratebasedrule/${string}`
export function ratebasedruleArn(parameters: RatebasedruleArnParameters): RatebasedruleArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:ratebasedrule/${parameters.id}`
}

export interface RuleArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type RuleArn = `arn:${string}:waf::${string}:rule/${string}`
export function ruleArn(parameters: RuleArnParameters): RuleArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:rule/${parameters.id}`
}

export interface SizeconstraintsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type SizeconstraintsetArn = `arn:${string}:waf::${string}:sizeconstraintset/${string}`
export function sizeconstraintsetArn(parameters: SizeconstraintsetArnParameters): SizeconstraintsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:sizeconstraintset/${parameters.id}`
}

export interface SqlinjectionmatchsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type SqlinjectionmatchsetArn = `arn:${string}:waf::${string}:sqlinjectionset/${string}`
export function sqlinjectionmatchsetArn(parameters: SqlinjectionmatchsetArnParameters): SqlinjectionmatchsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:sqlinjectionset/${parameters.id}`
}

export interface WebaclArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type WebaclArn = `arn:${string}:waf::${string}:webacl/${string}`
export function webaclArn(parameters: WebaclArnParameters): WebaclArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:webacl/${parameters.id}`
}

export interface XssmatchsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type XssmatchsetArn = `arn:${string}:waf::${string}:xssmatchset/${string}`
export function xssmatchsetArn(parameters: XssmatchsetArnParameters): XssmatchsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:xssmatchset/${parameters.id}`
}

export interface RegexmatchsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type RegexmatchsetArn = `arn:${string}:waf::${string}:regexmatch/${string}`
export function regexmatchsetArn(parameters: RegexmatchsetArnParameters): RegexmatchsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:regexmatch/${parameters.id}`
}

export interface RegexpatternsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type RegexpatternsetArn = `arn:${string}:waf::${string}:regexpatternset/${string}`
export function regexpatternsetArn(parameters: RegexpatternsetArnParameters): RegexpatternsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:regexpatternset/${parameters.id}`
}

export interface GeomatchsetArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type GeomatchsetArn = `arn:${string}:waf::${string}:geomatchset/${string}`
export function geomatchsetArn(parameters: GeomatchsetArnParameters): GeomatchsetArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:geomatchset/${parameters.id}`
}

export interface RulegroupArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type RulegroupArn = `arn:${string}:waf::${string}:rulegroup/${string}`
export function rulegroupArn(parameters: RulegroupArnParameters): RulegroupArn {
  return `arn:${parameters.partition ?? ''}:waf::${parameters.account}:rulegroup/${parameters.id}`
}