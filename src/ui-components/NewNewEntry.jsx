/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { EntriesPage } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function NewNewEntry(props) {
  const { entriespage, overrides, ...rest } = props;
  const [
    textFieldThreeOneSixFiveTwoEightOneThreeValue,
    setTextFieldThreeOneSixFiveTwoEightOneThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixFiveTwoEightOneFourValue,
    setTextFieldThreeOneSixFiveTwoEightOneFourValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      entryTitle: textFieldThreeOneSixFiveTwoEightOneThreeValue,
      entrySentence: textFieldThreeOneSixFiveTwoEightOneFourValue,
    },
    model: EntriesPage,
    schema: schema,
  });
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,240,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "NewNewEntry")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(68,62,56,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="NewNewEntry"
            {...getOverrideProps(overrides, "NewNewEntry31652808")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31652809")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="96px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            src={entriespage?.entryImageURL}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            placeholder="Write title here"
            label=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneSixFiveTwoEightOneThreeValue}
            onChange={(event) => {
              setTextFieldThreeOneSixFiveTwoEightOneThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31652813")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Entry Content"
            placeholder="Write entry content"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneSixFiveTwoEightOneFourValue}
            onChange={(event) => {
              setTextFieldThreeOneSixFiveTwoEightOneFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31652814")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31652815")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(192,212,197,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Submit Entry"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseOut={() => {
            buttonOnMouseOut();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
