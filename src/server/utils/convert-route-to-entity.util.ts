const mapping: Record<string, string> = {
  'job-applications': 'job_application',
  organizations: 'organization',
  payrolls: 'payroll',
  users: 'user',
  'vacation-requests': 'vacation_request',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
