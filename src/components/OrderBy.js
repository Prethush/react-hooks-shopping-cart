function OrderBy(props) {
   
    let allProducts = props.allProducts;
    return (
        <div className="flex justify-between items-center">
                    <h3 className="text-sm">{allProducts.length} Product(s) found.</h3>
                    <fieldset>
                        <label className="text-lg" htmlFor="sort">Order by</label>
                        <select id="sort" className="p-1 ml-2 bg-white border-2 border-gray-200" name="filterPrice" value={props.filterByPrize}  onChange={props.handleFilterByPrice}>
                            <option value="select" defaultValue>Select</option>
                            <option value="high">Highest to Lowest</option>
                            <option value="low">Lowest to High</option>
                        </select>
                        
                    </fieldset>
                </div>
    )
}

export default OrderBy;