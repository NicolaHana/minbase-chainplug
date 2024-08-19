interface Props {
 item?: any,
 collection?: any,
 title?: string,
 describe?: string,
 button?: string,
}
const DescribeOptions =({item, collection, button="See details"}: Props) => {
    return(
        <div className="grid content-center h-full">
            {item && <button className="w-[83px] h-[26px] bg-transparent border-2 border-white rounded-full font-sans text-sm" name="Category">Category</button>}
            <div className="bg-transparent w-[418px] font-sans text-2xl mt-5">{item?.title || collection?.title}</div>
            {item && <div className="flex flex-row mt-5 items-center">
                <img src = "marketPlace/character.jpg" className="w-4 h-4 rounded-full"/>
                <div className="ml-2 font-sans text-sm">Creator’s name</div>
            </div>}
            {collection && (
                <div>
                    <div className="font-sans text-base mt-5">
                       {collection.describe}
                    </div>
                    <button className="bg-white w-[154px] h-[28px] mt-5 font-medium text-base text-black">
                      {button}
                    </button>
                </div>
                )}
        </div>
    )
}

export default DescribeOptions;