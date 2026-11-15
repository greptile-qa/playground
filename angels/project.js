// Expected project access requirements are in angels/permissions.md.
export function canReadProject(actorTenantId, projectTenantId) {
  return Boolean(actorTenantId)
}
