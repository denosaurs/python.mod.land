export default function Footer() {
  const container = `text-gray-600 text-sm`;
  const text = `mt-5 flex justify-center text-gray-400 hover:text-gray-400`;
  return (
    <section class={container}>
      <a class={text} href="https://github.com/denosaurs">© 2022 Denosaurs</a>
    </section>
  );
}
