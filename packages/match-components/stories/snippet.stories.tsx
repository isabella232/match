import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Snippet,
  SnippetGroup,
  SnippetProps,
  SnippetGroupProps,
  SnippetVariant,
  SnippetLanguage,
} from "../src";

export default {
  title: "Components/Snippet",
  component: Snippet,
  args: {
    ...Snippet.defaultProps,
    title: null,
    githubLink: "",
    maxLines: 10,
  },
  argTypes: {
    children: { table: { disable: true } },
    language: { table: { disable: true } },
    title: { table: { disable: true } },
    variant: {
      control: { type: "select", options: Object.values(SnippetVariant) },
    },
    githubLink: { control: { type: "text" } },
    wrapLines: {
      control: { type: "boolean" },
    },
    showLineNumbers: {
      control: { type: "boolean" },
    },
    maxLines: {
      control: { type: "number" },
    },
  },
} as Meta;

const Template: Story<SnippetProps> = (args) => <Snippet {...args} />;

const shellExample = `echo "The woods are lovely, dark and deep, But I have promises to keep, and miles to go before I sleep."`;

const jsExample = `console.log('Rose');
while(true) {
  console.log('is a rose');
}`;

const pythonExample = `print('Rose')
while(true):
  print('is a rose')`;

const cSharpExample = `// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

class Program
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // and set the environment variables. See http://twil.io/secure
        string accountSid = Environment.GetEnvironmentVariable("TWILIO_ACCOUNT_SID");
        string authToken = Environment.GetEnvironmentVariable("TWILIO_AUTH_TOKEN");

        TwilioClient.Init(accountSid, authToken);

        var call = CallResource.Create(
            url: new Uri("http://demo.twilio.com/docs/voice.xml"),
            to: new Twilio.Types.PhoneNumber("+15558675310"),
            from: new Twilio.Types.PhoneNumber("+15017122661")
        );

        Console.WriteLine(call.Sid);
    }
}`;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: shellExample,
  language: SnippetLanguage.SHELL,
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  language: SnippetLanguage.CSHARP,
  children: cSharpExample,
  title: "Multi Line Snippet",
};

export const Group: Story<SnippetGroupProps> = (args) => (
  <SnippetGroup {...args}>
    <Snippet language={SnippetLanguage.JAVASCRIPT}>{jsExample}</Snippet>
    <Snippet language={SnippetLanguage.PYTHON}>{pythonExample}</Snippet>
  </SnippetGroup>
);
Group.args = {
  title: "Grouped Snippets",
  variant: SnippetVariant.DARK,
};
Group.argTypes = {
  variant: {
    control: { type: "select", options: Object.values(SnippetVariant) },
  },
  title: {
    control: { type: "text" },
  },
  githubLink: {
    table: { disable: true },
  },
  wrapLines: {
    table: { disable: true },
  },
  showLineNumbers: {
    table: { disable: true },
  },
};
