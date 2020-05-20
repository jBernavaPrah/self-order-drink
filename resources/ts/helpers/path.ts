import FC from "../types/FC"
import {generatePath} from "react-router";

const path = (component: FC | string, params?: { [paramName: string]: string | number | boolean | undefined },): string => {
    return generatePath(typeof component === 'string' ? component : component.path, params)
};

export default path;
