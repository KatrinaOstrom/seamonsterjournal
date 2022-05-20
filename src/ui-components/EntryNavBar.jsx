/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, SearchField } from "@aws-amplify/ui-react";
export default function EntryNavBar(props) {
  const { entrynavbar, overrides, ...rest } = props;
  const buttonThreeZeroSevenFiveTwoSevenSevenZeroOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonThreeZeroSevenFiveTwoSevenSevenNineOnClick = useNavigateAction({
    type: "url",
    url: "/newnewentry",
  });
  const imageOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="30px"
      direction="row"
      width="824px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 28px 24px 32px"
      backgroundColor="rgba(255,240,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "EntryNavBar")}
    >
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="46px"
        position="relative"
        backgroundColor="rgba(192,212,197,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Home"
        onClick={() => {
          buttonThreeZeroSevenFiveTwoSevenSevenZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Button30752770")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="46px"
        position="relative"
        backgroundColor="rgba(192,212,197,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="New entry"
        onClick={() => {
          buttonThreeZeroSevenFiveTwoSevenSevenNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button30752779")}
      ></Button>
      <Flex
        gap="32px"
        direction="row"
        width="481px"
        height="1px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="481px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <SearchField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          shrink="0"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          placeholder="search here"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          src="https://news.cnrs.fr/sites/default/files/styles/asset_image_full/public/assets/images/credit_alain_beneteau_mosasaurus_retouche.jpg?itok=-mOr2px-"
          onClick={() => {
            imageOnClick();
          }}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
