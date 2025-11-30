import { defineQuery, useQuery } from '@pinia/colada'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const useProducts = defineQuery(() => {
  return useQuery({
    key: () => ['products'],
    query: () => {
      return supabase
        .from('product')
        .select()
        .then((data, error) => {
          return data
        })
    },
  })
})
