import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAlertsViewProps } from './ExpoAlerts.types';

const NativeView: React.ComponentType<ExpoAlertsViewProps> =
  requireNativeViewManager('ExpoAlerts');

export default function ExpoAlertsView(props: ExpoAlertsViewProps) {
  return <NativeView {...props} />;
}
