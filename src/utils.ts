import * as github from '@actions/github'

export async function validateEventType(): Promise<void> {
  if (
    github.context.eventName !== 'pull_request' &&
    github.context.eventName !== 'push' && 
    github.context.eventName !== 'status'
  ) {
    throw new Error('Error, action only works for pull_request, push or status events!')
  }
}
