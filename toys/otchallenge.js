// http://collabedit.com/48qd4

/**
 * Remove the literal key "foo" and its associated value from the query 
 * paramaters of a url string. Return the url string with the query parameter 
 * "foo" removed, if present. Return the url string as is if the query 
 * parameter "foo" is not present. All inputs are guaranteed to be well formed. 
 * All outputs must be well formed.
 *
 * @example     => https://www.opentable.com/index?a=b&foo=bar&c=d => 
 *              => https://www.opentable.com/index?a=b&c=d
 *
 * @param {string} url 
 * @return {string}
 */

function removeFooFromUrlString(url) {
    let test = url.replace('foo=', '');   
    url = test
       
    return url;
}

// Solution 1
function removeFooFromUrlString(url, query) {
    let fooIndex = url.indexOf('foo');  
    url = url.substring(0, fooIndex - 1);
    
    let testStr2 = url.substring(fooIndex);
    let fooIndex2 = testStr2.indexOf('&');
    let testArr = testStr2.split(''); 
  
    for (let i = 0; i < fooIndex2; i++) {
      testArr.shift(i);
    }
    
    url = testStr1 += testArr.join('');
    console.log('result', url);
    return url;
}

// Solution 2.1
// Just a tiny bit of refactoring, still a lot of extra space
const query1 = 'https://www.opentable.com/index?a=b&foo=bar&c=d';
const query2 = 'https://www.opentable.com/index?a=b&bar=foo&c=d';
const result = 'https://www.opentable.com/index?a=b&c=d';

function removeFooFromUrlString(url, key) {
    let fooIndex = url.indexOf(key),
        testStr2 = url.substring(fooIndex),
        fooIndex2 = testStr2.indexOf('&'),
        testArr = testStr2.split('');
    
    url = url.substring(0, fooIndex - 1);
    
    for (let i = 0; i < fooIndex2; i++) {
      testArr.shift(i);
    }
    
    url += testArr.join('');
    console.log('result: ', url);
    return url;
}

removeFooFromUrlString(query1, 'foo');
removeFooFromUrlString(query2, 'bar');


// Solution 3
function removeFooFromUrlString(url, key) {
    let fooIndex = url.indexOf(key),
        testStr2 = url.substring(fooIndex),
        fooIndex2 = testStr2.indexOf('&');
    
    url = url.substring(0, fooIndex - 1);

    for (let i = fooIndex2; i < testStr2.length; i++) {
      url += testStr2[i];
    }

    console.log('result: ', url);
    return url;
}

removeFooFromUrlString(query1, 'foo');
removeFooFromUrlString(query2, 'bar');

// Solution 4
function removeFooFromUrlString(url) {
    let fooIndex = url.indexOf('foo'),
        urlStr1 = url.substring(0, fooIndex),
        testStr1 = url.substring(fooIndex),
        fooIndex2 = testStr1.indexOf('&');
    
    url = urlStr1 += testStr1.slice(fooIndex2 + 1);
    
    // console.log('Foo Index1: ', urlStr1);
    // console.log('Foo Index: ', testStr1);
    // console.log('Foo Index1: ', fooIndex2);
    // console.log('url: ', url);

    return url;
}

removeFooFromUrlString('https://www.opentable.com/index?a=b&foo=bar&c=d');
removeFooFromUrlString('https://www.opentable.com/index?a=b&foo=barsdfdss&c=d');

