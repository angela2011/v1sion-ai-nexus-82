import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (to be updated when you connect to Supabase)
export interface Database {
  public: {
    Tables: {
      consultations: {
        Row: {
          id: string
          name: string
          email: string
          company: string
          phone?: string
          service_type: string
          message?: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company: string
          phone?: string
          service_type: string
          message?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string
          phone?: string
          service_type?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}