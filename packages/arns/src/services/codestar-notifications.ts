export interface NotificationruleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  notificationRuleId: string
}
export type NotificationruleArn = `arn:${string}:codestar-notifications:${string}:${string}:notificationrule/${string}`
export function notificationruleArn(parameters: NotificationruleArnParameters): NotificationruleArn {
  return `arn:${parameters.partition ?? ''}:codestar-notifications:${parameters.region}:${parameters.account}:notificationrule/${parameters.notificationRuleId}`
}