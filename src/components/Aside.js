function Aside(props) {
   
    let products = props.products;
    let allSizes = products.reduce((acc, curr) => acc.concat(curr.availableSizes), []);
    let everySize = [...new Set(allSizes)]

    return (
        <aside className="flex-10">
            <h3 className="my-2 text-xl font-bold">Sizes:</h3>
            <div className="flex flex-wrap">
                {/* Filter by sizes */}
                {
                    everySize.map(size => (
                        <div key={size} id={size} className={"flex justify-center items-center w-10 h-10 rounded-full mr-1 mb-2 cursor-pointer border-2 hover:border-black text-sm" + (props.filterSize.includes(size) ? " bg-black text-white" : " bg-gray-300")} onClick={props.handleFilterBySize}> 
                        {size}
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}

export default Aside;