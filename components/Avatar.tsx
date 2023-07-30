import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="w-full translate-z-0"
      />
    </div>
  );
};

export default Avatar;