import { useEffect, useState } from 'react';
import { getProjects } from '../api/client';
import {Project} from '../types'


interface ProjectListProps {
selectedProjectId:number | null; 
  onSelect: (id:number) => void  
 }

export default function ProjectList({ selectedProjectId : number , onSelect }:ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState<string | null>()
 
  useEffect(() => {
    let cancelled = false
    getProjects().then(
      (data) => {
        if (!cancelled) setProjects(data)
        }).catch(() => {
      if (!cancelled) setError('Could not load title proect')
     }).finally (() => {
    if (!cancelled) setLoading(false)
    })
  return () => {
    cancelled =true
  }
  }, []);

  if (loading) return <p className="state">loading projects</p>
  if (error) return<p className="error">{error}</p>
  if (projects.length === 0) return <p className="state">No project yet</p>

  return (
    <div className="project-list">
      {projects.map((project) => {
        const active = project.id === selectedProjectId
        return (
        <button
          type="button"
          key={project.id}
          className={
            'project-item' + ('projectid' + (active ? ' '')
          }
          onClick={() => onSelect(project.id)}
        >
          <span className="project-name">{project.name}</span>
          {project.description && (
            <span className="project-desc">{project.description}</span>
          )}
        </button>
        )
})}
    </div>
  );
}
