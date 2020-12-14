import { ActionProps } from "./types";

interface ActionMethods {
    getTime: (...args: any[]) => number;
}

abstract class AbstractAction implements ActionProps, ActionMethods {
    name: string;
    baseTime: number;
    amount: number;
    mastery: number;
    xp: number;

    constructor({ name, baseTime, amount, xp }: ActionProps){
        this.name = name;
        this.baseTime = baseTime;
        this.amount = amount;
        this.mastery = 1;
        this.xp = xp;
    }


    abstract getTime(): number;

    abstract getXPS(): number;
}

export default AbstractAction;

interface ConsumerItem {
    name: string;
    icon?: string;
}

export abstract class ConsumerAction extends AbstractAction {
    uses: ConsumerItem[];

    constructor({uses, ...rest}: ActionProps & {uses: ConsumerItem[]}) {
        super(rest);
        this.uses = uses;
    }
}
