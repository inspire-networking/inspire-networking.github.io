# For account owners

These tasks need an owner of the `inspire-networking` organisation on GitHub.

## Add an editor

1. Ask them to create a GitHub account, verify their email, turn on two-factor authentication and tick **Keep my email addresses private**.
2. Open [Collaborators and teams](https://github.com/inspire-networking/inspire-networking.github.io/settings/access) and click **Add people**.
3. Enter their GitHub username and choose the **Write** role.
4. They accept the invitation sent to their email.

## Remove an editor

On the same page, select them and click **Remove**.

## Change where form messages go

The contact form uses Web3Forms, and the key is tied to the inbox it was created with.

1. Go to [web3forms.com](https://web3forms.com/), click **Create Access Key** and enter the new inbox address.
2. Open [settings.yml](https://github.com/inspire-networking/inspire-networking.github.io/blob/main/_data/settings.yml), click the **pencil icon** and replace the value of `form_key`.
3. Click **Commit changes...**, then **Commit changes**, then send a test message from the [Contact page](https://inspire-networking.github.io/contact-inspire/).

## Google Analytics

The Analytics ID is the `analytics_id` line in the same file. Analytics runs only on the real domain, and only after a visitor clicks Accept. Keep data retention at 14 months, because the privacy page says so.

## Things to keep renewed

- **The domain:** keep `inspire-networking.com` renewed at Domain.com. If it lapses, the website, email and members login are all at risk.
- **Owners:** keep at least two people as owners, and store your two-factor recovery codes safely.
