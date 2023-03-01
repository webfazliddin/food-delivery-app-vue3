import type { App } from "vue";

import { installGlobalIcons } from "@/components/global-icons";

// UI components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
import DealCard from "@/components/Cards/DealCard.vue";
import CategoryCard from "@/components/Cards/CategoryCard.vue";
import ProductCard from "@/components/Cards/ProductCard.vue";
import SkeletonShimmer from "@/components/Loaders/SkeletonShimmer.vue";

// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import BaseCheckbox from "@/components/Base/BaseCheckbox.vue";
import BaseInput from "@/components/Base/BaseInput.vue";

export default {
  install(app: App): void {
    // Configure some parameters before installing components
    installGlobalIcons();

    // Register global components here
    app.component("font-awesome-icon", FontAwesomeIcon);
    app.component("BaseAlert", BaseAlert);
    app.component("BaseButton", BaseButton);
    app.component("BaseSpinner", BaseSpinner);
    app.component("BaseCheckbox", BaseCheckbox);
    app.component("BaseInput", BaseInput);

    app.component("AppHeader", AppHeader);
    app.component("AppFooter", AppFooter);
    app.component("SkeletonShimmer", SkeletonShimmer);
    app.component("DealCard", DealCard);
    app.component("CategoryCard", CategoryCard);
    app.component("ProductCard", ProductCard);
  },
};
