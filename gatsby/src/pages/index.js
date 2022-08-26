import * as React from "react"


const IndexPage = () => {
  let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

  const catList = cats.map((cat, i) => 
    <li>
      <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
        {i + 1}: {cat.name}
      </a>
    </li>
  )

  return (
    <div>
      <h1 className="text-3xl font-bold underline m-4">
        Hello world!
      </h1>
      <ul class="m-4">
        {catList}
      </ul>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
