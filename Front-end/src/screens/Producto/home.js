import React from "react";
import { ScrollView } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Auth/Search";
import colors from "../../styles/colors";
import NuevosProduc from "../../components/Home/NuevosProduc";
import Banner from "../../components/Home/Banner";

export default function home() {
  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search/>
      <ScrollView>
        <Banner/>
        <NuevosProduc/>
      </ScrollView>
    </>
  );
}
