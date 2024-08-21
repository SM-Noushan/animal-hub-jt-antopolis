const Card = ({ url }) => {
  return (
    <figure className="w-full space-y-3.5">
      <img
        className="object-cover object-to h-48 border border-white/10 rounded-lg w-full"
        src={url}
        alt="elephant-image"
      />
      <figcaption className="text-center text-lg uppercase opacity-80">
        Elephant
      </figcaption>
    </figure>
  );
};

export default Card;
