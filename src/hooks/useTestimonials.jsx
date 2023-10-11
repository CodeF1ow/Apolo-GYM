import { useState } from 'react'
import imgGym from '../images/gym4.jpg'
import imgGym2 from '../images/gym2.jpg'
import imgGym3 from '../images/gym5.jpg'
import imgGym4 from '../images/gym7.jpg'

export const useTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: imgGym,
      name: 'Oscar',
      description: '“He sido miembro de Apolo GYM durante los últimos 6 meses y ha sido una experiencia increíble. Los entrenadores son conocedores y solidarios, el equipo es de primera calidad y la comunidad de miembros es amigable y alentadora..”'
    },
    {
      id: 2,
      image: imgGym2,
      name: 'Laira Trainner',
      description: '“Los instructores de nutrición son los mejores, he alcanzado mi peso ideal y me siento mejor que nunca, gracias a todo el personal, he logrado todos estos cambios importantes en mi cuerpo en 1 año, seguiré trabajando para mejorar.”'
    },
    {
      id: 3,
      image: imgGym3,
      name: 'Pedro Lopez',
      description: '“He sido miembro de Apolo GYM durante los últimos 6 meses y ha sido una experiencia increíble. Los entrenadores son conocedores y solidarios, el equipo es de primera calidad y la comunidad de miembros es amigable y alentadora..”'
    },
    {
      id: 4,
      image: imgGym4,
      name: 'Carlos Body',
      description: '“Los instructores de nutrición son los mejores, he alcanzado mi peso ideal y me siento mejor que nunca, gracias a todo el personal, he logrado todos estos cambios importantes en mi cuerpo en 1 año, seguiré trabajando para mejorar.”'
    }
  ]

  const [showTestimonials, setShowTestimonials] = useState(testimonials.slice(0, 2))

  const slideLeft = () => {
    const slide = showTestimonials.map(el => el.id)
    if (slide[0] !== 1) {
      setShowTestimonials(testimonials.slice(slide[0] - 3, slide[1] - 2))
    }
  }

  const slideRight = () => {
    const slide = showTestimonials.map(el => el.id)
    if (testimonials.length > slide[1]) {
      setShowTestimonials(testimonials.slice(slide[0] + 1, slide[1] + 2))
    }
  }

  return { showTestimonials, slideLeft, slideRight }
}
