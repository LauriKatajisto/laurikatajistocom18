/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { createClient } from 'contentful';

const client = createClient({
  space: 'cjbi6sgbg14i',
  accessToken: '12f2563dace255a6b18da79c0b581f1a860ebc0d48477c78282af233ea592e7a',
});

export default {
  paths: {
    dist: '2018',
  },
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const entries = await client.getEntries({
      content_type: 'page',
      order: 'fields.order',
    });

    console.log(entries.items[2].fields);
    const pages = entries.items.map((entry) => {
      return {
        path: entry.fields.slug,
        component: `src/containers/${entry.fields.component}`,
        getData: async () => ({
          fields: entry.fields,
        }),
      };
    });

    pages.push({
      is404: true,
      component: 'src/containers/404',
    });
    console.log(pages);
    return pages;
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    // eslint-disable-next-line
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/brands.js" integrity="sha384-sCI3dTBIJuqT6AwL++zH7qL8ZdKaHpxU43dDt9SyOzimtQ9eyRhkG3B7KMl6AO19" crossOrigin="anonymous" />
            <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossOrigin="anonymous" />
            <title>LauriKatajisto.com</title>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
};
