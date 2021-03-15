import Skeleton from "react-loading-skeleton";


const ShowLoadingPage = ({
    count = 1
}) => (<Skeleton
    width={210}
    height={300}
    count={count}
    style={{ margin: 3 }}
/>);

export default ShowLoadingPage;