import React from "react";
import { SkillNames } from "./common/skillNames";
import Header from "./Header";

interface Props {
    pageName: keyof typeof SkillNames;
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
