// presentation part
// presentation part meamns the below component UI is here
export function User({ name, url }) {
  return (
    <div className="box">
      <img className="img" src={url} />
      <p className="name">
        Hello, <span>{name}🎉🎉</span>
      </p>
    </div>
  );
}
