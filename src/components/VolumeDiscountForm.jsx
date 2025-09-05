import { BlockStack, Form, Toast } from "@shopify/polaris";
import GeneralForm from "./GeneralForm";
import RuleCard from "./RuleCard";
import { useCallback, useState } from "react";

const VolumeDiscountForm = ({ methods }) => {
  const [active, setActive] = useState(false);
  const [activeError, setActiveError] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const toggleActiveError = useCallback(
    () => setActiveError((activeError) => !activeError),
    []
  );

  const toastMarkup = active ? (
    <Toast content="Created successfully" onDismiss={toggleActive} />
  ) : null;

  const toastErrorMarkup = activeError ? (
    <Toast
      content="At least one option is required"
      error
      onDismiss={toggleActiveError}
    />
  ) : null;

  const onSubmit = async (data) => {
    if (data.rules.length < 1) {
      toggleActiveError();
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    methods.reset();
    toggleActive();
  };
  return (
    <Form onSubmit={methods.handleSubmit(onSubmit)}>
      <BlockStack gap="400">
        <GeneralForm isSubmitting={methods.formState.isSubmitting} />
        <RuleCard isSubmitting={methods.formState.isSubmitting} />
        {toastMarkup}
        {toastErrorMarkup}
      </BlockStack>
    </Form>
  );
};

export default VolumeDiscountForm;
