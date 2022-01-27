import { GlobalStyles } from "twin.macro";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen'
};

export const decorators = [
  (Story) => (
    <div>
      {/* */}
      <GlobalStyles />
      <Story />
    </div>
  ),
];
