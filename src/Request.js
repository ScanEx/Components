async function httpGet(url, options) {        
    const sp = options && Object.keys(options)
        .reduce((a,k) => {
            a.append(k, options[k]);
            return a;
        }, new URLSearchParams()).toString() || '';
    const response = await fetch(`${url}?${sp}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    return await handler(response);
}

async function httpPost(url, options) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options)
    });
    return await handler(response);
}

async function handler (response) {
    const status = response.status;
    let result;
    if (status === 200) {
        result = await response.json();
    }
    return {status, result};
}

export { httpGet, httpPost };