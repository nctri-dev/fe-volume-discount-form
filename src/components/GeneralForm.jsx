import {
  BlockStack,
  Button,
  Card,
  Form,
  FormLayout,
  InlineGrid,
  Text,
  TextField,
} from "@shopify/polaris";
import { Controller, useFormContext } from "react-hook-form";

const GeneralForm = ({ isSubmitting }) => {
  const { control } = useFormContext();

  return (
    <Card roundedAbove="sm">
      <BlockStack gap="200">
        <InlineGrid columns="1fr auto">
          <Text as="h2" variant="headingMd">
            General
          </Text>
          <Button
            variant="primary"
            submit
            onClick={() => {}}
            accessibilityLabel="Save"
            loading={isSubmitting}
          >
            Save
          </Button>
        </InlineGrid>
        <FormLayout>
          <Controller
            name="campaign"
            control={control}
            rules={{ required: "Campaign required" }}
            render={({ field, fieldState }) => (
              <TextField
                label="Campaign"
                autoComplete="off"
                autoFocus
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
                readOnly={isSubmitting}
              />
            )}
          />
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title required" }}
            render={({ field, fieldState }) => (
              <TextField
                label="Title"
                autoComplete="off"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
                readOnly={isSubmitting}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                label="Description"
                autoComplete="off"
                value={field.value}
                onChange={field.onChange}
                readOnly={isSubmitting}
              />
            )}
          />
        </FormLayout>
      </BlockStack>
    </Card>
  );
};

export default GeneralForm;
