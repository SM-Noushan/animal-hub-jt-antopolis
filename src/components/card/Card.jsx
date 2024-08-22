import Image from "next/image";

const Card = ({ item }) => {
  const { name, image } = item || {};
  return (
    <figure className="w-full space-y-3.5">
      <Image
        className="object-cover h-48 border border-white/10 rounded-lg w-full"
        src={image}
        alt={`${name}-image`}
        width={160}
        height={190}
      />
      <figcaption className="text-center text-lg uppercase opacity-80">
        {name}
      </figcaption>
    </figure>
  );
};

export default Card;
