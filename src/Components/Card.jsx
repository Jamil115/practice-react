function Card({name, prof, thoughts}){
    // console.log(name, prof, thoughts)
    return(
        <div className="inline-block mr-16 mb-5">
            <div className="w-96 h-48 mt-7 ml-14 p-8  bg-yellow-400 border-2 border-black rounded-2xl shadow-md shadow-black">
                <h2 className="text-center font-bold text-xl">{name}</h2>
                <p className="text-center font-semibold">{prof}</p>
                <p className="text-center">{thoughts}</p>
            </div>
        </div>
    )
}

export default Card