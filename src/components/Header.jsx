export default function Header({ title, image }) {
  return (
    <header>
      {/* BUG (issue #6): dish image is missing alt text */}
      <img className="dish" src={image} />
      <h1>{title}</h1>
    </header>
  )
}
