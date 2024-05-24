export const Button=({onClick,placeholder})=>{
    return <div>
        <button onClick={onClick} type="button" className="focus:outline-none text-white bg-orange-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">{placeholder}</button>
    </div>
}