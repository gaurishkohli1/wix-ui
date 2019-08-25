import * as React from 'react';
import { SignatureInput } from '..';
import { ButtonNext } from '../../button-next';
import { SIGNNATURE_INPUT_METADATA } from '../constants';
import { SimpleExample } from './SimpleExample';
import {
  header,
  description,
  title,
  tabs,
  tab,
  divider,
  code,
  testkit,
  importExample,
  playground,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import { Category } from '../../../../stories/utils';
import { baseScope as allComponents } from '../../../../stories/utils';
import compoundReadmeApi from './CompoundComponentsAPI.md';
import { SigningPadOwnProps } from '../signing-pad/SigningPad';

const liveCode = config =>
  code({
    compact: true,
    components: allComponents,
    ...config,
  });

const SignatureChildren = (padProps: SigningPadOwnProps = {}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  >
    <SignatureInput.Title>
      {({ getTitleProps }) => (
        <span {...getTitleProps()}>Enter your signature here:</span>
      )}
    </SignatureInput.Title>
    <SignatureInput.SigningPad
      {...padProps}
      style={{ border: '1px solid black' }}
    />
    <SignatureInput.ClearButton>
      {({ getClearButtonProps }) => (
        <ButtonNext
          {...getClearButtonProps({
            onClick: () => window.alert('clear callback'),
          })}
        >
          Clear
        </ButtonNext>
      )}
    </SignatureInput.ClearButton>
  </div>
);

export default {
  category: Category.COMPONENTS,
  storyName: SIGNNATURE_INPUT_METADATA.displayName,
  component: SignatureInput,
  componentPath: '..',
  componentProps: {
    children: SignatureChildren(),
  },
  exampleProps: {
    children: [
      {
        label: 'Regular',
        value: SignatureChildren(),
      },
      {
        label: 'Disabled',
        value: SignatureChildren({ disabled: true }),
      },
      {
        label: 'Custom signature width',
        value: SignatureChildren({ penWidth: '5' }),
      },
      {
        label: 'Custom signature color',
        value: SignatureChildren({ penColor: 'blue' }),
      },
    ],
  },
  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Sidebar/',
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description({
            title: 'Description',
            text:
              'A canvas based signature input, it also provides reset button and title',
          }),
          importExample(
            "import {SignatureInput} from 'wix-ui-core/signature-input';",
          ),
          divider(),
          title('Examples'),
          columns([
            description({
              title: 'Basic example',
              text:
                "`SignatureInput` does not render anything, but uses compounding to provide all the component's parts. " +
                'The `SignatureInput.Title` and `SignatureInput.ClearButton` provide render functions to get needed ' +
                'props for rendering.',
            }),
            liveCode({
              source: SimpleExample,
            }),
          ]),
        ],
      }),
      tab({
        title: 'Compound components API',
        sections: [description(compoundReadmeApi)],
      }),
      tab({ title: 'Testkit', sections: [testkit()] }),
      tab({ title: 'Playground', sections: [playground()] }),
    ]),
  ],
};
