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
    label: "",
    githubLink: "",
    maxLines: 10,
  },
  argTypes: {
    children: { table: { disable: true } },
    language: { table: { disable: true } },
    label: { table: { disable: true } },
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

const shellExample = `$ echo "The woods are lovely, dark and deep, But I have promises to keep, and miles to go before I sleep."`;

const jsExample = `const tmi = require('tmi.js');
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'your_username',
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: ['channel_name']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;

  if(message.toLowerCase() === '!hello') {
    client.say(channel, \`@$\{tags.username\}, Yo what's up\`);
  }
});`;

const pythonExample = `import os
import uuid
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import SyncGrant

load_dotenv()
app = Flask(__name__)
CORS(app)


@app.route('/token', methods=['POST'])
def token():
    token = AccessToken(os.environ['TWILIO_ACCOUNT_SID'],
                        os.environ['TWILIO_API_KEY_SID'],
                        os.environ['TWILIO_API_KEY_SECRET'],
                        grants=[SyncGrant(os.environ['TWILIO_SYNC_SERVICE_SID'])],
                        identity=uuid.uuid4().hex)
    return {'token': token.to_jwt().decode()}`;

const cSharpExample = `using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Twilio.Jwt.AccessToken;

namespace TwilioBlazorPhonecalls.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TokenController : ControllerBase
    {
        private readonly IConfiguration configuration;
        public TokenController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet]
        public string Get()
        {
            string twilioAccountSid = configuration["TwilioAccountSid"];
            string twilioApiKey = configuration["TwilioApiKey"];
            string twilioApiSecret = configuration["TwilioApiSecret"];
            string twiMLApplicationSid = configuration["TwiMLApplicationSid"];

            var grants = new HashSet<IGrant>();
            // Create a Voice grant for this token
            grants.Add(new VoiceGrant
            {
                OutgoingApplicationSid = twiMLApplicationSid,
                IncomingAllow = true
            });

            // Create an Access Token generator
            var token = new Token(
                twilioAccountSid,
                twilioApiKey,
                twilioApiSecret,
                // identity will be used as the client name for incoming dials
                identity: "blazor_client",
                grants: grants
            );

            return token.ToJwt();
        }
    }
}`;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: shellExample,
  language: SnippetLanguage.SHELL,
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  language: SnippetLanguage.JAVASCRIPT,
  children: jsExample,
  label: "Multi Line Snippet",
};

export const Group: Story<SnippetGroupProps> = ({
  variant,
  label,
  compact,
  ...props
}: SnippetGroupProps) => (
  <SnippetGroup variant={variant} label={label} compact={compact}>
    <Snippet {...props} language={SnippetLanguage.JAVASCRIPT}>
      {jsExample}
    </Snippet>
    <Snippet {...props} language={SnippetLanguage.PYTHON}>
      {pythonExample}
    </Snippet>
    <Snippet {...props} language={SnippetLanguage.CSHARP}>
      {cSharpExample}
    </Snippet>
  </SnippetGroup>
);
Group.args = {
  label: "Grouped Snippets",
  variant: SnippetVariant.DARK,
  compact: false,
};
Group.argTypes = {
  compact: {
    control: { type: "boolean" },
  },
};
