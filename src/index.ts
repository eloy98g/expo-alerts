import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAlerts.web.ts
// and on native platforms to ExpoAlerts.ts
import ExpoAlertsModule from './ExpoAlertsModule';
import ExpoAlertsView from './ExpoAlertsView';
import { ChangeEventPayload, ExpoAlertsViewProps } from './ExpoAlerts.types';

// Get the native constant value.
export const PI = ExpoAlertsModule.PI;

export function hello(): string {
  return ExpoAlertsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAlertsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAlertsModule ?? NativeModulesProxy.ExpoAlerts);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAlertsView, ExpoAlertsViewProps, ChangeEventPayload };
