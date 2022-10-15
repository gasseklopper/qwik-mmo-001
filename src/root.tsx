import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import { QwikPartytown } from './components/partytown/partytown';
import './global.css';

export default component$(() => {
  /*
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" name="description" content="Halten Sie bei Ihren Meta Descriptions die Länge von 140 bis 160 Zeichen ein, damit Google sie vollständig anzeigt. Verwenden Sie auch Ihr Keyword!"/>
        <RouterHead />
		<QwikPartytown forward={["dataLayer.push"]} />;

        <script
        async
        type="text/partytown"
        src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"
        />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
