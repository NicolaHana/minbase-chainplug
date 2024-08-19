import DescribeOptions from "./describe";
import ImageView from "./imageView";
import MenuBottom from "./MenuBottom";
import MenuCenter from "./MenuCenter";
import MenuTop from "./MenuTop";

const Marketplace = () => {
  const describeData = [
    { title: "This is the title of the item" },
    { title: "This is the title of the item" },
    { title: "This is the title of the item" },
    { title: "This is the title of the item" },
  ];
  const collectionData = [
    {
      title: "This is the title of the collection",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "marketPlace/image2.jpg",
    },
    {
      title: "This is the title of the collection",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url: "marketPlace/image2.jpg",
    },
    {
      title: "This is the title of the collection",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url: "marketPlace/image2.jpg",
    },
  ];
  return (
    <div className="relative w-full h-full p-8 bg-[#111111] overflow-x-hidden">
      <MenuTop />
      <div className="w-full h-[1056px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#1E70F5] to-[#031126] border-l-2 border-t-2 border-r-2 border-[#4E4E4E] overflow-auto custom-scrollbar">
        <div className="w-full mt-32 pl-12 pr-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-2 text-white w-full h-[587px]">
              <ImageView url="marketPlace/image1.jpg" height="457px" />
            </div>
            <div className="text-white  ml-5">
              <DescribeOptions
                item={describeData[0]}
                collection={collectionData[0]}
              />
            </div>
          </div>

          <div className="w-full h-full mt-14">
            <div className="text-[44px] font-medium text-white">
              Featured Items
            </div>
            <div className="flex flex-wrap w-full justify-between justify-items-center gap-8 mt-8">
              {describeData.map((item, index) => (
                <div>
                  <div className="w-[501px] h-[501px] text-white">
                    <ImageView
                      url="marketPlace/image1.jpg"
                      width="400px"
                      height="400px"
                    />
                  </div>
                  <div className="mt-5 text-white">
                    <DescribeOptions item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-full mt-14 pb-14">
            <div className="text-[44px] font-medium text-white">
              Featured Collections
            </div>
            <div className="flex flex-wrap justify-between justify-items-center w-full mt-8">
              {collectionData.map((item, index) => (
                <div className="w-[772px]  mt-12">
                  <img
                    src={item.url}
                    className="w-full h-[434px]"
                    alt="Background"
                  />
                  <div className="mt-5 text-white">
                    <DescribeOptions
                      collection={item}
                      button="See Collection"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MenuCenter />
      <MenuBottom />
    </div>
  );
};

export default Marketplace;
