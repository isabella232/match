import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Snippet,
  SnippetGroup,
  SnippetSelector,
  SnippetProps,
  SnippetVariant,
  SnippetLanguage,
} from "../src";

export default {
  title: "Components/Snippet",
  component: Snippet,
  args: {
    children: "console.log('Ahoy, world!');",
    variant: SnippetVariant.DARK,
    language: SnippetLanguage.JAVASCRIPT,
    title: null,
  },
  argTypes: {
    children: { table: { disable: true } },
    language: { table: { disable: true } },
    title: { table: { disable: true } },
    variant: {
      control: { type: "select", options: Object.values(SnippetVariant) },
    },
  },
} as Meta;

const Template: Story<SnippetProps> = (args) => <Snippet {...args} />;

const jsExample1 = `console.log('Rose');
while(true) {
  console.log('is a rose');
}`;

const pythonExample1 = `print('Rose')
while(true):
  print('is a rose')`;

const jsExample2 = `console.log(\`
  I celebrate myself, and sing myself,
  And what I assume you shall assume,
  For every atom belonging to me as good belongs to you.
\`);`;

const pythonExample2 = `print("""
  I celebrate myself, and sing myself,
  And what I assume you shall assume,
  For every atom belonging to me as good belongs to you.
""")`;

export const MultiLine = Template.bind({});
MultiLine.args = {
  children: jsExample1,
  title: "Sacred Emily",
};

export const Bash = Template.bind({});
Bash.args = {
  children:
    'echo "The woods are lovely, dark and deep, But I have promises to keep, and miles to go before I sleep."',
  language: SnippetLanguage.SHELL,
};

export const Group: Story = () => (
  <SnippetGroup variant={SnippetVariant.LIGHT}>
    <Snippet language={SnippetLanguage.JAVASCRIPT}>{jsExample1}</Snippet>
    <Snippet language={SnippetLanguage.PYTHON}>{pythonExample1}</Snippet>
  </SnippetGroup>
);

export const Selector: Story = () => (
  <SnippetSelector>
    <SnippetGroup title="Sacred Emily">
      <Snippet language={SnippetLanguage.JAVASCRIPT}>{jsExample1}</Snippet>
      <Snippet language={SnippetLanguage.PYTHON}>{pythonExample1}</Snippet>
    </SnippetGroup>
    <SnippetGroup title="Song of Myself">
      <Snippet language={SnippetLanguage.JAVASCRIPT}>{jsExample2}</Snippet>
      <Snippet language={SnippetLanguage.PYTHON}>{pythonExample2}</Snippet>
    </SnippetGroup>
  </SnippetSelector>
);
