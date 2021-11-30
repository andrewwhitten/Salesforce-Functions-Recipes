public with sharing class CpuTest {

    /** Method to execute the calculation in Salesforce Functions - Important! Your Org 
     * needs Functions licensing for this to work */
    @AuraEnabled
    public static String slowCodeFunctions(Integer basenumber) {

        String result = '';

        functions.Function slowCodeFunction = functions.Function.get('CpuTest.slowcodefunction');

        functions.FunctionInvocation invocation = slowCodeFunction.invoke('{"baseNumber": ' + basenumber + '}');
        result = invocation.getResponse();

        return result;
    }

    /** Method to execute the calculation in Salesforce Apex*/
    @AuraEnabled
    public static String slowCodeApex(Integer basenumber){

        String result = '-1.0';

        try {
             
            Double dResult = CpuTest.slowCode(basenumber);

            result = dResult.format();

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return result;
    }

    /** The slow code method - written as close to the Javascript version as possible */
    private static Double slowCode(Integer baseNumber) {

        Double result = 0;	

        for (Double i = Math.pow(baseNumber, 7); i >= 0; i--) {		
            result += Math.atan(i) * Math.tan(i);
        }

        return result;
    }
}
