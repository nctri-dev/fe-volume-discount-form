import {
  Bleed,
  BlockStack,
  Box,
  Button,
  Card,
  Divider,
  Text,
} from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import { useRef } from "react";
import RuleForm from "./RuleForm";
import { useFieldArray, useFormContext } from "react-hook-form";

const RuleCard = ({ isSubmitting }) => {
  const { control } = useFormContext();
  const {
    fields: rules,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "rules",
  });
  const elementRef = useRef();

  const handleAdd = () => {
    const lastRule = rules[rules.length - 1];
    append({
      title: "",
      subtitle: "",
      label: "",
      quantity: (Number(lastRule?.quantity) || 0) + 1,
      discountType: "",
      amount: 0,
    });
    if (elementRef.current) {
      setTimeout(
        () =>
          elementRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          }),
        50
      );
    }
  };

  return (
    <Card roundedAbove="sm">
      <BlockStack>
        <Bleed marginInline={400}>
          <Box paddingInline={400} paddingBlockEnd={400}>
            <Text as="h2" variant="headingMd">
              Volume discount rule
            </Text>
          </Box>
          <Divider borderWidth={100} />
        </Bleed>
        {rules.map((item, index) => (
          <RuleForm
            key={item.id}
            index={index}
            onRemove={() => remove(index)}
            isSubmitting={isSubmitting}
          />
        ))}
        <Box
          ref={elementRef}
          border="divider"
          borderRadius="base"
          paddingBlockStart={400}
        />
        <Button
          onClick={handleAdd}
          variant="primary"
          size="large"
          icon={PlusCircleIcon}
          disabled={isSubmitting}
        >
          Add option
        </Button>
      </BlockStack>
    </Card>
  );
};

export default RuleCard;
