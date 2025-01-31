import { UserData } from '@/app/components/UsersDashboard/components/UsersTable'

const BASE_URL = 'http://localhost:3000'

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Algo deu errado')
  }
  return response.json()
}

export const createUser = async (data: UserData) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`)
  return handleResponse(response)
}

export const getUserById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/users/${id}`)
  return handleResponse(response)
}

export const updateUser = async (id: string, data: UserData) => {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Erro ao atualizar usuário')
  }

  return response.json()
}

export const deleteUser = async (id: string) => {
  return await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
