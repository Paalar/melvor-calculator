import React from "react";
import { SkillNamesType } from "./common/skillNames";
import Header from "./components/Header";

interface Props {
    pageName: SkillNamesType;
}

const Page: React.FC<Props> = ({ pageName, children }) => {
    return (
        <>
            <Header pageName={pageName} />
            {children}
        </>
    );
};

export default Page;
