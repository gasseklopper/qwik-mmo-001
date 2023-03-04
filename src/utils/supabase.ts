import { createClient } from '@supabase/supabase-js'

const supaBaseUrl = 'https://imnerbgpuvvqkfwggrzu.supabase.co'
const anonPublic =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbmVyYmdwdXZ2cWtmd2dncnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NjEyMzIsImV4cCI6MTk5MzMzNzIzMn0.29NBSA4WTOrcEW4-WQ_-32MWrrmxy6112PHwKmRXTxM'

export const supabase = createClient(supaBaseUrl, anonPublic)
