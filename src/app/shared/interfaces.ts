export interface User {
  email: string
  password: string
  name: string
}

export interface Provider {
  name: string
}

export interface AppVersion {
  name: string,
  image: string,
  provider: Provider
}

export interface Project {
  name: string,
  owner: string,
  members: string[]
}


export interface Catalogue {
  name: string,
  image: string,
  version: string,
  _id?: string,
  provider: string,
  replicas: number,
  project: string
}

export interface Application {
  name: string,
  image: string,
  version: string,
  replicas: number,
  _id?: string
  date: Date,
  formattedDate: string,
  url: string,
  user: string,
  status: string,
  project: string
}