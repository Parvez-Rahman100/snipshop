const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#D3F6FB] to-[#7DE1EF]">
      <div className="container mx-auto lg:flex-row flex-col lg:flex items-center justify-evenly text-[#5F5F5F] font-normal">
        <p className="cursor-pointer">Jewelry & Accessories</p>
        <p className="cursor-pointer border-b-2 border-[#041318]">
          Clothing & Shoes
        </p>
        <p className="cursor-pointer">Home & Living</p>
        <p className="cursor-pointer">Wedding & Party</p>
        <p className="cursor-pointer">Toys & Entertainment</p>
        <p className="cursor-pointer">Art & Collectibles</p>
        <p className="cursor-pointer">Craft Supplies & Tools</p>
        <p className="cursor-pointer">Vintage</p>
      </div>
    </div>
  );
};

export default Header;
