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
npm install expo-alerts
```

### - Installing dependencies:

- For Native project:

```sh
npm install expo-alerts

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

## Documentation:

### Alert Component

Alert component that will show data, actions, images...

| Name       | Description                                                        | Required | Default | Type       |
| ---------- | ------------------------------------------------------------------ | ------- | ------- | ---------- |
| alertStyle | The custom style for the Alert component.                           |         |        | Object<AlertStyle>    |
| actions    | An array containing information about the Alert's actions.         |         |         | Array<AlertActions>      |
| icon       | The icon to display in the Alert component.                         |         |         | React Node |
| timeout    | The timeout in milliseconds for the Alert component.               |         |         | Number     |
| onHide     | The function to call when the Alert component is hidden.            |         | () => {}| Function   |
| isVisible  | Whether the Alert component is visible or not.                      |         |         | Boolean    |
| setVisible | The function to call to set the visibility of the Alert component. |         |         | Function   |
| title      | The title text for the Alert component.                             |         |         | String     |
| body       | The body text for the Alert component.                              |         |         | String     |
| children   | Any child components to render inside the Alert component.          |         |         | React Node |

#### AlertStyle

| Name        | Description                                             | Required | Default | Type       |
| ----------- | ------------------------------------------------------- | ------- | ------- | ---------- |
| radius      | The border radius of the Alert component.                |         | 20      | Number     |
| bgColor     | The background color of the Alert component.             |         | "white" | String     |
| titleColor  | The color of the title text in the Alert component.      |         | "black" | String     |
| titleSize   | The font size of the title text in the Alert component.  |         | 20      | Number     |
| bodySize    | The font size of the body text in the Alert component.   |         | 14      | Number     |
| bodyColor   | The color of the body text in the Alert component.       |         | "black" | String     |
| family      | The font family to use for the Alert component.          |         |         | String     |
| padding     | The padding around the Alert component.                  |         | 1       | Number     |
| width       | The width of the Alert component.                         |         | "100%"  | String     |
| height      | The height of the Alert component.                        |         | "auto"  | String     |
| maxWidth    | The maximum width of the Alert component.                 |         | 350     | Number     |
| maxHeight   | The maximum height of the Alert component.                |         |         | Number     |
| textAlign   | The text alignment in the Alert component.                |         | "center"| String     |
| gap         | The gap between the Alert component and its container.    |         | 20      | Number     |

#### AlertActions

| Name     | Description                                                       | Required | Default | Type                    |
| -------- | ----------------------------------------------------------------- | ------- | ------- | ----------------------- |
| direction| The direction of the inline buttons. Either "row" or "column".     |         | "row"   | String                  |
| gap      | The gap between the inline buttons.                               |         | 5       | Number                  |
| radius   | The radius of the inline buttons.                                 |         | 10      | Number                  |
| buttons  | An array containing information about the inline buttons.        |         |         | Array<AlertButton> |

#### AlertButtons

| Name   | Description                                           | Required | Default | Type        |
| ------ | ----------------------------------------------------- | ------- | ------- | ----------- |
| onPress| The function to call when the button is pressed. |         | () => {}| Function |
| title  | The text to display on the button.          |         | "" | String      |
| style  | The style for the button.                  |         | { buttonColor: "", textColor: "" } | Object |


### Toast Component

A Toast component displays a brief message to the user.

| Name            | Description                                                                 | Required | Default | Type                     |
| --------------- | --------------------------------------------------------------------------- | ------- | ------- | ------------------------ |
| position        | The position of the Toast component on the screen.                          |         | "top"   | String                   |
| customStyle     | The custom style for the Toast component.                                   |         |         | Object<ToastStyle>                   |
| timeout         | The timeout in milliseconds for the Toast component.                        |         | false   | Boolean or Number        |
| title           | The title text for the Toast component.                                     |         |         | String                   |
| body            | The body text for the Toast component.                                      |         |         | String                   |
| bottomPosition  | The distance in pixels from the bottom of the screen for a bottom-positioned Tost. |         | 60      | Number                   |
| topPosition     | The distance in pixels from the top of the screen for a top-positioned Toast.     |         | 60      | Number                   |
| icon            | The icon to display in the Toast component.                                 |         |         | React Node               |
| height          | The height of the Toast component.                                          |         | 60      | Number                   |
| action          | The function to call when an action is triggered in the Toast component.    |         | () => {}| Function                 |

#### ToastStyle

| Name             | Description                                         | Require | Default | Type   |
| ---------------- | --------------------------------------------------- | ------- | ------- | ------ |
| titleSize        | The font size of the title text in the Alert.       |         | 16      | Number |
| bodySize         | The font size of the body text in the Alert.        |         | 16      | Number |
| backgroundColor | The background color of the Alert.                  |         | #2AAF73 | String |
| titleColor       | The color of the title text in the Alert.           |         | white   | String |
| bodyColor        | The color of the body text in the Alert.            |         | white   | String |


## Author

Eloy Gómez García | [https://eloygomez.net.com](https://eloygomez.net)


## License

MIT
