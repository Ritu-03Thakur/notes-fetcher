

// The following code includes common headers and buttons that 
// can be used in our website. Their names and 
// functionalities can be customized using props, as demonstrated below.


const MainHeading  = ({heading}) => {
    return (
        <h1 
        className=" flex m-auto mb-4 text-3xl font-extrabold leading-none tracking-tight text-[#132B2A] md:text-4xl lg:text-5xl "
        >{heading}</h1>
    )
}

const MainButton  = ({buttonName  , handleClick}) => {
   return (
    <>
    <button
    className="rounded-md bg-[#082a50] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    onClick={handleClick}
    >
        {buttonName}
    </button>
    </>
   )
}

export {MainButton , MainHeading} ; 