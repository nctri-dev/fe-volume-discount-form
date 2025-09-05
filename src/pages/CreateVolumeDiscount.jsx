import { InlineGrid, Page } from "@shopify/polaris";
import PreviewTable from "../components/PreviewTable";
import { FormProvider, useForm } from "react-hook-form";
import VolumeDiscountForm from "../components/VolumeDiscountForm";
import { useRef } from "react";

const CreateVolumeDiscountPage = () => {
  const initRule = useRef({
    title: "",
    subtitle: "",
    label: "",
    quantity: 1,
    discountType: "",
    amount: 0,
  });
  const methods = useForm({
    defaultValues: {
      campaign: "",
      title: "",
      description: "",
      rules: [{ ...initRule.current }, { ...initRule.current, quantity: 2 }],
    },
  });
  return (
    <Page title="Create volume discount" backAction={{ url: "#" }}>
      <InlineGrid columns={{ xs: 1, md: "1fr 1fr", lg: "3fr 2fr" }} gap="400">
        <FormProvider {...methods}>
          <VolumeDiscountForm methods={methods} />
          <PreviewTable />
        </FormProvider>
      </InlineGrid>
    </Page>
  );
};

export default CreateVolumeDiscountPage;
