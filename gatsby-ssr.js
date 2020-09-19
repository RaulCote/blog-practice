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
    const mode = localStorage.getItem('isDarkMode');
    if (mode === 'true') {
      document.body.classList.add('dark');
      
		}
  } catch (e) {
    console.log('gatsby-ssr ::::: error :::: ', e);
  }
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  setPreBodyComponents([script]);
};
