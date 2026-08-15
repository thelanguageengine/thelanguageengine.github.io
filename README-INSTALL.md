# The Language Engine — Production GitHub Pages Site

Repository:
`thelanguageengine/thelanguageengine.github.io`

Public root:
`https://thelanguageengine.github.io/`

## Upload

This ZIP is designed for the EMPTY root of the repository.
Upload every file/folder from the ZIP root directly into `thelanguageengine.github.io`.

Do not create an extra nested folder such as:
`thelanguageengine.github.io/the-language-engine-production-site/...`

## Final URLs

Publisher home:
`https://thelanguageengine.github.io/`

Apps catalog:
`https://thelanguageengine.github.io/apps/`

AI Grammar Checker & Rewriter:
`https://thelanguageengine.github.io/apps/grammar-checker/`

App privacy:
`https://thelanguageengine.github.io/apps/grammar-checker/privacy/`

App terms:
`https://thelanguageengine.github.io/apps/grammar-checker/terms/`

App support:
`https://thelanguageengine.github.io/apps/grammar-checker/support/`

Publisher privacy:
`https://thelanguageengine.github.io/privacy/`

Publisher terms:
`https://thelanguageengine.github.io/terms/`

Publisher support:
`https://thelanguageengine.github.io/support/`

app-ads.txt:
`https://thelanguageengine.github.io/app-ads.txt`

## app-ads.txt

The requested shared line is:

`google.com, pub-2683875379511234, DIRECT, f08c47fec0942fa0`

## Google Play listing

Package:
`com.syntaxly.grammarchecker.ai.dictionary.spellchecker`

Play Store:
`https://play.google.com/store/apps/details?id=com.syntaxly.grammarchecker.ai.dictionary.spellchecker`

Developer page:
`https://play.google.com/store/apps/developer?id=The+Language+Engine`

Current public publisher:
`The Language Engine`

Legal developer shown by Google Play:
`TENBYTES SOFTWARE SOLUTIONS (PRIVATE) LIMITED`

## Google Play Console / website migration recommendation

After deployment and URL verification:

- Replace the current Blogger website with:
  `https://thelanguageengine.github.io/`
- Replace the app's current privacy URL with:
  `https://thelanguageengine.github.io/apps/grammar-checker/privacy/`
- Use the app support destination where a dedicated support URL is accepted:
  `https://thelanguageengine.github.io/apps/grammar-checker/support/`

## IMPORTANT: Data Safety audit before the next Play submission

The live Play listing currently declares:
- No data collected
- No data shared with third parties

The existing Blogger privacy policy, however, says the app uses:
- Google AdMob
- Firebase Analytics
- crash reporting
- performance monitoring

Those services may process device, usage, advertising, crash or diagnostic information depending on the production SDK configuration.

Before your next Google Play update:
1. inspect the exact Firebase modules in the release build;
2. inspect AdMob / consent behavior;
3. document whether AI writing text is sent to a remote AI/backend provider;
4. document recent-work storage and retention;
5. update Play Console Data Safety answers if the current declaration does not match the shipped app;
6. keep the website Privacy Policy synchronized with the actual build.

Do not simply copy the current “No data collected” declaration into future releases without verifying the production SDK behavior.

## Google Ads / analytics readiness

The website preserves:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content
- gclid
- gbraid
- wbraid

on Google Play outbound links.

It also emits a local `dataLayer` event named:
`google_play_outbound_click`

No Google Ads or GA tag is installed because no Ads/GA measurement ID was supplied.

## Production notes

- Responsive desktop/tablet/mobile layout.
- Reduced-motion support.
- No first-party cookies.
- No third-party analytics tag installed on the website.
- Live Google Play artwork is used for the app icon/screenshots, with a local fallback app icon.
- SEO metadata, canonical URLs, JSON-LD, robots.txt, sitemap.xml and custom 404 included.
