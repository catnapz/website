import { ImageLoader, ImageLoaderProps } from "next/image";

const imageLoader: ImageLoader = (props: ImageLoaderProps) => {
  return `./${props.src}`;
}
  
export default imageLoader;