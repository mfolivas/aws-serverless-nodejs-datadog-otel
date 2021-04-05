# aws-serverless-nodejs-datadog-otel
Creating a serverless application using datadog and open telemetry

Setup the Cloudformation stack to generate the [Datadog Forwarder](https://docs.datadoghq.com/serverless/forwarder/), and install the [Datadog plugin](https://docs.datadoghq.com/serverless/serverless_integrations/plugin/).  To instrument the application, leverage DataDog [telemetry](https://docs.datadoghq.com/serverless/installation/nodejs/?tab=serverlessframework).

Setup the api key using the system manager:

```
aws ssm put-parameter \
    --name "/service/demo-lambda-datadog/datadog/apikey" \
    --description "Datadog application for DataDog" \
    --type "String" \
    --value "DATADOG-API-KEY"

aws ssm put-parameter \
    --name "/service/demo-lambda-datadog/aws/accountId" \
    --description "AWS account id" \
    --type "String" \
    --value "AWS-ACCOUNT-ID"

```

Deploy the application
```
sls deploy
```

Once it is deployed, you can `sls invoke -f hello` to call the lambda function manually.  The application is setup to fail at random times.

To test, you can execute the `call-hello.sh` to call the application multiple times.