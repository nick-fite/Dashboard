type ProductProps = 
{
    imageLocation: string,
    title: string, 
    sales: string
}

function Product(props: ProductProps)
{
    return(
        <div className="Item">
            <img width="70%" src={props.imageLocation}/>
            <p>{props.title}</p>
            <p>sales:{props.sales}</p>
        </div>
    )
}

export default Product;