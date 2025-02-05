
type ImagePropsType= {
  src: string,
  altText: string
}
const Image = ({src, altText}: ImagePropsType) => {
  return (
    <img src={src} alt={altText} />
  )
}

export default Image