import { LightningElement } from 'lwc';

import slowCodeApex from '@salesforce/apex/CpuTest.slowCodeApex';
import slowCodeFunctions from '@salesforce/apex/CpuTest.slowCodeFunctions';

export default class CpuTest extends LightningElement {

    baseNumber = 2; // By default, the code will be seeded with the value of 2
    output;
    errorMsg;

    browserOutput;
    apexOutput;
    functionsOutput;

    // Update base number (Apex will handle up to 8, Functions and Javascript will go much further)
    baseNumberOnChange(event){
        this.baseNumber = event.target.value;
    }

    // Display of result for a cpu speed test
    createOutputText(timer, result) {

        var string = "Calculation with " + this.baseNumber + " with result of " + result + " took " + timer + " milliseconds.";

        return string;
    }

    // Execute the code as implemented in Apex
    handleSlowCodeApex() {

        let before = new Date().getTime();
   
        slowCodeApex({basenumber: this.baseNumber}).then(result =>{

            let after = new Date().getTime();

            this.apexOutput = this.createOutputText(after - before, result);
        })
        .catch(error =>{

            this.errorMsg = error;
        })
    }

    // Execute the code in the browser
    handleSlowCodeBrowser(){
   
        let before = new Date().getTime();

        var result = this.mySlowFunction(this.baseNumber);

        let after = new Date().getTime();

        this.browserOutput = this.createOutputText(after - before, result);
    }

    // Execute the code in Salesforce Functions
    handleSlowCodeFunctions(){
   
        let before = new Date().getTime();

        slowCodeFunctions({basenumber: this.baseNumber})
        .then(result =>{

            this.functionsOutput = result;

            let after = new Date().getTime();

            this.functionsOutput = this.createOutputText(after - before, result);
        })
        .catch(error =>{

            this.errorMsg = error;
        })
    }

    // Hard math calculation run in the user's browser
    mySlowFunction(baseNumber) {

        let result = 0;	
        for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
            result += Math.atan(i) * Math.tan(i);
        };

       return result;
    }

    // Clear all values
    handleClear() {

        this.browserOutput = "";
        this.apexOutput = "";
        this.functionsOutput = "";
        this.errorMsg = "";
    }
}

