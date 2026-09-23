export default function Header({ title, image }) {
  return (
    <header>
      <img
        className="dish"
        src={image}
        alt={title}
        onError={(e) => {
          e.currentTarget.src = '/dish.svg'
        }}
      />
      <h1>{title}</h1>
    </header>
  )
}
