## Finding: concise title

- Location: /workspaces/dexwin-fullstack-assessment/frontend/src/components/TaskBoard.tsx
- Status: confirmed
- Evidence: the useEffect uses  projectId but hass [] as dependency array which means that its selecting another project 
- Impact:
- Priority:High
- Proposed solution:
- Verification:
- Implementation notes:


- Location: /workspaces/dexwin-fullstack-assessment/frontend/src/components/TaskBoard.tsx
- Status: confirmed
- Evidence: task.status =  next mutates the objet then setTasks(tasks) passes the same array reference
- Impact:
- Priority:High
- Proposed solution:
- Verification:
- Implementation notes:

- Location: /workspaces/dexwin-fullstack-assessment/frontend/src/api/client.ts
- Status:  confirmed
- Evidence: there is no res.ok check so projects.map will throw an error 
- Impact:
- Priority:high
- Proposed solution:
- Verification:
- Implementation notes:

- Location: /workspaces/dexwin-fullstack-assessment/frontend/src/api/client.ts
- Status:  confirmed
- Evidence: there is no res.ok check so projects.map will throw an error 
- Impact:
- Priority:high
- Proposed solution:
- Verification:
- Implementation notes:

- Location: /workspaces/dexwin-fullstack-assessment/frontend/src/api/client.ts
- Status:  suspected
- Evidence: no token are attached to any request
- Impact:
- Priority:high
- Proposed solution:
- Verification:
- Implementation notes:

- Location: /workspaces/dexwin-fullstack-assessment/frontend/src/api/client.ts
- Status:  confirmed
- Evidence: there is no res.ok check so projects.map will throw an error 
- Impact:
- Priority:high
- Proposed solution:
- Verification:
- Implementation notes: