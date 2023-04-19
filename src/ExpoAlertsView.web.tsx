import * as React from 'react';

import { ExpoAlertsViewProps } from './ExpoAlerts.types';

export default function ExpoAlertsView(props: ExpoAlertsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
