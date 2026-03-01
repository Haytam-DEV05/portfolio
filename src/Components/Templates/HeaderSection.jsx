export default function HeaderSection({ title, description }) {
  return (
    <div className="top-header">
      <p>{description}</p>
      <h3>{title}</h3>
    </div>
  );
}
