export interface EmailContactResourceArnParameters {
  partition?: string | undefined
  account: string
  emailContactId: string
}
export type EmailContactResourceArn = `arn:${string}:notifications-contacts::${string}:emailcontact/${string}`
export function emailContactResourceArn(parameters: EmailContactResourceArnParameters): EmailContactResourceArn {
  return `arn:${parameters.partition ?? ''}:notifications-contacts::${parameters.account}:emailcontact/${parameters.emailContactId}`
}