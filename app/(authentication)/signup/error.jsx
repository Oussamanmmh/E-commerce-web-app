"use client"
{/*error page handler for next js */}
export default function ErrorBoundary ({err}){
    console.log("there is error")
    console.log(err)
    return (
        <h1 className="text-5xl text-white z-50">{err}</h1>
    )
}

// Usage example:
// <ErrorBoundary err={error} />