/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Entry(props) {
  const { entriespage, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/entry/:cid" });
  return (
    <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,240,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "Entry")}
    >
      <Image
        width="317px"
        height="210px"
        shrink="0"
        position="relative"
        borderRadius="7px"
        padding="0px 0px 0px 0px"
        src={entriespage?.entryImageURL}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        height="197px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Text
          fontFamily="Brawler"
          fontSize="14px"
          fontWeight="400"
          color="rgba(68,62,56,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="59px"
          left="16px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={entriespage?.entrySentence}
          {...getOverrideProps(overrides, "Sentence")}
        ></Text>
        <Text
          fontFamily="Brawler"
          fontSize="12px"
          fontWeight="400"
          color="rgba(68,62,56,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0px"
          width="139px"
          position="absolute"
          top="41px"
          left="16px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={entriespage?.entryDate}
          {...getOverrideProps(overrides, "Date")}
        ></Text>
        <Text
          fontFamily="Stalemate"
          fontSize="35px"
          fontWeight="400"
          color="rgba(68,62,56,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="314px"
          position="absolute"
          top="21px"
          left="3px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={entriespage?.entryTitle}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="133px"
          left="calc(50% - 57px - -1.5px)"
          direction="row"
          width="114px"
          height="35px"
          justifyContent="center"
          alignItems="center"
          borderRadius="8px"
          padding="8px 8px 8px 8px"
          backgroundColor="rgba(255,190,190,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="edit entry"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </View>
    </Flex>
  );
}
