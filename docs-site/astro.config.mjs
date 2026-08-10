import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

export default defineConfig({
  site: 'https://checklists.missionit.com',
  base: '/',
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      components: {
        Hero: './src/components/Hero.astro',
      },
      logo: {
        src: './src/assets/Mission_IT_and_NIST_National_Checklist_NCP_Program_Logo.png',
        replacesTitle: false
      },
      title: 'Mission IT Checklists',
      favicon: '/icons/faviconV2.png',
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/MissionIT/checklists.missionit.com' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Configuration', slug: 'getting-started/configuration' },
            { label: 'Quick Start', slug: 'getting-started/quickstart' },
          ],
        },
        {
          label: 'Claroty CTD',
          items: [
            { label: 'Installation', slug: 'usage/cli' },
            { label: 'Configuration', slug: 'usage/transports' },
            { label: 'Quick Start', slug: 'usage/editor-integration' },
            { label: 'Tutorials', slug: 'usage/flight-control' },
          ],
        },
      ],
    }),
  ],
});
