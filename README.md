# Salesforce-Functions-Recipes

# Slow Code Test

Salesforce Functions is not squarley targeted at performance scenarios, however I thought it would be interesting to see how far I could push it compared to Apex and browser Javascript.

This recipe is a demonstration of an intensive mathmatical algorithm that I have implemented as:

1. A static APEX method
2. A Salesforce Function (Javascript type)
3. A Javascript function in an LWC control

![Functions_Perf](https://user-images.githubusercontent.com/41508645/143960303-7f36a9d0-22fb-4c20-84bb-1756ec635ce3.png)

What is interesting are the following observations:

1. Apex is actually faster than Salesforce Functions for less intensive CPU bound workloads
2. Apex has a limit (base number 8) that is can actually handle
3. Salesforce Functions in Javascript are much slower than the same Javascript running on the browser
4. Browser side Javascript is actually insanely fast, esspecially on Apple iOS devices
