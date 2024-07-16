import type { Person } from "src/shared/models"

export const getActors = (persons: Person[] | null | undefined): Person[] | null => {
  if (persons) {
    return persons.filter(person => person.enProfession == 'actor')
  } else {
    return null
  }
}