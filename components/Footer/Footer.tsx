import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} Developers. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Devepolers</p>
          <p>
            Contact us:
            <a href="mailto:developers@develop.app">developers@develop.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
