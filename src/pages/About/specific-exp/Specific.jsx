import './Specific.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Specific(){
  const { experience } = useParams() // Desestrutura o id corretamente
  const navigate = useNavigate()

  const validId = ["ibm", "fatec", "etec"]

  useEffect(() => {
    if (!validId.includes(experience)) {
      navigate("/about")
    }
  }, [experience])

  return (
    <p>{experience}</p>
  )
}
