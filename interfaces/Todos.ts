// Defines the structure of a todo object fetched from the https://jsonplaceholder.typicode.com/todos endpoint
export interface Todos {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}