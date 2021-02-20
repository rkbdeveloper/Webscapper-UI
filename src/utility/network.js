
/**
 * Sends a GET request to the server
 * @param {string} api_link
 * @param {function with one parameter} success_callback 
 * @param {function with one parameter} fail_callback 
 */
export function SendGetApiRequest(api_link, success_callback, fail_callback) {
    const REQUEST_OPTIONS = {
        method: "GET", 
        mode: 'no-cors',
    }

    fetch(api_link, REQUEST_OPTIONS)
        .then(result => {

            console.log({"result": result, 'link': api_link});

            if(result.body === null) {
                return '{result: fail}';
            }
            
            return result.json();
        })
        .then( (result) => success_callback(result), (error) => fail_callback(error))
}

export function SendPostApiRequest(api_link, data, success_callback, fail_callback) {
    const REQUEST_OPTIONS = {
        method: "POST", 
        mode: 'no-cors',
        data: JSON.stringify(data),
    }

    fetch(api_link, REQUEST_OPTIONS)
        .then(result => {

            if(result.body === null || result.status !== 200) {
                return '{"result": "fail"}';
            }
            
            return result.json();
        })
        .then( (result) => success_callback(result), (error) => fail_callback(error))
}