import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={294}
    viewBox="0 0 220 294"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="220" height="220" /> 
    <rect x="0" y="242" rx="0" ry="0" width="97" height="51" /> 
    <rect x="135" y="246" rx="0" ry="0" width="84" height="34" />
  </ContentLoader>
)

export default Skeleton;