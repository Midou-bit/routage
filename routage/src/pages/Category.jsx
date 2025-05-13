import { useParams, useNavigate } from 'react-router'

function Category() {
  const { categoryId } = useParams()
  const navigate = useNavigate()

  return (
    <div className="text-center mt-4">
      <h1>Catégorie : {categoryId}</h1>
      <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
        Retour à la page d'accueil
      </button>
    </div>
  )
}

export default Category
