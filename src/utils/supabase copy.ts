import { createClient } from '@supabase/supabase-js'

const supaBaseUrl = 'https://clvpdjstdoutmbtoydud.supabase.co'
const anonPublic =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdnBkanN0ZG91dG1idG95ZHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5MzI4NzQsImV4cCI6MTk5MzUwODg3NH0.RE0LpfmTzmRRrZZZ0QsS9Z6YNrEXihRWeQHIxvZkZrY'

export const supabase = createClient(supaBaseUrl, anonPublic)
