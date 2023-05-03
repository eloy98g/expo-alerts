# expo-alerts

Internal notifications module for React Native / Expo. Focused on providing a flexible, cross-platform and easy-to-implement solution for developers looking to add internal notifications to their apps

## Example Alert Notification

|                                                                         Customized by props                                                                          |                                                                      Customized by component                                                                       |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/eloy98g/expo-alerts/blob/main/example/media/propalert.gif?raw=true" height="350" alt="Prop Alert" /> | <img src="https://github.com/eloy98g/expo-alerts/blob/main/example/media/customalert.gif?raw=true" height="350" alt="Custom Alert" /> |

## Example Toast Notification

|                                                                            Theme Light                                                                             |                                                                            
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/eloy98g/expo-alerts/blob/main/example/media/toast.gif?raw=true" height="350" alt="toast" /> 

## Installation

### - Installing:

```sh
yarn add expo-alerts
```

### - Installing dependencies:

- For Native project:

```sh
yarn add expo-alerts

pod install
```

- For Expo project:

```sh
expo install expo-alerts
```

## Usage

### Alert configured by props
```js
import { Alert } from "expo-alerts";
import React, { useState } from "react";
import { Image } from "react-native";

const App = () => {
    // Handler
    const [visible, setVisible] = useState()
    
    // ALert configuration
    const alertConfig = {
        icon: <Image source={...} />,
        title: "Another alert with props",
        body: "This is an alert customized by props.\nAwesome!",
        alertStyle: { radius: 30, padding: 12 },
        actions: {
            direction: "row",
                gap: 5,
                radius: 50,
                buttons: [
                {
                    onPress: () => setVisible(),
                    title: "Aceptar",
                    style: { buttonColor: "#2AAF73", textColor: "white" },
                },
            ],
        },
    };
    
    return (
        <Alert isVisible={isVisible} setVisible={setVisible} {...alertConfig} />
    );
};

export default App;
```

### Alert by user custom component
```js
import { Alert } from "expo-alerts";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const App = () => {
    // Handler
    const [visible, setVisible] = useState()
    return (
        <Alert isVisible={isVisible} setVisible={setVisible}>
          // Children
        </Alert>
    );
};

```

### Toast Notification
```js
import { Alert } from "expo-alerts";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const App = () => {
    // Handler
    const [visible, setVisible] = useState()
    
    // Toast configuration
    const configuration = {
        position: "bottom",
        bottomPosition: 20,
        customStyle: {
            titleSize: 16,
            bodySize: 16,
            backgroundColor: "#2AAF73",
            titleColor: "white",
            bodyColor: "white",
        },
        timeout: 3000,
        title: "Timeout Toast",
        body: "This toast will be visible for 3 seconds",
    };
    
    return (
        <Toast
            visible={toast === "Toast"}
            setVisible={setToast}
            config={configuration}
        />
    );
};

```