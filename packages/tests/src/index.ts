import { accessgrantArn } from '@aws-types/arn/s3'

console.log(
  accessgrantArn({
    region: 'us-east-1',
    account: '123456789012',
    token: 'hello',
  }),
)
