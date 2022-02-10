/*
 * Copyright '2021' Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { SingleSpaProps } from './single-spa-props';

export class SingleSpaPropsStore {
    public get Props() {
        return this.props;
    }

    private constructor() {}
    private static instance: SingleSpaPropsStore;

    private props!: SingleSpaProps;

    public static getInstance(): SingleSpaPropsStore {
        if (!SingleSpaPropsStore.instance) {
            SingleSpaPropsStore.instance = new SingleSpaPropsStore();
        }
        return SingleSpaPropsStore.instance;
    }

    public store(singleSpaProps: SingleSpaProps) {
        this.props = singleSpaProps;
    }
}
