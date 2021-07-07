# Twilio Match Design System Icons

React Icon pack for Twilio. This is a hybrid bundling of [Streamline](https://streamlinehq.com/) icons and bespoke Twilio icons.

## Streamline

A `STREAMLINE_SECRET` must be present for Streamline icons to be downloaded. This key may be found on the [Streamline developer page](https://app.streamlinehq.com/profile/developer).

For development, place this secret in the `~/.zshenv` file of your home directory. Then run `yarn build` to regenerate the icon library.

All applications which consume `@twilio-labs/match-icons-twilio` must have a valid `STREAMLINE_SECRET` present at install time.
