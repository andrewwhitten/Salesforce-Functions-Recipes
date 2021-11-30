# Salesforce-Functions-Recipes

# Slow Code Test

Salesforce Functions use scalable containers, and are not targeted at performance scenarios even though they are good candidates to reduce specific high cpu tasks currently running in Apex.

I thought it would be interesting to see how far I could push them compared to Apex and browser Javascript.

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

1. This Function example does not use the Salesforce API at all
2. It is rather unfair to compare to recent web browser javascript implementations, which are blazing fast. Containers are not designed for that.
3. Origional source code for cpu intensive calculation: https://gist.github.com/sqren/5083d73f184acae0c5b7
4. Apex is actually faster than Salesforce Functions for less intensive CPU bound workloads
5. Apex has a limit (base number 8 in this calculation) that it can actually handle
6. Salesforce Functions in Javascript are much slower than the same Javascript running on the browser
7. Browser side Javascript is actually insanely fast, esspecially on Apple iOS devices
