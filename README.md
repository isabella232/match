# Match - Twilio Brand Design System

Match is a design system used to build accessible, consistent, and high quality public-facing experiences at Twilio.

## Getting started

### Prerequisites

1. You must have a valid [Streamline license](https://app.streamlinehq.com/profile/developer) in order for the `@twilio-labs/match-icons-twilio` package to install. Ensure that your license key is present in the `STREAMLINE_SECRET` environment variable. We recommend setting this in your `~/.zshenv` file.
2. Storybook and Gatsby will attempt to load on `http://www.local.twilio.com`. Please ensure that you have the following in your `/etc/hosts` file: `127.0.0.1 www.local.twilio.com`.

Clone the Match repository anywhere on your computer...

```shell
git clone git@github.com:twilio-labs/match.git
```

Install and bootstrap Match dependencies...

```shell
yarn && yarn bootstrap
```

### Dev Container

Visual Studio Code's [Dev Container](https://code.visualstudio.com/docs/remote/containers) is the quickest and most reliable way to get up and running with Match.

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
3. Install the [Remote Development Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

When opening the `match` folder in VSCode, you will be prompted to "Reopen in a Container". If you fail to click this button, just hit `cmd + shift + p` and type `reopen` then select "Remote-Containers: Reopen in Container". VSCode will build a Docker container with all of the Match dependencies installed and bootstrapped. Open a new terminal with `` ctrl + ` `` and run one of the following commands.

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `yarn start:website`   | Starts the documentation website.             |
| `yarn start:storybook` | Starts the Storybook dev environment.         |
| `yarn start:all`       | Starts both Storybook and documentation site. |
