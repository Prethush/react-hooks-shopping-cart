function Aside(props) {
   
    let products = props.products;
    let allSizes = products.reduce((acc, curr) => acc.concat(curr.availableSizes), []);
    let everySize = [...new Set(allSizes)]

    return (
        <aside className="flex-10">
            <h3 className="my-2 text-xl font-bold">Sizes:</h3>
            <div className="flex flex-wrap">
                {
                    everySize.map(size => (
                        <div key={size} id={size} className={props.filterSize.includes(size) ? "flex justify-center items-center w-10 h-10 rounded-full bg-black text-white mr-1 mb-2 cursor-pointer text-sm" : "flex justify-center items-center w-10 h-10 rounded-full bg-gray-300 mr-1 mb-2 cursor-pointer border-2 hover:border-black text-sm"} onClick={props.handleFilterBySize}> 
                        {size}
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}

export default Aside;