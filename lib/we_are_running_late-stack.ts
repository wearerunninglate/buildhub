import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as memorydb from 'aws-cdk-lib/aws-memorydb';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface WeAreRunningLateStackProps extends cdk.StackProps {
  /**
   * The Amazon S3 key of the deployment package.
   * This property can be replaced with other exclusive properties
   */
  readonly lambdaFunction00correlationscore00yKwf4CodeS3KeyOneOfoqTGe: string;
  /**
   * An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
   * This property can be replaced with other exclusive properties
   */
  readonly lambdaFunction00Weather00c2paFCodeS3BucketOneOfeerrC: string;
  /**
   * An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
   * This property can be replaced with other exclusive properties
   */
  readonly lambdaFunction00lifesync3900pYd8SCodeS3BucketOneOfTsTi5: string;
  /**
   * An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
   * This property can be replaced with other exclusive properties
   */
  readonly lambdaFunction00correlationscore00yKwf4CodeS3BucketOneOfLsLIa: string;
  /**
   * The Amazon S3 key of the deployment package.
   * This property can be replaced with other exclusive properties
   */
  readonly lambdaFunction00Weather00c2paFCodeS3KeyOneOfnpzi9: string;
  /**
   * The Amazon S3 key of the deployment package.
   * This property can be replaced with other exclusive properties
   */
  readonly lambdaFunction00lifesync3900pYd8SCodeS3KeyOneOfcHr6x: string;
}

export class WeAreRunningLateStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: WeAreRunningLateStackProps) {
    super(scope, id, props);

