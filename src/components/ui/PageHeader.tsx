function PageHeader({ src, title }) {
  return (
    <div
      className="page-header"
      style={{
        background: `linear-gradient(to top,rgba(0,0,0,.6),rgba(0,0,0,.6)), url(${src})`,
      }}>
      <h1>{title}</h1>
    </div>
  );
}

export default PageHeader;
