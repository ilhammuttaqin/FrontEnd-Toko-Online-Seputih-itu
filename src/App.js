// import { View, ScrollView } from "react-native";
// import { SplashScreen } from "./pages";

// export default function App() {
//   return <SplashScreen />;
// }

// const styles = {
//   logo: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#EEE8AA",
//   },
// };

// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./router";
import { ProfileTabViewer } from "./components";




function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;
