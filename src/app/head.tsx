export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              try {
                const mode = localStorage.getItem('nextjs-blog-starter-theme') || 'system';
                const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const resolved = mode === 'system' ? systemMode : mode;
                document.documentElement.classList.toggle('dark', resolved === 'dark');
                document.documentElement.setAttribute('data-mode', mode);
              } catch (e) {}
            })();
          `,
        }}
      />
    </>
  );
}