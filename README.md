# Salesforce-Functions-Recipes

# Slow Code Test

<a href="https://developer.salesforce.com/docs/platform/functions/guide/overview.html">Salesforce Functions use scalable containers</a>, and are not targeted at performance scenarios even though they are good candidates to reduce high cpu tasks currently running in Apex.

I thought it would be interesting to see how far I could push them compared to Apex and browser Javascript.

This recipe is a <a href="https://gist.github.com/sqren/5083d73f184acae0c5b7">demonstration of an intensive mathmatical algorithm</a> that I have implemented as:

1. A static APEX method
2. A Salesforce Function (Javascript type)
3. A Javascript function in an LWC control

![Functions-compare](https://user-images.githubusercontent.com/41508645/143964508-90c2dea3-aa2e-45c6-ab09-26d3a85889d3.gif)


![Picture 1](https://user-images.githubusercontent.com/41508645/143961229-0aabdbe8-aa9b-43d7-94ce-e3e3771d7e0f.png)


These statistics have informed the following observations:

1. Salesforce Functions are definately more scalable than Apex
2. Salesforce Functions can be slower than Apex with low intensity CPU tasks
3. Salesforce Functions are far slower than running the same Javascript on the user's browser

# How to deploy
This project should be easy to deploy as long as you have a Functions license. Unfortunately this won't work with a local Docker environment in lieu of Functions in your Org.

1) Open the Project in Visual Studio Code
2) Setup your Salesforce Sandbox as per <a href="https://developer.salesforce.com/docs/platform/functions/guide/set-up.html">Salesforce guidelines</a>
3) With SFDX, deploy the metadata in the Project to your sandbox
4) With SFDX, deploy the Function in the Project to the corresponding Compute environment
5) Find a page in your Org to add the 'cpuTest' custom control to it

# Notes:

1. This Function example does not use the Salesforce API at all
2. It is rather unfair to compare to recent web browser javascript implementations, which are blazing fast. Containers are not designed for that.
3. Origional source code for cpu intensive calculation: https://gist.github.com/sqren/5083d73f184acae0c5b7
4. Apex is actually faster than Salesforce Functions for less intensive CPU bound workloads
5. Apex has a limit (base number 8 in this calculation) that it can actually handle
6. Salesforce Functions in Javascript are much slower than the same Javascript running on the browser
7. Browser side Javascript is actually insanely fast, esspecially on Apple iOS devices
8. Local Docker performance was not tested. I didn't see the need given that this can't be used in Production.
