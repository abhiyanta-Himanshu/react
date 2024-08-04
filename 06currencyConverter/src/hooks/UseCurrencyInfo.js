import { useEffect , useState } from "react";

function UseCurrencyInfo(currency)
{
    const [data , setData] = useState({})
    useEffect(()=>{
        async function fetchdata()
        {
            let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

            const response = await fetch(url);

            const rjson  = await response.json();

            setData(rjson[currency])
            
            console.log(data)
        }
        fetchdata()
    },[currency])
    return data
}


// function UseCurrencyInfo(currency)
// {
//     const [data,setData] = useState({})
//     useEffect(() => z{
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then( (res) => res.json() )
//         .then( (res) => setData(res[currency]) )

//         // console.log(data)
//     },[currency])
//     return data
// }

export default UseCurrencyInfo;