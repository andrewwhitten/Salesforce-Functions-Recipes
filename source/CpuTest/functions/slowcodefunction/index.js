/**
 * Slowcodefunction runs a very demanding piece of Math code in Javascript.
 *
 * The exported method is the entry point for your code when the function is invoked. 
 *
 * Following parameters are pre-configured and provided to your function on execution: 
 * @param event: represents the data associated with the occurrence of an event, and  
 *                 supporting metadata about the source of that occurrence.
 * @param context: represents the connection to Functions and your Salesforce org.
 * @param logger: logging handler used to capture application logs and trace specifically
 *                 to a given execution of a function.
 */
 
 module.exports = async function (event, context, logger) {
    logger.info(`Invoking Slowcodefunction with payload ${JSON.stringify(event.data || {})}`);

    let baseNumber = event.data.baseNumber;

    results = mySlowFunction(baseNumber);

    logger.info(JSON.stringify(results));

    return results;
}

/** A short but demanding Javascript function */
function mySlowFunction(baseNumber) {

    let result = 0;	
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
        result += Math.atan(i) * Math.tan(i);
    };

   return result;
}