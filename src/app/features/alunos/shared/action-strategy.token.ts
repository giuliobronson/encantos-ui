import { InjectionToken } from '@angular/core';
import { FabActionStrategy } from './fab-action-strategy.interface';

export const ACTION_STRATEGIES = new InjectionToken<{ [key: string]: FabActionStrategy }>('ACTION_STRATEGIES');
