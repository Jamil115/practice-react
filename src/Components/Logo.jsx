function Logo({source}) {
    console.log(source)
    return(
        <div className="w-16 h-16 flex grow ml-8">
          <img src={source} alt="logo" />
        </div>
    )
}

export default Logo