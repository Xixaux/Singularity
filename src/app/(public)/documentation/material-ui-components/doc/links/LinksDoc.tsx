// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinksComponent from '../../components/links/Links';
import LinksRaw from '../../components/links/Links.tsx?raw';
import UnderlineLinkComponent from '../../components/links/UnderlineLink';
import UnderlineLinkRaw from '../../components/links/UnderlineLink.tsx?raw';
import ButtonLinkComponent from '../../components/links/ButtonLink';
import ButtonLinkRaw from '../../components/links/ButtonLink.tsx?raw';

function LinksDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/links"
                target="_blank"
                role="button"
                size="small"
                startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
            >
                Reference
            </Button>
            <Typography
                className="text-5xl my-4 font-bold"
                component="h1"
            >
                Links
            </Typography>
            <Typography className="description">
                The Link component enables seamless customization of anchor elements using your theme’s colors and typography styles.
            </Typography>

            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic links
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Link component is built upon the <a href="/material-ui/api/typography/">Typography</a> component, allowing you to utilize its properties.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Links.js"
                    className="my-4"
                    iframe={false}
                    component={LinksComponent}
                    raw={LinksRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Link component, however, has distinct default properties compared to the Typography component:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <code>{`color="primary"`}</code> to ensure the link stands out prominently.
                </li>
                <li>
                    <code>{`variant="inherit"`}</code> since the link is typically used as a child of a Typography component.
                </li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Underline
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>underline</code> prop allows you to control the underline behavior, with <code>always</code> as the default setting.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="UnderlineLink.js"
                    className="my-4"
                    iframe={false}
                    component={UnderlineLinkComponent}
                    raw={UnderlineLinkRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Security
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When using <code>{`target="_blank"`}</code> with Links, it’s <a href="https://developers.google.com/web/tools/lighthouse/audits/noopener">advised</a> to always include <code>{`rel="noopener"`}</code> or <code>{`rel="noreferrer"`}</code> for links to third-party content.
            </Typography>
            <ul className="space-y-4">
                <li>
                    <code>{`rel="noopener"`}</code> prevents the linked page from accessing the <code>window.opener</code> property and ensures it operates in a separate process, protecting against potential redirects to malicious URLs.
                </li>
                <li>
                    <code>{`rel="noreferrer"`}</code> provides the same protection while also suppressing the <em>Referer</em> header from being sent to the new page. ⚠️ Note that omitting the referrer header may impact analytics.
                </li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Third-party routing library
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A common scenario is to enable client-side navigation without a server round-trip. The <code>Link</code> component supports this through the <code>component</code> prop. Refer to this <a href="/material-ui/integrations/routing/#link">detailed guide</a> for more information.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Accessibility
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                (WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/link/">https://www.w3.org/WAI/ARIA/apg/patterns/link/</a>)
            </Typography>
            <ul className="space-y-4">
                <li>
                    Avoid vague link descriptions like “click here” or “go to” when providing link content. Instead, use <a href="https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text">descriptive text</a> for clarity.
                </li>
                <li>
                    For optimal user experience, links should visually distinguish themselves from surrounding text. For example, you can retain the default <code>{`underline="always"`}</code> behavior.
                </li>
                <li>
                    If a link lacks a meaningful href, it should be rendered as a <code>{`<button>`}</code> element, as outlined in this <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">guideline</a>. The example below demonstrates proper linking with a <code>{`<button>`}</code>:
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ButtonLink.js"
                    className="my-4"
                    iframe={false}
                    component={ButtonLinkComponent}
                    raw={ButtonLinkRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Keyboard accessibility
            </Typography>
            <ul className="space-y-4">
                <li>
                    Interactive elements should receive focus in a logical sequence when the user presses the <kbd className="key">Tab</kbd> key.
                </li>
                <li>
                    Users should be able to activate a link by pressing the <kbd className="key">Enter</kbd> key.
                </li>
            </ul>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Screen reader accessibility
            </Typography>
            <ul className="space-y-4">
                <li>
                    When a link gains focus, screen readers should vocalize a clear and descriptive link name. For links opening in a new window or tab, include an <a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8"><code>aria-label</code></a> to notify screen reader users—for example, <em>“Visit the About page, which opens in a new window, for more details.”</em>
                </li>
            </ul>
        </>
    );
}

export default LinksDoc;