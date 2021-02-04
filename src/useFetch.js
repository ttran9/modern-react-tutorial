import { useState, useEffect } from 'react';

// note custom hooks must start with "use"
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /*
     * note since we are passing url into the useFetch hook then we need to pass
     * the url in as a dependency because whenever the url changes we are going to
     * re-render the component.
     */
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                // get the response object and use the json function to get the response
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                // grab from the data object.
                .then((data) => {
                    // the above is a local variable named "data."
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000)
    }, [url]);

    /*
     * return can be whatever type of value we want it to be such as
     * an array, a boolean, etc.
     */
    return { data, isPending, error }
}

export default useFetch;