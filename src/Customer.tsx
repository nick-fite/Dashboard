export type CustomerDataType = 
{
    name: string,
    profilePictureLoc: string,
    totalRev: string,
    lastPurchase: string,
}

function Customer(data: CustomerDataType)
{
    return(<div className="Item">
        <img width="70%" src={data.profilePictureLoc}/>
        <p>{data.name}</p>
        <p>{data.totalRev}</p>
        <p>{data.lastPurchase}</p>
    </div>)
}

export default Customer;