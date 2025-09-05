import {
  Bleed,
  BlockStack,
  Box,
  Button,
  Divider,
  Grid,
  Select,
  TextField,
} from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { DISCOUNT_TYPE_OPTIONS } from "../libs/constants";

const RuleForm = ({ index, onRemove, isSubmitting }) => {
  const { control, setValue } = useFormContext();
  const rules = useWatch({ control, name: "rules" });
  const rule = rules[index];

  return (
    <Bleed marginInline={400}>
      <Box
        as="div"
        display="inlineBlock"
        padding="200"
        background="bg-fill-brand"
        color="text-brand-on-bg-fill"
        borderEndEndRadius="200"
        width="100px"
      >
        OPTION {index + 1}
      </Box>
      <Box padding={800} paddingBlockEnd="2000">
        <BlockStack inlineAlign="end">
          <Button
            onClick={onRemove}
            variant="tertiary"
            size={"large"}
            icon={DeleteIcon}
            disabled={isSubmitting}
          ></Button>
        </BlockStack>
        <Grid columns={{ xs: 1, sm: 3, md: 3, lg: 3, xl: 3 }} gap="400">
          <Controller
            name={`rules.${index}.title`}
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
            name={`rules.${index}.subtitle`}
            control={control}
            render={({ field }) => (
              <TextField
                label="Subtitle"
                autoComplete="off"
                value={field.value}
                onChange={field.onChange}
                readOnly={isSubmitting}
              />
            )}
          />
          <Controller
            name={`rules.${index}.label`}
            control={control}
            render={({ field }) => (
              <TextField
                label="Label (optinal)"
                autoComplete="off"
                value={field.value}
                onChange={field.onChange}
                readOnly={isSubmitting}
              />
            )}
          />
          <Controller
            name={`rules.${index}.quantity`}
            control={control}
            rules={{ required: "Quantity required" }}
            render={({ field, fieldState }) => (
              <TextField
                label="Quantity"
                autoComplete="off"
                type="number"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
                readOnly={isSubmitting}
              />
            )}
          />
          <Controller
            name={`rules.${index}.discountType`}
            control={control}
            render={({ field }) => (
              <Select
                label="Discount type"
                autoComplete="off"
                options={DISCOUNT_TYPE_OPTIONS}
                value={field.value}
                onChange={(ev) => {
                  field.onChange(ev);
                  if (!field.value) setValue(`rules.${index}.amount`, 0);
                }}
                disabled={isSubmitting}
              />
            )}
          />
          <Controller
            name={`rules.${index}.amount`}
            control={control}
            rules={rule?.discountType ? { required: "Campaign required" } : {}}
            render={({ field, fieldState }) => {
              if (!rule?.discountType) return;

              return (
                <TextField
                  label="Amount"
                  autoComplete="off"
                  type="number"
                  value={field.value}
                  onChange={field.onChange}
                  suffix={rule?.discountType}
                  error={fieldState.error?.message}
                  readOnly={isSubmitting}
                />
              );
            }}
          />
        </Grid>
      </Box>
      <Divider />
    </Bleed>
  );
};

export default RuleForm;
