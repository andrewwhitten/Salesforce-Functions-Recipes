# Salesforce-Functions-Recipes

Salesforce Functions is deprecated and will soon not be available at all. I will leave this project up as an interesting experiment, and perhaps the basis of similar performance tests in future.

# Slow Code Test

<a href="https://developer.salesforce.com/docs/platform/functions/guide/overview.html">Salesforce Functions employ elastic computing for compute heavy tasks</a>, and are good a candidate to reduce high cpu tasks currently running in Apex.

I thought it would be interesting to see how far I could push them compared to Apex and browser Javascript.

This recipe is a <a href="https://gist.github.com/sqren/5083d73f184acae0c5b7">demonstration of an intensive mathmatical algorithm</a> that I have implemented as:

<table>
  <tr>
    <td>1. A static APEX method<br>
2. A Salesforce Function (Javascript type)<br>
3. A Javascript function in an LWC control
</td>
    <td> <img width="508" alt="Screen Shot 2021-12-01 at 7 49 33 am" src="https://user-images.githubusercontent.com/41508645/144126020-8a827b1f-d4fe-4dde-a241-6aee7631ec5e.png">
</td>
  </tr>
</table>

When run in a Developer Sandbox:

![Functions-compare](https://user-images.githubusercontent.com/41508645/143964508-90c2dea3-aa2e-45c6-ab09-26d3a85889d3.gif)

Yields these results:

![Picture 1](https://user-images.githubusercontent.com/41508645/144147454-774f96cb-7f3b-474c-9267-c26ae5573645.png)


These statistics have informed the following observations:

1. Salesforce Functions are demonstrably more scalable than Apex with heavy tasks
2. Salesforce Functions can be slower than Apex with low intensity CPU tasks, so do test and don't assume that Functions are faster for your scenario
3. The web browser is the fastest place that you can run Javascript, and at no extra cost. It is worth considering if you have demanding CPU tasks and don't need data security or complete reliability

# How to deploy
This project should be easy to deploy as long as you have a Functions license. Unfortunately this won't work with a local Docker environment in lieu of Functions in your Org.

1) Open the Project in Visual Studio Code
2) Setup your Salesforce Sandbox as per <a href="https://developer.salesforce.com/docs/platform/functions/guide/set-up.html">Salesforce guidelines</a>
3) With SFDX, deploy the metadata in the Project to your sandbox
4) With SFDX, deploy the Function in the Project to the corresponding Compute environment
5) Find a page in your Org to add the 'cpuTest' custom control to it

# Notes:

1. This Function example does not use the Salesforce API at all
2. This test was performed in Winter '22, and apparently the Compute instance is located in North America at this time. When Compute instances are released next to Orgs in my goegraphy then latency times can be assumed to improve
3. 'Start up cost' - you may have to run the functiona few times before it finds its optimal run speed
4. It is rather unfair to compare to recent web browser javascript implementations, which are blazing fast. Containers are not designed for that.
5. Origional source code for cpu intensive calculation: https://gist.github.com/sqren/5083d73f184acae0c5b7
6. Apex is actually faster than Salesforce Functions for less intensive CPU bound workloads
7. Apex has a limit (base number 8 in this calculation) that it can actually handle
8. Salesforce Functions in Javascript are much slower than the same Javascript running on the browser
9. Browser side Javascript is actually insanely fast, esspecially on Apple iOS devices
10. Local Docker performance was not tested. I didn't see the need given that this can't be used in Production.
