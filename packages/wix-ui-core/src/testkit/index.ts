import { testkitFactoryCreator } from "wix-ui-test-utils/vanilla";

import { inputDriverFactory } from "../components/Input/Input.driver";
export const inputTestkitFactory = testkitFactoryCreator(inputDriverFactory);

import { textDriverFactory } from "../components/Text/Text.driver";
export const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

import { paginationDriverFactory } from "../components/Pagination/Pagination.driver";
export const paginationTestkitFactory = testkitFactoryCreator(
  paginationDriverFactory
);

import { badgeDriverFactory } from "../components/Badge/Badge.driver";
export const badgeTestkitFactory = testkitFactoryCreator(badgeDriverFactory);

import { tooltipDriverFactory } from "../components/Tooltip/Tooltip.driver";
export const tooltipTestkitFactory = testkitFactoryCreator(
  tooltipDriverFactory
);

import { dividerDriverFactory } from "../components/Divider/Divider.driver";
export const dividerTestkitFactory = testkitFactoryCreator(
  dividerDriverFactory
);

import { checkboxDriverFactory } from "../components/Checkbox/Checkbox.driver";
export const checkboxTestkitFactory = testkitFactoryCreator(
  checkboxDriverFactory
);

//Stylable
import { toggleSwitchDriverFactory } from "../components/ToggleSwitch/ToggleSwitch.driver";
export const toggleSwitchTestkitFactory = testkitFactoryCreator(
  toggleSwitchDriverFactory
);

import {
  textDriverFactory as stylableTextDriverFactory,
  TextDriver
} from "../components/StylableText/Text.driver";
export const stylableTextTestkitFactory = testkitFactoryCreator<TextDriver>(
  stylableTextDriverFactory
);
export { TextDriver };

import {
  buttonDriverFactory,
  ButtonDriver
} from "../components/Button/Button.driver";
export const buttonTestkitFactory = testkitFactoryCreator<ButtonDriver>(
  buttonDriverFactory
);
export { ButtonDriver };

import {
  badgeDriverFactory as stylableBadgeDriverFactory,
  BadgeDriver as StylableBadgeDriver
} from "../components/StylableBadge/Badge.driver";
export const stylableBadgeTestkitFactory = testkitFactoryCreator<
  StylableBadgeDriver
>(stylableBadgeDriverFactory);
export { StylableBadgeDriver };

import { radioButtonDriverFactory } from "../components/RadioButton/RadioButton.driver";
export const radioButtonTestkitFactory = testkitFactoryCreator(
  radioButtonDriverFactory
);

import { autocompleteDriverFactory } from "../components/Autocomplete/Autocomplete.driver";
export const autocompleteTestkitFactory = testkitFactoryCreator(
  autocompleteDriverFactory
);

import { sliderDriverFactory } from "../components/Slider/Slider.driver";
export const sliderTestkitFactory = testkitFactoryCreator(sliderDriverFactory);

import { addressInputDriverFactory } from "../components/AddressInput/AddressInput.driver";
export const addressInputTestkitFactory = testkitFactoryCreator(
  addressInputDriverFactory
);

import { labelDriverFactory } from "../components/Label/Label.driver";
export const labelTestkitFactory = testkitFactoryCreator(labelDriverFactory);

import { timePickerDriverFactory } from "../components/TimePicker/TimePicker.driver";
export const timePickerTestkitFactory = testkitFactoryCreator(
  timePickerDriverFactory
);

import { labelWithOptionsDriverFactory } from "../components/LabelWithOptions/LabelWithOptions.driver";
export const labelWithOptionsTestkitFactory = testkitFactoryCreator(
  labelWithOptionsDriverFactory
);

import {
  thumbnailDriverFactory,
  ThumbnailDriver
} from "../components/Thumbnail/Thumbnail.driver";
export const thumbnailTestkitFactory = testkitFactoryCreator<ThumbnailDriver>(
  thumbnailDriverFactory
);
export { ThumbnailDriver };

import { popoverDriverFactory } from "../components/Popover/Popover.driver";
export const popoverTestkitFactory = testkitFactoryCreator(
  popoverDriverFactory
);

import { linkDriverFactory } from "../components/Link/Link.driver";
export const linkTestkitFactory = testkitFactoryCreator(linkDriverFactory);