import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Frame } from "@shopify/polaris";
import CreateVolumeDiscountPage from "./pages/CreateVolumeDiscount";

const App = () => {
  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <CreateVolumeDiscountPage />
      </Frame>
    </AppProvider>
  );
};

export default App;
