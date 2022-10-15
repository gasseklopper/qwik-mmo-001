import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  const { pathname } = useLocation();

  return (
    <header>
      <a class="logo" href="/" aria-label="Logo">
        <QwikLogo />
      </a>
      <nav>
        <a href="/docs" class={{ active: pathname.startsWith('/docs') }} aria-label="Docs">
          Docs
        </a>
        <a href="/about-us" class={{ active: pathname.startsWith('/about-us') }} aria-label="About Us">
          About Us
        </a>
      </nav>
    </header>
  );
});