    // Resources
    const dynamoDbTable00samplescores00p8XfH = new dynamodb.CfnTable(this, 'DynamoDBTable00samplescores00p8XfH', {
      sseSpecification: {
        sseEnabled: false,
      },
      tableName: 'sample_scores',
      attributeDefinitions: [
        {
          attributeType: 'S',
          attributeName: 'createdAt',
        },
      ],
      contributorInsightsSpecification: {
        enabled: false,
      },
      billingMode: 'PROVISIONED',
      pointInTimeRecoverySpecification: {
        pointInTimeRecoveryEnabled: false,
      },
      provisionedThroughput: {
        writeCapacityUnits: 5,
        readCapacityUnits: 5,
      },
      keySchema: [
        {
          keyType: 'HASH',
          attributeName: 'createdAt',
        },
      ],
      deletionProtectionEnabled: false,
      tags: [
      ],
      timeToLiveSpecification: {
        enabled: false,
      },
    });
    dynamoDbTable00samplescores00p8XfH.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamGroup00Admin007Sy7c = new iam.CfnGroup(this, 'IAMGroup00Admin007Sy7c', {
      groupName: 'Admin',
      path: '/',
      managedPolicyArns: [
        'arn:aws:iam::aws:policy/AdministratorAccess',
      ],
    });
    iamGroup00Admin007Sy7c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole1cfeecd7fcf8437c97b01971f45df7b400qgFeD = new iam.CfnManagedPolicy(this, 'IAMManagedPolicy00policyserviceroleAWSLambdaBasicExecutionRole1cfeecd7fcf8437c97b01971f45df7b400qgFeD', {
      managedPolicyName: 'AWSLambdaBasicExecutionRole-1cfeecd7-fcf8-437c-97b0-1971f45df7b4',
      path: '/service-role/',
      description: '',
      groups: [
      ],
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Resource: 'arn:aws:logs:ap-southeast-2:637423542002:*',
            Action: 'logs:CreateLogGroup',
            Effect: 'Allow',
          },
          {
            Resource: [
              'arn:aws:logs:ap-southeast-2:637423542002:log-group:/aws/lambda/BlandAi:*',
            ],
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
          },
        ],
      },
      roles: [
        'BlandAi-role-x5ozouzs',
      ],
      users: [
      ],
    });
    iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole1cfeecd7fcf8437c97b01971f45df7b400qgFeD.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole24d281f9e93946ac8cf28f46ffc03bf800y8lRt = new iam.CfnManagedPolicy(this, 'IAMManagedPolicy00policyserviceroleAWSLambdaBasicExecutionRole24d281f9e93946ac8cf28f46ffc03bf800y8lRt', {
      managedPolicyName: 'AWSLambdaBasicExecutionRole-24d281f9-e939-46ac-8cf2-8f46ffc03bf8',
      path: '/service-role/',
      description: '',
      groups: [
      ],
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Resource: 'arn:aws:logs:ap-southeast-2:637423542002:*',
            Action: 'logs:CreateLogGroup',
            Effect: 'Allow',
          },
          {
            Resource: [
              'arn:aws:logs:ap-southeast-2:637423542002:log-group:/aws/lambda/OpenAI:*',
            ],
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
          },
        ],
      },
      roles: [
        'OpenAI-role-eq0pkyj0',
      ],
      users: [
      ],
    });
    iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole24d281f9e93946ac8cf28f46ffc03bf800y8lRt.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole267cdb06b2e7469a96a7e7c78bc5174700Cc758 = new iam.CfnManagedPolicy(this, 'IAMManagedPolicy00policyserviceroleAWSLambdaBasicExecutionRole267cdb06b2e7469a96a7e7c78bc5174700CC758', {
      managedPolicyName: 'AWSLambdaBasicExecutionRole-267cdb06-b2e7-469a-96a7-e7c78bc51747',
      path: '/service-role/',
      description: '',
      groups: [
      ],
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Resource: 'arn:aws:logs:ap-southeast-2:637423542002:*',
            Action: 'logs:CreateLogGroup',
            Effect: 'Allow',
          },
          {
            Resource: [
              'arn:aws:logs:ap-southeast-2:637423542002:log-group:/aws/lambda/Lifesync:*',
            ],
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
          },
        ],
      },
      roles: [
        'Lifesync-role-y67zt0yj',
      ],
      users: [
      ],
    });
    iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole267cdb06b2e7469a96a7e7c78bc5174700Cc758.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole32d939b8069c48feafc70872a8718c5800UjA0z = new iam.CfnManagedPolicy(this, 'IAMManagedPolicy00policyserviceroleAWSLambdaBasicExecutionRole32d939b8069c48feafc70872a8718c5800UjA0Z', {
      managedPolicyName: 'AWSLambdaBasicExecutionRole-32d939b8-069c-48fe-afc7-0872a8718c58',
      path: '/service-role/',
      description: '',
      groups: [
      ],
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Resource: 'arn:aws:logs:ap-southeast-2:637423542002:*',
            Action: 'logs:CreateLogGroup',
            Effect: 'Allow',
          },
          {
            Resource: [
              'arn:aws:logs:ap-southeast-2:637423542002:log-group:/aws/lambda/Lifesync2:*',
            ],
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
          },
        ],
      },
      roles: [
        'Lifesync2-role-uqjmrp1e',
      ],
      users: [
      ],
    });
    iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole32d939b8069c48feafc70872a8718c5800UjA0z.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRolebb929d390bf349af8af14c15f5fb620100tlJ2o = new iam.CfnManagedPolicy(this, 'IAMManagedPolicy00policyserviceroleAWSLambdaBasicExecutionRolebb929d390bf349af8af14c15f5fb620100tlJ2O', {
      managedPolicyName: 'AWSLambdaBasicExecutionRole-bb929d39-0bf3-49af-8af1-4c15f5fb6201',
      path: '/service-role/',
      description: '',
      groups: [
      ],
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Resource: 'arn:aws:logs:ap-southeast-2:637423542002:*',
            Action: 'logs:CreateLogGroup',
            Effect: 'Allow',
          },
          {
            Resource: [
              'arn:aws:logs:ap-southeast-2:637423542002:log-group:/aws/lambda/Weather:*',
            ],
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
          },
        ],
      },
      roles: [
        'Weather-role-82b8hxiu',
      ],
      users: [
      ],
    });
    iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRolebb929d390bf349af8af14c15f5fb620100tlJ2o.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const logsLogGroup00awslambdaWeather00bvKlU = new logs.CfnLogGroup(this, 'LogsLogGroup00awslambdaWeather00bvKlU', {
      logGroupClass: 'STANDARD',
      logGroupName: '/aws/lambda/Weather',
      dataProtectionPolicy: {
      },
    });
    logsLogGroup00awslambdaWeather00bvKlU.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const memoryDbacl00openaccess006Gmkv = new memorydb.CfnACL(this, 'MemoryDBACL00openaccess006Gmkv', {
      aclName: 'open-access',
      tags: [
      ],
      userNames: [
        'default',
      ],
    });
    memoryDbacl00openaccess006Gmkv.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const s3Bucket00wearerunninglate00PlPi0 = new s3.CfnBucket(this, 'S3Bucket00wearerunninglate00PLPi0', {
      publicAccessBlockConfiguration: {
        restrictPublicBuckets: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
        blockPublicAcls: false,
      },
      bucketName: 'wearerunninglate',
      ownershipControls: {
        rules: [
          {
            objectOwnership: 'BucketOwnerEnforced',
          },
        ],
      },
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            bucketKeyEnabled: true,
            serverSideEncryptionByDefault: {
              sseAlgorithm: 'AES256',
            },
          },
        ],
      },
    });
    s3Bucket00wearerunninglate00PlPi0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamRole00BlandAirolex5ozouzs00kpFd8 = new iam.CfnRole(this, 'IAMRole00BlandAirolex5ozouzs00kpFd8', {
      path: '/service-role/',
      managedPolicyArns: [
        iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole1cfeecd7fcf8437c97b01971f45df7b400qgFeD.ref,
      ],
      maxSessionDuration: 3600,
      roleName: 'BlandAi-role-x5ozouzs',
      assumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
      },
    });
    iamRole00BlandAirolex5ozouzs00kpFd8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamRole00Lifesync2roleuqjmrp1e00ugi16 = new iam.CfnRole(this, 'IAMRole00Lifesync2roleuqjmrp1e00ugi16', {
      path: '/service-role/',
      managedPolicyArns: [
        iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole32d939b8069c48feafc70872a8718c5800UjA0z.ref,
      ],
      maxSessionDuration: 3600,
      roleName: 'Lifesync2-role-uqjmrp1e',
      assumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
      },
    });
    iamRole00Lifesync2roleuqjmrp1e00ugi16.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamRole00Lifesyncroley67zt0yj00I8c0e = new iam.CfnRole(this, 'IAMRole00Lifesyncroley67zt0yj00I8C0e', {
      path: '/service-role/',
      managedPolicyArns: [
        iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole267cdb06b2e7469a96a7e7c78bc5174700Cc758.ref,
        'arn:aws:iam::aws:policy/AmazonS3FullAccess',
      ],
      maxSessionDuration: 3600,
      roleName: 'Lifesync-role-y67zt0yj',
      assumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
      },
    });
    iamRole00Lifesyncroley67zt0yj00I8c0e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamRole00OpenAIroleeq0pkyj000XuPvD = new iam.CfnRole(this, 'IAMRole00OpenAIroleeq0pkyj000XuPvD', {
      path: '/service-role/',
      managedPolicyArns: [
        iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRole24d281f9e93946ac8cf28f46ffc03bf800y8lRt.ref,
      ],
      maxSessionDuration: 3600,
      roleName: 'OpenAI-role-eq0pkyj0',
      assumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
      },
    });
    iamRole00OpenAIroleeq0pkyj000XuPvD.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const iamRole00Weatherrole82b8hxiu00cl6Pw = new iam.CfnRole(this, 'IAMRole00Weatherrole82b8hxiu00cl6Pw', {
      path: '/service-role/',
      managedPolicyArns: [
        iamManagedPolicy00policyserviceroleAwsLambdaBasicExecutionRolebb929d390bf349af8af14c15f5fb620100tlJ2o.ref,
        'arn:aws:iam::aws:policy/AdministratorAccess',
      ],
      maxSessionDuration: 3600,
      roleName: 'Weather-role-82b8hxiu',
      policies: [
        {
          policyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Resource: '*',
                Action: 's3:*',
                Effect: 'Allow',
                Sid: 'VisualEditor0',
              },
            ],
          },
          policyName: 's3access',
        },
      ],
      assumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
      },
    });
    iamRole00Weatherrole82b8hxiu00cl6Pw.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const lambdaFunction00Weather00c2paF = new lambda.CfnFunction(this, 'LambdaFunction00Weather00c2paF', {
      memorySize: 128,
      description: 'Weather',
      tracingConfig: {
        mode: 'PassThrough',
      },
      timeout: 300,
      runtimeManagementConfig: {
        updateRuntimeOn: 'Auto',
      },
      handler: 'lambda_function.lambda_handler',
      code: {
        s3Bucket: props.lambdaFunction00Weather00c2paFCodeS3BucketOneOfeerrC!,
        s3Key: props.lambdaFunction00Weather00c2paFCodeS3KeyOneOfnpzi9!,
      },
      role: iamRole00Weatherrole82b8hxiu00cl6Pw.attrArn,
      fileSystemConfigs: [
      ],
      functionName: 'Weather',
      runtime: 'python3.12',
      packageType: 'Zip',
      loggingConfig: {
        logFormat: 'Text',
        logGroup: '/aws/lambda/Weather',
      },
      ephemeralStorage: {
        size: 512,
      },
      architectures: [
        'x86_64',
      ],
    });
    lambdaFunction00Weather00c2paF.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const lambdaFunction00correlationscore00yKwf4 = new lambda.CfnFunction(this, 'LambdaFunction00correlationscore00yKwf4', {
      memorySize: 512,
      description: 'A simple backend (read/write to DynamoDB) with a RESTful API endpoint using Amazon API Gateway.',
      tracingConfig: {
        mode: 'PassThrough',
      },
      timeout: 10,
      runtimeManagementConfig: {
        updateRuntimeOn: 'Auto',
      },
      handler: 'lambda_function.lambda_handler',
      code: {
        s3Bucket: props.lambdaFunction00correlationscore00yKwf4CodeS3BucketOneOfLsLIa!,
        s3Key: props.lambdaFunction00correlationscore00yKwf4CodeS3KeyOneOfoqTGe!,
      },
      role: iamRole00Weatherrole82b8hxiu00cl6Pw.attrArn,
      fileSystemConfigs: [
      ],
      functionName: 'correlation_score',
      runtime: 'python3.10',
      packageType: 'Zip',
      loggingConfig: {
        logFormat: 'Text',
        logGroup: '/aws/lambda/correlation_score',
      },
      ephemeralStorage: {
        size: 512,
      },
      tags: [
        {
          value: 'microservice-http-endpoint-python',
          key: 'lambda-console:blueprint',
        },
      ],
      architectures: [
        'x86_64',
      ],
    });
    lambdaFunction00correlationscore00yKwf4.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const lambdaFunction00lifesync3900pYd8S = new lambda.CfnFunction(this, 'LambdaFunction00lifesync3900pYd8S', {
      memorySize: 128,
      description: '',
      tracingConfig: {
        mode: 'PassThrough',
      },
      timeout: 30,
      runtimeManagementConfig: {
        updateRuntimeOn: 'Auto',
      },
      handler: 'lambda_function.lambda_handler',
      code: {
        s3Bucket: props.lambdaFunction00lifesync3900pYd8SCodeS3BucketOneOfTsTi5!,
        s3Key: props.lambdaFunction00lifesync3900pYd8SCodeS3KeyOneOfcHr6x!,
      },
      role: iamRole00Lifesyncroley67zt0yj00I8c0e.attrArn,
      fileSystemConfigs: [
      ],
      functionName: 'lifesync39',
      runtime: 'python3.9',
      packageType: 'Zip',
      loggingConfig: {
        logFormat: 'Text',
        logGroup: '/aws/lambda/lifesync39',
      },
      ephemeralStorage: {
        size: 512,
      },
      layers: [
        'arn:aws:lambda:ap-southeast-2:637423542002:layer:OpenAI39:1',
      ],
      architectures: [
        'x86_64',
      ],
    });
    lambdaFunction00lifesync3900pYd8S.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
  }
}
