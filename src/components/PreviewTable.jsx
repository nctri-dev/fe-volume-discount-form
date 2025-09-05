import {
  BlockStack,
  Card,
  EmptySearchResult,
  IndexTable,
  Text,
} from "@shopify/polaris";
import { useFormContext } from "react-hook-form";
import { DISCOUNT_TYPE_LABEL } from "../libs/constants";

const PreviewTable = () => {
  const { watch } = useFormContext();
  const { title, description, rules } = watch();

  const rowMarkup = rules.map(
    ({ title, discountType, quantity, amount }, index) => (
      <IndexTable.Row id={title} key={index} position={index}>
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{DISCOUNT_TYPE_LABEL[discountType]}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {Number(quantity).toLocaleString()}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {!!discountType &&
              `${Number(amount).toLocaleString()} ${discountType}`}
          </Text>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const resourceName = {
    singular: "rule",
    plural: "rules",
  };

  const emptyStateMarkup = (
    <EmptySearchResult title={"No rules yet"} withIllustration />
  );

  return (
    <BlockStack>
      <Card roundedAbove="sm">
        <BlockStack gap="400">
          <Text as="h2" variant="headingMd">
            Preview
          </Text>
          <Text alignment="center" variant="headingMd">
            {title}
          </Text>
          <Text variant="bodyMd">{description}</Text>
          <IndexTable
            resourceName={resourceName}
            emptyState={emptyStateMarkup}
            itemCount={rules.length}
            selectable={false}
            headings={[
              { title: "Title" },
              { title: "Discount Type" },
              { title: "Quantity", alignment: "end" },
              { title: "Amount", alignment: "end" },
            ]}
          >
            {rowMarkup}
          </IndexTable>
        </BlockStack>
      </Card>
    </BlockStack>
  );
};

export default PreviewTable;
