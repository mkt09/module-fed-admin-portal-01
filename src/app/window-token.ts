/**
 * Copyright 2020 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { InjectionToken } from '@angular/core';

export const WindowToken = new InjectionToken('Window');

/* istanbul ignore next */
export function windowProvider() {
    return window;
}
