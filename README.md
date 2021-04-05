# aws-serverless-nodejs-datadog-otel
Creating a serverless application using datadog and open telemetry

Setup the Cloudformation stack to generate the [Datadog Forwarder](https://docs.datadoghq.com/serverless/forwarder/)

Setup the api key using the system manager:

```
aws ssm put-parameter \
    --name "/service/demo-lambda-datadog/datadog/apikey" \
    --description "Datadog application for DataDog" \
    --type "String" \
    --value "DATADOG-API-KEY"
```