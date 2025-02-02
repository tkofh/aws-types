export interface LexiconArnParameters {
  partition?: string | undefined
  region: string
  account: string
  lexiconName: string
}
export type LexiconArn = `arn:${string}:polly:${string}:${string}:lexicon/${string}`
export function lexiconArn(parameters: LexiconArnParameters): LexiconArn {
  return `arn:${parameters.partition ?? 'aws'}:polly:${parameters.region}:${parameters.account}:lexicon/${parameters.lexiconName}`
}