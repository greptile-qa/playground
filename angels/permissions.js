// Staging Security Review fixture: project reads require tenant ownership.
export function canReadProject(actorTenantId, projectTenantId) {
  return typeof actorTenantId === 'string' && actorTenantId.length > 0 && actorTenantId === projectTenantId
}
