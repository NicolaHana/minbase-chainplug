interface Props {
  url: string;
  width?: string;
  height: string;
}
const ImageView = ({ url, width, height }: Props) => {
  return (
    <div className="relative w-full h-full">
      <img
        src="marketPlace/background.png"
        className="absolute w-full h-full object-cover"
        alt="Background"
      />
      {width ? (
        <img
          src={url}
          className="absolute w-full y-full inset-0 m-auto object-cover"
          style={{ width: width, height: height }}
          alt="Foreground"
        />
      ) : (
        <img
          src={url}
          className="absolute w-full inset-0 m-auto pr-20 pl-20 object-cover"
          style={{ height: height }}
          alt="Foreground"
        />
      )}
    </div>
  );
};
export default ImageView;
