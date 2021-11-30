# Salesforce-Functions-Recipes

# Slow Code Test

Salesforce Functions is not squarley targeted at performance scenarios, however I thought it would be interesting to see how far I could push it compared to Apex and browser Javascript.

This recipe is a demonstration of an intensive mathmatical algorithm that I have implemented as:

1. A static APEX method
2. A Salesforce Function (Javascript type)
3. A Javascript function in an LWC control

![Functions-compare](https://user-images.githubusercontent.com/41508645/143964508-90c2dea3-aa2e-45c6-ab09-26d3a85889d3.gif)


![Picture 1](https://user-images.githubusercontent.com/41508645/143961229-0aabdbe8-aa9b-43d7-94ce-e3e3771d7e0f.png)


These statistics have informed the following observations:

1. Salesforce Functions are definately more scalable than Apex
2. Salesforce Functions can be slower than Apex with low intensity CPU tasks
3. Salesforce Functions are far slower than running the same Javascript on the user's browser


Notes:

1. This Function does not use the Salesforce API at all
2. Origional source code for cpu intensive calculation: https://gist.github.com/sqren/5083d73f184acae0c5b7
3. Apex is actually faster than Salesforce Functions for less intensive CPU bound workloads
4. Apex has a limit (base number 8 in this calculation) that it can actually handle
5. Salesforce Functions in Javascript are much slower than the same Javascript running on the browser
6. Browser side Javascript is actually insanely fast, esspecially on Apple iOS devices
