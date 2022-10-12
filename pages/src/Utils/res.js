export async function fazPedido(url, method, body) {
    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    console.log(res)
    if (res.status === 404) return false
    const json = await res.json()
    console.log(json)
    return {status: res.status,
    body: json}
    
}
