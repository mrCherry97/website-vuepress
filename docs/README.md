---
title: Overview
---

Kyma /kee-ma/ is a cloud-native application runtime that combines the power of Kubernetes with a set of best-in-class tools and open-source components that empower you to develop, run, and operate secure and scalable cloud-native applications.

![overview](./guide/01-overview/assets/kyma-overview.svg)

Out of the box, Kyma offers various functionalities, such as:

- Serverless development platform to run lightweight Functions in a cost-efficient and scalable way
- System connectivity that provides endpoint to register Events and APIs of external applications
- Eventing that provides messaging channel to receive Events, enrich them, and trigger business flows using Functions or services
- Service Mesh for service-to-service communication and proxying
- Service consumption
- Secure API exposure
- In-cluster observability
- CLI supported by the intuitive Console UI

Read about [Kyma main areas](#overview-main-areas) to learn more.

Kyma is built upon leading cloud-native, open-source projects, such as Istio, NATS, Serverless, and Prometheus. The features developed by Kyma are the unique “glue” that holds them together, so you can connect and extend your applications easily and intuitively. To learn how to do that, head over to the [Get Started](../get-started) section where you can find step-by-step instructions to get your environment up and running.

The extensions and customizations you create are decoupled from your core applications, which adds to these general advantages of using Kyma:

![advantages](./guide/01-overview/assets/kyma-advantages.svg)

```javascript
() => {
  console.log('Javascript code example');
};
```
