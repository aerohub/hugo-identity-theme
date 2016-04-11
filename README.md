# Hugo Identity Theme

Hugo Identity Theme is based on [Identity template by HTML5 UP](http://html5up.net/identity). It was ported to Hugo for training and fun. It is rather configurable and flexible despite it's simplicity.

## Features

- Responsive design
- Configurable appearance
- Configurable social links
- Contact form
- Google Analytics

## Screenshot

![Hugo Identity Theme screenshot](https://raw.githubusercontent.com/aerohub/hugo-identity-theme/master/images/screenshot.png)


## Contents

- [Installation](#installation)
- [Getting started](#getting-started)
    - [The config file](#the-config-file)
    - [Make the contact form working](#make-the-contact-form-working)
    - [Nearly finished](#nearly-finished)
- [Contributing](#contributing)
- [License](#license)
- [Annotations](#annotations)


## Installation

Inside the folder of your Hugo site run:

    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/aerohub/hugo-identity-theme

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing the Identity Theme successfully it requires a just a few more steps to get your site running.


### The config file

Take a look inside the [`exampleSite`](//github.com/aerohub/hugo-identity-theme/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](//github.com/aerohub/hugo-identity-theme/blob/master/exampleSite/config.toml). To use it, copy the [`config.toml`](//github.com/aerohub/hugo-identity-theme/blob/master/exampleSite/config.toml) in the root folder of your Hugo site. Feel free to change the strings in this theme. Play with already placed avatars and background images or use yours.


### Make the contact form working

Since this page will be static, you can use [formspree.io](//formspree.io/) as proxy to send the actual email. Each month, visitors can send you up to one thousand emails without incurring extra charges. Begin the setup by following the steps below:

1. Enter your email address under 'email' in the [`config.toml`](//github.com/aerohub/hugo-identity-theme/blob/master/exampleSite/config.toml)
2.  Enable form by setting `enable` to `true` in contact settings
3. Upload the generated site to your server
4. Send a dummy email yourself to confirm your account
5. Click the confirm link in the email from [formspree.io](//formspree.io/)
6. You're done. Happy mailing!


### Nearly finished

In order to see your site in action, run Hugo's built-in local server. 

    $ hugo server -w

Now enter `localhost:1313` in the address bar of your browser.


## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](//github.com/aerohub/hugo-identity-theme/issues) to let me know. Or make directly a [pull request](//github.com/aerohub/hugo-identity-theme/pulls).


## License

This work is licensed under the Creative Commons Attribution 3.0 Unported License. For more information read the [License](//github.com/aerohub/hugo-identity-theme/blob/master/LICENSE.md).


## Annotations

Thanks 

- to [spf13](//github.com/spf13) for creating Hugo and the awesome community around the project
- to [digitalcraftsman](//github.com/digitalcraftsman) for creating Hugo themes and writing nice READMEs
- to [n33](https://github.com/n33), (of course!) for original Identity Theme