import type { NextPage} from "next";
import useCounter from "utils/hooks/count";


const PageCounter: NextPage = () => {
    return ( 
        useCounter(0)
    )
}

export default PageCounter