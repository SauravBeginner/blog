type ImageInput = {
  src: string;
  className?: string;
  alt?: string;
};

export const Image = ({
  src,
  className = "aspect-square h-full w-full",
  alt,
}: ImageInput) => {
  return (
    <>
      <img className={className} alt={alt} src={src} />
    </>
  );
};
