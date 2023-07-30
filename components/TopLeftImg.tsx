import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-[200px] xl:w-[400px] opacity-50 mix-blend-color-dodge">
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt="top left image"
      />
    </div>
  );
};

export default TopLeftImg;
