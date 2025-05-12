import { useParams } from 'react-router'

function Category() {
  const { categoryId } = useParams()

  return <h1>Catégorie : {categoryId}</h1>
}

export default Category
