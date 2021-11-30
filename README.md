# Salesforce-Functions-Recipes

# Slow Code Test

Salesforce Functions is not squarley targeted at performance scenarios, however I thought it would be interesting to see how far I could push it compared to Apex and browser Javascript.

This recipe is a demonstration of an intensive mathmatical algorithm that I have implemented as:

1. A static APEX method
2. A Salesforce Function (Javascript type)
3. A Javascript function in an LWC control

![Functions-compare](https://user-images.githubusercontent.com/41508645/143964508-90c2dea3-aa2e-45c6-ab09-26d3a85889d3.gif)


![Picture 1](https://user-images.githubusercontent.com/41508645/143961229-0aabdbe8-aa9b-43d7-94ce-e3e3771d7e0f.png)


What is interesting are the following observations:

1. Apex is actually faster than Salesforce Functions for less intensive CPU bound workloads
2. Apex has a limit (base number 8) that is can actually handle
3. Salesforce Functions in Javascript are much slower than the same Javascript running on the browser
4. Browser side Javascript is actually insanely fast, esspecially on Apple iOS devices


Notes:

1. Origional source code for cpu intensive calculation: https://gist.github.com/sqren/5083d73f184acae0c5b7
2. 
