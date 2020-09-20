/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { createElement } from 'react';

const applyDarkModeClass = `
(function() {
  try {
    window.__theme = 'light';
    window.__setPreferedTheme = function() {};

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferedTheme(e.matches ? 'dark' : 'light');
    })

    const blogTheme = localStorage.getItem('theme');
    if (blogTheme === 'dark' || (blogTheme === null && darkQuery.matches)) {
      window.__theme = 'dark';
      document.body.classList.add('dark');
		}
  } catch (e) {
    console.log('gatsby-ssr ::::: error :::: ', e);
  }
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement('script', {
    key: 'script-key-0',
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  setPreBodyComponents([script]);
};
