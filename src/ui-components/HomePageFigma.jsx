/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, Text, View } from "@aws-amplify/ui-react";
export default function HomePageFigma(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,240,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomePageFigma")}
    >
      <Icon
        width="911px"
        height="201px"
        viewBox={{ minX: 0, minY: 0, width: 911, height: 201 }}
        paths={[
          {
            d: "M0 20C0 8.95431 8.9543 0 20 0L891 0C902.046 0 911 8.95431 911 20L911 181C911 192.046 902.046 201 891 201L20 201C8.95429 201 0 192.046 0 181L0 20Z",
            fill: "rgba(255,190,190,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="32.4%"
        bottom="44.17%"
        left="18.33%"
        right="18.4%"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></Icon>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="69.7%"
        bottom="24.94%"
        left="41.6%"
        right="41.39%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(192,212,197,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="View previous entries"
        {...getOverrideProps(overrides, "Button30572745")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="61.07%"
        bottom="33.57%"
        left="42.43%"
        right="42.43%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(192,212,197,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Make today’s entry"
        {...getOverrideProps(overrides, "Button30572751")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="39.39%"
        bottom="57.11%"
        left="39.79%"
        right="42.36%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome to Photo Journal"
        {...getOverrideProps(overrides, "Welcome to Photo Journal")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="46.5%"
        bottom="50%"
        left="39.38%"
        right="41.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Make a new entry every day"
        {...getOverrideProps(overrides, "Make a new entry every day")}
      ></Text>
    </View>
  );
}
