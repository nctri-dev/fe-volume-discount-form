export const DISCOUNT_TYPE_OPTIONS = [
  { label: "None", value: "" },
  { label: "% discount", value: "%" },
  { label: "Discount / each", value: "$" },
];

export const DISCOUNT_TYPE_LABEL = DISCOUNT_TYPE_OPTIONS.reduce((acc, cur) => {
  acc[cur.value] = cur.label;
  return acc;
}, {});
