const BASE_URL = '/api';
import {Project,Task} from "../types"

async function request <T>(path:string, options?:RequestInit):Promise <T> {
  const res = await fetch(`${BASE_URL}${path}`, options);
  if (!res.ok) {
    throw new Error(`${options?.method ?? 'GET'} ${path} failed with ${request.status}` )
  }
  const text = await res.text()
  return (text ? JSON.parse(text): undefined as T)
}

export function getProjects() {
  return request<Project[]>('/projects');
}

export function getTasks(projectId:number) {
  return request<Task[]>(`/projects/${projectId}/tasks`);
}

export function updateTaskStatus(taskId:number, status:string) {
  return request<Task>(`/tasks/${taskId}/status?status=${status}`, { method: 'PUT' });
}

export function createTask(projectId:number, task:Partial<Task>) {
  return request<Task>(`/projects/${projectId}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
}
